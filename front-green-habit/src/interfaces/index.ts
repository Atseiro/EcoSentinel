export interface Stats {
  totalSale: number;
  quantitiesSold: number;
  totalOrder: number;
  averageSales: number;
}

export interface Product {
  productId: string;
  name: string;
  category: string;
  price: number;
  brand: string;
  releaseYear: number;
  features: string[];
}

export interface Customer {
  customerId: string;
  username: string;
  age: number;
  gender: string;
  loyaltyMember: boolean;
  loyaltyPointsEarned: number;
}

export interface Sale {
  saleId: string;
  product: Product;
  quantitySold: number;
  totalRevenue: number;
  saleDate: string;
  region: string;
  salesChannel: string;
  customer: Customer;
  paymentMethod: string;
  purchaseFeedback?: string;
}
