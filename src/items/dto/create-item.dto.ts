export class CreateItemDto {
  name: string;
  description: string;
  category: string;
  subCategory: string;
  brand: string;
  sizeOptions: string[];
  colorOptions: string[];
  material: string;
  price: number;
  discountPrice: string;
  // currency: string;
  stock: number;
  isAvailable: boolean;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  genderTarget: string;
  // ratings: number;
  tags: string[];
  sku: string;
  deliveryInfo: string;
}
