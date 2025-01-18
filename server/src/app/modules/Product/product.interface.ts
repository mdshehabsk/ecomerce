import { Types } from "mongoose";


export interface IMoreInformation {
    key: string
    value: string
}
export interface IMetaInformation {
    key: string,
    value: string[]
}

/* eslint-disable no-unused-vars */
export enum EProductStatus {
    PUBLISH = 'publish',
    DRAFT = 'draft'
}

export interface IProduct  {
    _id: Types.ObjectId
    name : string
    slug: string
    base_price: number
    discount: number
    stock: number
    more_info: IMoreInformation[],
    meta_info: IMetaInformation
    description: string
    imageArr: string[]
    categories: string[]
    status: EProductStatus.PUBLISH | EProductStatus.DRAFT
}