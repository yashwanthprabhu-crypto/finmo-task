import { Test, TestingModule } from '@nestjs/testing';
import { ParkingController } from './parking.controller';
import { ParkingService } from './parking.service';
import { BadRequestException } from '@nestjs/common';

describe('ParkingController', () => {
  let controller: ParkingController;
  let service: ParkingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingController],
      providers: [ParkingService],
    }).compile();

    controller = module.get(ParkingController);
    service = module.get(ParkingService);
  });

  describe('create', () => {
    it('should create parking lot', () => {
      const result = controller.create({ no_of_slot: 5 });
      expect(result).toEqual({ total_slot: 5 });
    });
  });

  describe('parkCar', () => {
    beforeEach(() => {
      controller.create({ no_of_slot: 2 });
    });

    it('should park a car', () => {
      const result = controller.parkCar({
        car_reg_no: 'KA-01-HH-1234',
        color: 'White'
      });
      expect(result).toEqual({ allocated_slot_number: 1 });
    });
  });

  describe('getRegistrationNumbersByColor', () => {
    beforeEach(() => {
      controller.create({ no_of_slot: 2 });
      controller.parkCar({ car_reg_no: 'KA-01-HH-1234', color: 'White' });
    });

    it('should get registration numbers by color', () => {
      const result = controller.getRegistrationNumbersByColor('White');
      expect(result).toEqual({
        registration_numbers: ['KA-01-HH-1234']
      });
    });
  });

  describe('getStatus', () => {
    beforeEach(() => {
      controller.create({ no_of_slot: 1 });
      controller.parkCar({ car_reg_no: 'KA-01-HH-1234', color: 'White' });
    });

    it('should get parking lot status', () => {
      const result = controller.getStatus();
      expect(result).toEqual([
        {
          slot_no: 1,
          car_reg_no: 'KA-01-HH-1234',
          color: 'white'
        }
      ]);
    });
  });

  describe('clearSlot', () => {
    beforeEach(() => {
      controller.create({ no_of_slot: 1 });
      controller.parkCar({ car_reg_no: 'KA-01-HH-1234', color: 'White' });
    });

    it('should clear slot', () => {
      const result = controller.clearSlot({ slot_number: 1 });
      expect(result).toEqual({ freed_slot_number: 1 });
    });
  });

  describe('incrementSlots', () => {
    beforeEach(() => {
      controller.create({ no_of_slot: 2 });
    });

    it('should increment slots', () => {
      const result = controller.incrementSlots({ increment_slot: 3 });
      expect(result).toEqual({ total_slot: 5 });
    });
  });
}); 