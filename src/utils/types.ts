interface Product {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  rating: {
    rate: number
    count: number
  }
  number?: number
  total?: number
}

export type { Product }
