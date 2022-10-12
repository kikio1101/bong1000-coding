import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

export enum ClothingType {
  PANTS = 'pants',
  CAP = 'cap',
  SHIRT = 'shirt',
}
@Entity()
export class Product {
  @PrimaryGeneratedColumn() //pk
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  type: ClothingType;

  @Column()
  color: string;

  @Column()
  price: number;
}
