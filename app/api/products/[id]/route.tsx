import { NextRequest, NextResponse } from "next/server";
import { productsArr } from "../route";
interface Props{
params:Promise<{id:string}>
}
export async function GET(request: NextRequest,{params}:Props)
{
    const {id}=await params
    const productID=Number(id)
    const product  =productsArr.find(p=>p.id===productID)

    if(!product)
return NextResponse.json({error:'Product Not founded'},{status:404})

    return NextResponse.json(product)
}
