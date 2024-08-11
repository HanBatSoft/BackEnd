import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ChatService } from 'src/service/chat.service';
import { ApiTags } from '@nestjs/swagger';
import { Chat } from 'src/schema/chat.schema';
import { ChatDto } from 'src/dto/chat.dto';
import { ObjectId, UpdateWriteOpResult } from 'mongoose';
import { RoomService } from 'src/service/room.service';

@Controller('chat')
@ApiTags('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly roomService: RoomService
    ) {}

  @Post('/create')
  async create(@Body() ecg: ChatDto): Promise<Chat> {
    return this.chatService.create(ecg);
  }

  @Post('/findOneAndUpdate')
  async findOneAndUpdate(@Body() ecg: ChatDto): Promise<Chat> {
    return this.chatService.findOneAndUpdate(ecg);
  }

  @Post('/updateMany')
  async updateMany(@Body() ecg: ChatDto): Promise<UpdateWriteOpResult> {
    return this.chatService.updateMany(ecg);
  }

  @Post('/delete')
  async deleteMany(@Body() ecg: ChatDto): Promise<{ deletedCount: number }> {
    return this.chatService.delete(ecg);
  }

  @Get('/find')
  async findAll(): Promise<Chat[]> {
    return this.chatService.findAll();
  }

  @Get('/findMany')
  async findMany(
    @Query('id') eq: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<Chat[]> {
    return this.chatService.findMany(eq, startDate, endDate);
  }

  @Get('/findOne')
  async findOne(@Query('id') eq: string): Promise<Chat> {
    return this.chatService.findOne(eq);
  }
}
