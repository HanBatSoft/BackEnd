import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class RoomDTO {

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, description: '' })
  readonly kind: string;

  @IsString()
  @ApiProperty({ type:Number, description: '' })
  readonly roomId: number;

  @IsString()  
  @ApiProperty({ type: String, description: '' })
  readonly title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, description: '' })
  readonly decription: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: 'datetime', description: '' })
  readonly created_at: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: 'datetime', description: '' })
  readonly updated_at: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, description: '' })
  readonly owner_id: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: Number, description: '' })
  readonly is_private: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: Number, description: '' })
  readonly code: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: Number, description: '' })
  readonly max_participants: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: Number, description: '' })
  readonly visible: number;
}
