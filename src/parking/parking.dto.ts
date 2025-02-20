import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class InitializeParkingLotDto {
  @ApiProperty({ example: 6, description: 'Number of parking slots to initialize' })
  @IsNumber()
  @IsPositive()
  no_of_slot: number;
}

export class IncrementParkingLotDto {
  @ApiProperty({ example: 3, description: 'Number of slots to add' })
  @IsNumber()
  @IsPositive()
  increment_slot: number;
}

export class ParkCarDto {
  @ApiProperty({ example: 'KA-01-AB-2211', description: 'Car registration number' })
  @IsString()
  @IsNotEmpty()
  car_reg_no: string;

  @ApiProperty({ example: 'white', description: 'Car color' })
  @IsString()
  @IsNotEmpty()
  color: string;
}

export class ClearSlotByNumberDto {
  @ApiProperty({ example: 1, description: 'Slot number to clear' })
  @IsNumber()
  @IsPositive()
  slot_number: number;
}

export class ClearSlotByRegNoDto {
  @ApiProperty({ example: 'KA-01-AB-2211', description: 'Car registration number' })
  @IsString()
  @IsNotEmpty()
  car_registration_no: string;
}

// Response DTOs
export class ParkingLotResponseDto {
  @ApiProperty({ example: 6 })
  total_slot: number;
}

export class AllocatedSlotResponseDto {
  @ApiProperty({ example: 1 })
  allocated_slot_number: number;
}

export class FreedSlotResponseDto {
  @ApiProperty({ example: 1 })
  freed_slot_number: number;
}

export class ParkingStatusResponseDto {
  @ApiProperty({ example: 1 })
  slot_no: number;

  @ApiProperty({ example: 'KA-01-HH-1234' })
  registration_no: string;

  @ApiProperty({ example: 'red' })
  color: string;
} 