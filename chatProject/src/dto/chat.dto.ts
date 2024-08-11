import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class ChatDto{
    
    @IsNumber()
    roomId: number;
    
    @IsString()    
    @IsOptional()
    writetime:string;
    
    @IsString()    
    @IsOptional()
    writer_id:string;

    @IsString()
    @IsOptional()
    text:number;
    
    @IsArray()   
    @IsOptional() 
    file:number[];
}