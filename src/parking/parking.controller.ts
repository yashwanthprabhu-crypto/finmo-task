import { Controller, Get, Post, Body, Param, Patch, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ParkingService } from './parking.service';
import { ParkCarDto } from './parking.dto';
import { CreateParkingDto } from './dto/create-parking.dto';
import { IncrementSlotDto } from './dto/increment-slot.dto';
import { ClearSlotDto } from './dto/clear-slot.dto';

@ApiTags('Parking')
@Controller('parking')
export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new parking lot' })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Parking lot created successfully',
    schema: {
      properties: {
        message: { type: 'string', example: 'Created a parking lot with 5 slots' },
        total_slots: { type: 'number', example: 5 }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid number of slots',
    schema: {
      properties: {
        message: { type: 'string', example: 'Number of slots must be greater than 0' },
        error: { type: 'string', example: 'Bad Request' },
        statusCode: { type: 'number', example: 400 }
      }
    }
  })
  create(@Body() createParkingDto: CreateParkingDto) {
    return this.parkingService.createParkingLot(createParkingDto.no_of_slot);
  }

  @Patch('parking_lot')
  @ApiOperation({ summary: 'Add more slots to the parking lot' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Slots added successfully',
    schema: {
      properties: {
        message: { type: 'string', example: 'Added 4 slots. Total slots are now 9' },
        total_slots: { type: 'number', example: 9 }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid increment value or parking lot not initialized',
    schema: {
      properties: {
        message: { type: 'string', example: 'Parking lot not initialized or invalid increment value' },
        error: { type: 'string', example: 'Bad Request' },
        statusCode: { type: 'number', example: 400 }
      }
    }
  })
  incrementSlots(@Body() incrementSlotDto: IncrementSlotDto) {
    return this.parkingService.incrementSlots(incrementSlotDto.increment_slot);
  }

  @Post('park')
  @ApiOperation({ summary: 'Park a car in the parking lot' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Car parked successfully',
    schema: {
      properties: {
        message: { type: 'string', example: 'Allocated slot number: 1' },
        allocated_slot_number: { type: 'number', example: 1 }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Parking lot is full or not initialized',
    schema: {
      properties: {
        message: { type: 'string', example: 'Sorry, parking lot is full' },
        error: { type: 'string', example: 'Bad Request' },
        statusCode: { type: 'number', example: 400 }
      }
    }
  })
  parkCar(@Body() parkCarDto: ParkCarDto) {
    return this.parkingService.parkCar(parkCarDto);
  }

  @Get('registration_numbers/:color')
  @ApiOperation({ summary: 'Get registration numbers of cars by color' })
  @ApiParam({ name: 'color', example: 'white', description: 'Color of the cars to search for' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Registration numbers retrieved successfully',
    schema: {
      properties: {
        message: { type: 'string', example: 'Found 2 cars' },
        registration_numbers: {
          type: 'array',
          items: { type: 'string' },
          example: ['KA-01-HH-1234', 'KA-02-AB-9999']
        }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Parking lot not initialized or invalid color',
    schema: {
      properties: {
        message: { type: 'string', example: 'Parking lot not initialized or no cars found with color white' },
        error: { type: 'string', example: 'Bad Request' },
        statusCode: { type: 'number', example: 400 }
      }
    }
  })
  getRegistrationNumbersByColor(@Param('color') color: string) {
    return this.parkingService.getRegistrationNumbersByColor(color);
  }

  @Get('slot_numbers/:color')
  @ApiOperation({ summary: 'Get slot numbers of cars by color' })
  @ApiParam({ name: 'color', example: 'white', description: 'Color of the cars to search for' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Slot numbers retrieved successfully',
    schema: {
      properties: {
        message: { type: 'string', example: 'Found cars in 3 slots' },
        slot_numbers: {
          type: 'array',
          items: { type: 'number' },
          example: [1, 5, 12]
        }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Parking lot not initialized or invalid color',
    schema: {
      properties: {
        message: { type: 'string', example: 'Parking lot not initialized or no cars found with color white' },
        error: { type: 'string', example: 'Bad Request' },
        statusCode: { type: 'number', example: 400 }
      }
    }
  })
  getSlotNumbersByColor(@Param('color') color: string) {
    return this.parkingService.getSlotNumbersByColor(color);
  }

  @Post('clear')
  @ApiOperation({ summary: 'Clear a parking slot' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Slot cleared successfully',
    schema: {
      properties: {
        message: { type: 'string', example: 'Slot number 1 is free' },
        freed_slot_number: { type: 'number', example: 1 }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid slot number or slot already empty',
    schema: {
      properties: {
        message: { type: 'string', example: 'Slot already empty or invalid slot number' },
        error: { type: 'string', example: 'Bad Request' },
        statusCode: { type: 'number', example: 400 }
      }
    }
  })
  clearSlot(@Body() clearSlotDto: ClearSlotDto) {
    return this.parkingService.clearSlot(clearSlotDto);
  }

  @Get('status')
  @ApiOperation({ summary: 'Get status of all occupied parking slots' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Status retrieved successfully',
    schema: {
      type: 'array',
      items: {
        properties: {
          slot_no: { type: 'number', example: 1 },
          registration_no: { type: 'string', example: 'KA-01-HH-1234' },
          color: { type: 'string', example: 'White' }
        }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Parking lot not initialized',
    schema: {
      properties: {
        message: { type: 'string', example: 'Parking lot not initialized' },
        error: { type: 'string', example: 'Bad Request' },
        statusCode: { type: 'number', example: 400 }
      }
    }
  })
  getStatus() {
    return this.parkingService.getStatus();
  }
}
