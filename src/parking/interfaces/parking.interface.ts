export interface ParkedCar {
  registration_no: string;
  color: string;
  slot_no: number;
}

export interface ParkingLot {
  totalSlots: number;
  occupiedSlots: Set<number>;
  cars: Map<string, ParkedCar>; // registration_no -> ParkedCar
} 