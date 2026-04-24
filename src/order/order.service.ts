import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { addToOrder } from './dto/add-to-order.input';
import { createOrderInput } from './dto/create-order.input';
import { Item } from 'src/restaurants/model/item.model';
import { checkoutInput } from './dto/checkout-order.input';
import { cancelOrderInput } from './dto/cancel-order.input';
import { ModifyPaymentMethodInput } from './dto/modify-payment.input';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  async CreateOrder(data: createOrderInput) {
    return this.prismaService.order.create({
      data: data,
    });
  }

  async addToOrder(data: addToOrder) {
    const status = false;
    const order = await this.prismaService.order.findUnique({
      where: {
        id: data.orderId,
      },
    });
    if (!order) {
      throw new BadRequestException('Inavlid Order Id');
    }

    const item = await this.prismaService.item.findUnique({
      where: {
        id: data.itemId,
      },
    });
    if (!item) {
      throw new BadRequestException('Inavlid Item Id');
    }
    const updatedOrder = await this.prismaService.order.update({
      where: {
        id: data.orderId,
      },
      data: {
        Items: {
          connect: { id: data.itemId },
        },
        cost: order.cost + item.price,
      },
    });

    return updatedOrder;
  }

  async checkout(data: checkoutInput) {
    try {
      return await this.prismaService.order.update({
        where: {
          id: data.orderId,
        },
        data: {
          completed: true,
        },
      });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async cancelOrder(data: cancelOrderInput) {
    try {
      const deleted = await this.prismaService.order.delete({
        where: {
          id: data.orderId,
        },
      });
      return deleted;
    } catch (e) {
      return false;
    }
  }

  async ModifyPaymentMethod(data: ModifyPaymentMethodInput) {
    try {
      return await this.prismaService.order.update({
        where: {
          id: data.orderId,
        },
        data: {
          paymentMethod: data.paymentMethod,
        },
      });
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
