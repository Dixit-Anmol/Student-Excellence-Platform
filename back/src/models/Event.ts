import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column({ type: 'timestamp' })
    date: Date;

    @Column()
    location: string;

    @Column({ default: 0 })
    maxParticipants: number;

    @ManyToOne('User', 'events')
    organizer: any;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
