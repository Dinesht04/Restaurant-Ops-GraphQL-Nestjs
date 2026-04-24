import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './model/restaurant.model';
import { OrderService } from 'src/order/order.service';
import { Order } from './model/order.model';
import { createOrderInput } from 'src/order/dto/create-order.input';
import { addToOrder } from 'src/order/dto/add-to-order.input';
import { checkoutInput } from 'src/order/dto/checkout-order.input';
import { cancelOrderInput } from 'src/order/dto/cancel-order.input';
import { ModifyPaymentMethodInput } from 'src/order/dto/modify-payment.input';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(
    private readonly restaurantService: RestaurantsService,
    private readonly orderService: OrderService,
  ) {}

  @Query(() => [Restaurant])
  findAll() {
    return this.restaurantService.getAllRestaurants;
  }

  @Mutation(() => [Order])
  createOrder(@Args('createOrderInput') data: createOrderInput) {
    return this.orderService.CreateOrder(data);
  }

  @Mutation(() => [Order])
  addItemToOrder(@Args('addOrderInput') data: addToOrder) {
    return this.orderService.addToOrder(data);
  }

  @Mutation(() => [Order])
  checkoutOrder(@Args('checkoutOrderInput') data: checkoutInput) {
    return this.orderService.checkout(data);
  }

  @Mutation(() => [Order])
  cancelOrder(@Args('cancelOrderInput') data: cancelOrderInput) {
    return this.orderService.cancelOrder(data);
  }

  @Mutation(() => [Order])
  modifyPaymentMethod(
    @Args('modifyPaymentMethod') data: ModifyPaymentMethodInput,
  ) {
    return this.orderService.ModifyPaymentMethod(data);
  }
}
