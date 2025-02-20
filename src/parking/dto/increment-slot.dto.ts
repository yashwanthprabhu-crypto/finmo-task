import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class IncrementSlotDto {
  @ApiProperty({
    example: 3,
    description: 'Number of slots to add to the parking lot'
  })
  @IsNumber()
  @Min(1)
  increment_slot: number;
} 