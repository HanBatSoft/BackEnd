import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, IsDateString } from "class-validator";
import { Document } from "mongoose";

const options : SchemaOptions = ({
        timestamps: true,           
        collection:process.env.COLLECTION
    })


@Schema(options)
export class Chat extends Document{    

    @Prop({
        required: true,
        unique:true,           
    })
    @IsNumber()
    @IsNotEmpty()
    roomId: number;

    @Prop({
        required: true,     
    })
    @IsDateString()
    @IsNotEmpty()
    writetime:string;

    @Prop({
        required: true,     
    })
    @IsString()  
    @IsNotEmpty()  
    writer_id:string;

    @Prop()   
    @IsString()
    text:string;    

    @Prop()   
    @IsArray()
    file:Buffer;

    // readonly readOnlyData: {eq:string; writetime:string; timezone:string; bpm:number; ecgpacket:number[]}
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
/* virtual field 설정 */
// EcgSchema.virtual('readOnlyData').get(function (this:Ecg){
//     return {
//         eq:this.eq,
//         writetime:this.writetime,
//         timezone : this.timezone,
//         bpm: this.bpm,
//         ecgpacket: this.ecgpacket
//     }
// })