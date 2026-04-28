import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Item } from './item.model';
import { isNullableType } from 'graphql';

export enum PaymentMethod {
  CARD = 'CARD',
  CASH = 'CASH',
  UPI = 'UPI',
}

registerEnumType(PaymentMethod, {
  name: 'PaymentMethod',
});

@ObjectType()
export class Order {
  @Field(() => ID)
  id: number;

  @Field(() => [Item])
  items: Item[];

  @Field()
  restaurantId: number;

  @Field()
  cost: number;

  @Field()
  completed: boolean;

  @Field(() => PaymentMethod)
  paymentMethod: PaymentMethod;
}
