import { Injectable, BadRequestException } from '@nestjs/common';
import { ParkCarDto } from './parking.dto';
import { ClearSlotDto } from './dto/clear-slot.dto';
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

@Injectable()
export class ParkingService {
  private slots: Array<{ car_reg_no: string; color: string } | null> = [];
  private freeSlots = new MinPriorityQueue<number>(); // Min heap for nearest slot allocation
  private regNoToSlotMap = new Map<string, number>(); // For O(1) registration number lookups
  private colorToRegNoMap = new Map<string, Set<string>>(); // For O(1) color-based lookups

  createParkingLot(slots: number) {
    if (slots <= 0) {
      throw new BadRequestException('Number of slots must be positive');
    }
    
    this.slots = new Array(slots).fill(null);
    this.freeSlots.clear();
    this.regNoToSlotMap.clear();
    this.colorToRegNoMap.clear();

    // Initialize min heap with all available slots
    for (let i = 0; i < slots; i++) {
      this.freeSlots.enqueue(i);
    }
    
    return { total_slot: slots };
  }

  parkCar(parkCarDto: ParkCarDto) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }
    if (this.freeSlots.isEmpty()) {
      throw new BadRequestException('Parking lot full');
    }

    // Get nearest available slot from min heap - O(log n)
    const slotIndex = this.freeSlots.dequeue()!;
    
    const normalizedColor = parkCarDto.color.toLowerCase();
    
    this.slots[slotIndex] = {
      car_reg_no: parkCarDto.car_reg_no,
      color: normalizedColor
    };

    // Update lookup maps - O(1)
    this.regNoToSlotMap.set(parkCarDto.car_reg_no, slotIndex);
    
    if (!this.colorToRegNoMap.has(normalizedColor)) {
      this.colorToRegNoMap.set(normalizedColor, new Set());
    }
    this.colorToRegNoMap.get(normalizedColor)!.add(parkCarDto.car_reg_no);
    
    return { allocated_slot_number: slotIndex + 1 };
  }

  getStatus() {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    return this.slots
      .map((slot, index) => {
        if (slot === null) return null;
        return {
          slot_no: index + 1,
          car_reg_no: slot.car_reg_no,
          color: slot.color
        };
      })
      .filter(slot => slot !== null);  // Remove null entries
  }

  getRegistrationNumbersByColor(color: string) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    // Convert to lowercase for case-insensitive comparison
    const normalizedColor = color.toLowerCase();
    const registrationNumbers = Array.from(this.colorToRegNoMap.get(normalizedColor) || []);
    return { registration_numbers: registrationNumbers };
  }

  getSlotNumbersByColor(color: string) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    const slotNumbers: number[] = [];
    // O(1) lookup for registration numbers by color
    const regNos = this.colorToRegNoMap.get(color.toLowerCase());
    
    if (regNos) {
      // O(1) lookup for each registration number's slot
      for (const regNo of regNos) {
        const slot = this.regNoToSlotMap.get(regNo);
        if (slot !== undefined) {
          slotNumbers.push(slot + 1);
        }
      }
    }

    return { slot_numbers: slotNumbers };
  }

  incrementSlots(incrementSlot: number) {
    if (incrementSlot <= 0) {
      throw new BadRequestException('Increment value must be positive');
    }
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    const currentSize = this.slots.length;
    const additionalSlots = new Array(incrementSlot).fill(null);
    this.slots = [...this.slots, ...additionalSlots];
    
    // Add new slots to min heap
    for (let i = currentSize; i < currentSize + incrementSlot; i++) {
      this.freeSlots.enqueue(i);
    }
    
    return { total_slot: this.slots.length };
  }

  clearSlot(clearSlotDto: ClearSlotDto) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    let slotIndex: number | null = null;

    if (clearSlotDto.slot_number) {
      if (clearSlotDto.slot_number < 1 || clearSlotDto.slot_number > this.slots.length) {
        throw new BadRequestException('Invalid slot number');
      }
      slotIndex = clearSlotDto.slot_number - 1;
    } else if (clearSlotDto.car_registration_no) {
      // O(1) lookup using map
      slotIndex = this.regNoToSlotMap.get(clearSlotDto.car_registration_no) ?? null;
      if (slotIndex === null) {
        throw new BadRequestException('Car registration number not found');
      }
    } else {
      throw new BadRequestException('Slot number or car registration number is required');
    }

    if (this.slots[slotIndex] === null) {
      throw new BadRequestException('Slot is already empty');
    }

    const carDetails = this.slots[slotIndex]!;
    
    // Update data structures
    this.slots[slotIndex] = null;
    this.freeSlots.enqueue(slotIndex);
    this.regNoToSlotMap.delete(carDetails.car_reg_no);
    
    const colorSet = this.colorToRegNoMap.get(carDetails.color);
    if (colorSet) {
      colorSet.delete(carDetails.car_reg_no);
      if (colorSet.size === 0) {
        this.colorToRegNoMap.delete(carDetails.color);
      }
    }

    return { freed_slot_number: slotIndex + 1 };
  }
}