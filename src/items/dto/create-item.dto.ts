export class CreateItemDto {
  name: string;
  description: string;
  category: string;
  subCategory: string;
  brand: string;

  sizeOptions: string[];
  colorOptions: string[];
  material: string;
  basePrice: number;
  discountPrice: string;

  isAvailable: boolean;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  tags: string[];

  deliveryInfo: string;
}
