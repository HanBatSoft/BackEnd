import { Entity, Column, PrimaryGeneratedColumn, Double, Int32 } from 'typeorm';

@Entity('room_member')
export class RoomMemberEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'varchar' })
  id: string;

  @Column({ type: 'bigint' })
  room_id: number;

  @Column({ type: 'datetime' })
  joined_at: string;
}
