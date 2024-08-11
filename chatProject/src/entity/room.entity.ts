import { Entity, Column, PrimaryGeneratedColumn, Double, Int32 } from 'typeorm';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  idx: number;
  @Column({ type: 'bigint' })
  roomId: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  decription: string;

  @Column({ type: 'datetime' })
  created_at: string;

  @Column({ type: 'datetime' })
  updated_at: string;

  @Column({ type: 'varchar' })
  owner_id: string;

  @Column({ type: 'tinyint' })
  is_private: number;

  @Column({ type: 'smallint' })
  code: number;

  @Column({ type: 'smallint' })
  max_participants: number;

  @Column({ type: 'tinyint' })
  visible: number;
}
