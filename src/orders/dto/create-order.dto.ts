import { ObjectId } from 'mongoose';

export class productsRequest {
  itemId: ObjectId;

  itemName: string;

  selectedSize: string;

  selectedColor: string;

  quantity: number;

  basePrice: number;
}

export class CreateOrderDto {
  userId: ObjectId;

  productsRequests: productsRequest[];

  shippingAddress: string;

  paymentMethod: string;

  paidAmount: string;
}
