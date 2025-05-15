import { ObjectId } from 'mongoose';

export class variantDetailsDto {
  selectedSize: string;

  selectedColor: string;

  variantQuantity: number;
}

export class productRequest {
  itemId: ObjectId;

  itemName: string;

  variantsDetails: variantDetailsDto[];

  basePrice: number;

  quantity: number;
}

export class CreateOrderDto {
  userId: ObjectId;

  productRequests: productRequest[];

  totalAmount: number;

  orderStatus: 'Paid';

  paymentStatus: string;

  paymentMethod: string;

  shippingAddress: string;
}
