import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class CreateParkingDto {
  @ApiProperty({
    example: 5,
    description: 'Number of parking slots to create'
  })
  @IsNumber()
  @Min(1)
  no_of_slot: number;
} 