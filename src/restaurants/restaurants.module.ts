import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { OrderService } from 'src/order/order.service';
import { RestaurantsResolver } from './restaurants.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [],
  providers: [
    PrismaService,
    RestaurantsService,
    RestaurantsResolver,
    OrderService,
  ],
  controllers: [],
})
export class RestaurantsModule {}
