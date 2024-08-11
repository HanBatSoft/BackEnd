import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class RoomMemberDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, description: '' })
  readonly kind: string;

  @IsString()
  @ApiProperty({ type: String, description: '' })
  readonly id: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: Number, description: '' })
  readonly room_id: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: 'datetime', description: '' })
  readonly joined_at: string;
}
