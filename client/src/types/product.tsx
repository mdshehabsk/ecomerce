

export interface IMoreInformation {
    key: string
    value: string
  }
  
  
  
  
 export  interface IProduct  {
    _id?: string
    name : string
    slug: string
    base_price: number
    discount: number
    stock: number
    more_info: IMoreInformation[]
    description: string
    imageArr: string[]
  }