import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class ParkCarDto {
  @ApiProperty({
    example: 'KA-01-AB-2211',
    description: 'Car registration number'
  })
  @IsString()
  @IsNotEmpty()
  car_reg_no: string;

  @ApiProperty({
    example: 'white',
    description: 'Color of the car'
  })
  @IsString()
  @IsNotEmpty()
  car_color: string;
} 