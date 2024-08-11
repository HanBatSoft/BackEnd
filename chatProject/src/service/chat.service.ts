import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import  { Model, ObjectId, UpdateWriteOpResult} from 'mongoose';
import { ChatDto } from 'src/dto/chat.dto';
import { Chat } from 'src/schema/chat.schema';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private chatModel: Model<Chat>,        
  ){}  

  async create(chat:ChatDto): Promise<Chat>{
    try{     
      
      return await this.chatModel.create(chat)
      // const createdEcg = new this.ecgModel(ecg);          
      // return await createdEcg.save();
    }catch(E){
      console.log(E)
      console.log(E.stack)
    }    
  }

  async findAll():Promise<Chat[]>{
    // mongoose.model(Ecg.name,EcgSchema,'realtimeEcg')
    return await this.chatModel.find().exec()
  }

  async findMany(roomId:string,startDate:string,endDate:string):Promise<Chat[]>{
    return await this.chatModel.find({
      roomId:roomId,
      writetime:{
      $gte:startDate,
      $lt:endDate
    }})
  }

  async findOne(roomId:string):Promise<Chat>{
    return await this.chatModel.findOne({roomId});
  }

  async findOneAndUpdate(body:ChatDto):Promise<Chat>{    
    const updatedChat = await this.chatModel.findOneAndUpdate({roomId:body.roomId},{$set:{writetime:body.writetime}},{new:true})
    return updatedChat
  }

  async updateMany(body:ChatDto):Promise<UpdateWriteOpResult>{    
    const updatedChat = await this.chatModel.updateMany({roomId:body.roomId},{$set:{writetime:body.writetime}},{new:true})
    return updatedChat
  }

  async delete(body:ChatDto):Promise<{deletedCount: number}>{    
    const deletedChat = await this.chatModel.deleteMany({roomId:body.roomId}).exec();
    return deletedChat
  }
}
