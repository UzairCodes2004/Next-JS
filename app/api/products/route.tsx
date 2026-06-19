import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod'

interface Props{
    params:Promise <{id:number}>
}
 export interface Products{
    id:number;
    name : string;
    price:number
}

export const productsArr: Products[] = [
    {id:1,name:"Mobile Phone",price:2.5},
    {id:2,name:"Milk",price:1.5},
    {id:3,name:"Coco Powder",price:7.5}];

export async function GET(request:NextRequest,{params}:Props){


return NextResponse.json(productsArr)

}