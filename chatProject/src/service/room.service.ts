import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomDTO } from 'src/dto/room.dto';
import { RoomEntity } from 'src/entity/room.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
  ) {}

  async createRoom(body: RoomDTO) {    
    try {
      
      return 
    } catch (E) {
      console.log(E);
      return E;
    }
  }
}
