import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ClearSlotDto {
  @ApiProperty({
    example: 1,
    description: 'Slot number to clear',
    required: false
  })
  @IsNumber()
  @IsOptional()
  slot_number?: number;

  @ApiProperty({
    example: 'KA-01-AB-2211',
    description: 'Car registration number to remove',
    required: false
  })
  @IsString()
  @IsOptional()
  car_registration_no?: string;
} 