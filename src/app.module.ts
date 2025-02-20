import { Module } from '@nestjs/common';
import { ParkingModule } from './parking/parking.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ParkingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
