import { Injectable, BadRequestException } from '@nestjs/common';
import { ParkCarDto } from './parking.dto';
import { ClearSlotDto } from './dto/clear-slot.dto';

@Injectable()
export class ParkingService {
  private slots: Array<{ car_reg_no: string; color: string } | null> = [];

  createParkingLot(slots: number) {
    if (slots <= 0) {
      throw new BadRequestException('Number of slots must be positive');
    }
    this.slots = new Array(slots).fill(null);
    return { total_slot: slots };
  }

  parkCar(parkCarDto: ParkCarDto) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    const index = this.slots.findIndex(slot => slot === null);
    if (index === -1) throw new BadRequestException('Parking lot full');
    
    this.slots[index] = {
      car_reg_no: parkCarDto.car_reg_no,
      color: parkCarDto.color
    };
    
    return { allocated_slot_number: index + 1 };
  }

  getStatus() {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    return this.slots.map((slot, index) => ({
      slot_no: index + 1,
      car_reg_no: slot?.car_reg_no || null,
      color: slot?.color || null
    }));
  }

  getRegistrationNumbersByColor(color: string) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    const registrationNumbers = this.slots
      .filter(slot => slot !== null && slot.color.toLowerCase() === color.toLowerCase())
      .map(slot => slot!.car_reg_no);

    return { registration_numbers: registrationNumbers };
  }

  getSlotNumbersByColor(color: string) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    const slotNumbers = this.slots
      .map((slot, index) => ({ slot, index }))
      .filter(item => item.slot !== null && item.slot.color.toLowerCase() === color.toLowerCase())
      .map(item => item.index + 1);

    return { slot_numbers: slotNumbers };
  }

  incrementSlots(incrementSlot: number) {
    if (incrementSlot <= 0) {
      throw new BadRequestException('Increment value must be positive');
    }

    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    const additionalSlots = new Array(incrementSlot).fill(null);
    this.slots = [...this.slots, ...additionalSlots];
    
    return { total_slot: this.slots.length };
  }

  clearSlot(clearSlotDto: ClearSlotDto) {
    if (!this.slots.length) {
      throw new BadRequestException('Parking lot not initialized');
    }

    if (!clearSlotDto.slot_number && !clearSlotDto.car_registration_no) {
      throw new BadRequestException('Slot number or car registration number is required');
    }

    if (clearSlotDto.slot_number) {
      const slotNumber = clearSlotDto.slot_number;
      if (slotNumber < 1 || slotNumber > this.slots.length) {
        throw new BadRequestException('Invalid slot number');
      }

      const index = slotNumber - 1;
      
      if (this.slots[index] === null) {
        throw new BadRequestException('Slot is already empty');
      }

      this.slots[index] = null;
      return { freed_slot_number: slotNumber };
    }

    if (clearSlotDto.car_registration_no) {
      const index = this.slots.findIndex(slot => slot?.car_reg_no === clearSlotDto.car_registration_no);
      if (index === -1) {
        throw new BadRequestException('Car registration number not found');
      }
      this.slots[index] = null;
      return { freed_slot_number: index + 1 };
    }
  }
}