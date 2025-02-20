import { Test, TestingModule } from '@nestjs/testing';
import { ParkingService } from './parking.service';
import { BadRequestException } from '@nestjs/common';

describe('ParkingService', () => {
  let service: ParkingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingService],
    }).compile();

    service = module.get(ParkingService);
  });

  describe('createParkingLot', () => {
    it('should create a parking lot with specified slots', () => {
      const result = service.createParkingLot(5);
      expect(result).toEqual({ total_slot: 5 });
    });

    it('should throw error for invalid slot number', () => {
      expect(() => service.createParkingLot(0)).toThrow(BadRequestException);
      expect(() => service.createParkingLot(-1)).toThrow(BadRequestException);
    });
  });

  describe('parkCar', () => {
    beforeEach(() => {
      service.createParkingLot(2);
    });

    it('should park a car successfully', () => {
      const result = service.parkCar({
        car_reg_no: 'KA-01-HH-1234',
        color: 'White'
      });
      expect(result).toEqual({ allocated_slot_number: 1 });
    });

    it('should throw error when parking lot is full', () => {
      service.parkCar({ car_reg_no: 'KA-01-HH-1234', color: 'White' });
      service.parkCar({ car_reg_no: 'KA-01-HH-5678', color: 'Black' });
      
      expect(() => 
        service.parkCar({ car_reg_no: 'KA-01-HH-9999', color: 'Red' })
      ).toThrow(BadRequestException);
    });
  });

  describe('getRegistrationNumbersByColor', () => {
    beforeEach(() => {
      service.createParkingLot(3);
      service.parkCar({ car_reg_no: 'KA-01-HH-1234', color: 'White' });
      service.parkCar({ car_reg_no: 'KA-01-HH-5678', color: 'White' });
      service.parkCar({ car_reg_no: 'KA-01-HH-9999', color: 'Black' });
    });

    it('should return registration numbers for given color', () => {
      const result = service.getRegistrationNumbersByColor('White');
      expect(result.registration_numbers).toEqual(['KA-01-HH-1234', 'KA-01-HH-5678']);
    });

    it('should return empty array for non-existent color', () => {
      const result = service.getRegistrationNumbersByColor('Red');
      expect(result.registration_numbers).toEqual([]);
    });
  });

  describe('clearSlot', () => {
    beforeEach(() => {
      service.createParkingLot(2);
      service.parkCar({ car_reg_no: 'KA-01-HH-1234', color: 'White' });
    });

    it('should clear slot by slot number', () => {
      const result = service.clearSlot({ slot_number: 1 });
      expect(result).toEqual({ freed_slot_number: 1 });
    });

    it('should clear slot by registration number', () => {
      const result = service.clearSlot({ car_registration_no: 'KA-01-HH-1234' });
      expect(result).toEqual({ freed_slot_number: 1 });
    });

    it('should throw error for invalid slot number', () => {
      expect(() => 
        service.clearSlot({ slot_number: 3 })
      ).toThrow(BadRequestException);
    });

    it('should throw error for non-existent registration number', () => {
      expect(() => 
        service.clearSlot({ car_registration_no: 'INVALID' })
      ).toThrow(BadRequestException);
    });
  });

  describe('incrementSlots', () => {
    beforeEach(() => {
      service.createParkingLot(2);
    });

    it('should increment parking lot size', () => {
      const result = service.incrementSlots(3);
      expect(result).toEqual({ total_slot: 5 });
    });

    it('should throw error for invalid increment value', () => {
      expect(() => service.incrementSlots(0)).toThrow(BadRequestException);
      expect(() => service.incrementSlots(-1)).toThrow(BadRequestException);
    });
  });
}); 