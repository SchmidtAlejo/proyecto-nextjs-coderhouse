export interface Order {
  id: string
  cart: CartItem[]
  uid: string
  total: number
}

export interface Product {
  sku?: string
  shippingInformation?: string
  minimumOrderQuantity?: number
  category: string
  thumbnail: string
  id: number | string
  qty: number
  stock: any
  returnPolicy?: string
  dimensions?: Dimensions
  meta?: Meta
  brand: string
  availabilityStatus?: string
  tags?: string[]
  price: number
  description: string
  title: string
  reviews?: Review[]
  warrantyInformation?: string
  discountPercentage: number
  rating: number
  images: string[]
  weight?: number
}

export interface Dimensions {
  width: number
  depth: number
  height: number
}

export interface Meta {
  qrCode: string
  createdAt: string
  updatedAt: string
  barcode: string
}

export interface Review {
  comment: string
  rating: number
  date: string
  reviewerEmail: string
  reviewerName: string
}

export interface CartItem extends Product {
  qty: number
}

export interface CreateOrderResponse {
  message: string
  order: string
}

export interface CreateOrderRequest {
  uid: string
  total: number
  cart: CartItem[]
}

export interface CreateUserRequest {
  uid: string
  email: string
}

export interface GetUserResponse {
  role: string
}