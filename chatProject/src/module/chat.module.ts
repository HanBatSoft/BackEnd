import { Module } from '@nestjs/common';
import { ChatController } from 'src/controller/chat.controller';
import { ChatService } from 'src/service/chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from 'src/schema/chat.schema';
import { ChatWebsocket } from 'src/service/chat.websocket';
import { RoomService } from 'src/service/room.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entity/room.entity';
import { RoomMemberEntity } from 'src/entity/room_member.entity';



@Module({
  imports: [    
    MongooseModule.forFeature([{name:Chat.name,schema:ChatSchema}]),  
    TypeOrmModule.forFeature([RoomEntity,RoomMemberEntity])        
],
  controllers: [ChatController],  
  providers: [ChatService,ChatWebsocket,RoomService],
})

export class ChatModule{}