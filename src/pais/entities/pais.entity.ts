import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm';
import { Provincia } from 'src/provincia/entities/provincia.entity';

@ObjectType()
@Entity('pais')
export class Pais {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  nombre: string;
  @Field({ nullable: true })
  @Column()
  poblacion: number;

  @Field(() => [Provincia], { nullable: true })
  @OneToMany(type => Provincia, e => e.pais)
  provincias: Provincia[];

  /**
   * Control fields
   */
  @Field()
  @UpdateDateColumn()
  lastUpdatedAt: Date;
  @Field({ nullable: true })
  @CreateDateColumn()
  createdAt: Date;
  @Field({ nullable: true })
  @DeleteDateColumn({ nullable: true })
  deletedAt: string;
  @Field({ nullable: true })
  @VersionColumn()
  version: number;
}
