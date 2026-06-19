import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import schema from "./schema";

export interface Products {
    id: number;
    name: string;
    price: number;
}

export const productsArr: Products[] = [
    { id: 1, name: "Mobile Phone", price: 2.5 },
    { id: 2, name: "Milk", price: 1.5 },
    { id: 3, name: "Coco Powder", price: 7.5 },
];

export async function GET(request: NextRequest) {
    console.log("Current products:", productsArr);
    return NextResponse.json(productsArr);
}

// POST product object
export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    // bug begins here
    if (!validation.success) return NextResponse.json(validation.error.issues);

    // corrected bug by auto incrementing id and pushing object created into the products array
    const newID = productsArr.length + 1;

    const newProduct = { id: newID, name: body.name, price: body.price };

    productsArr.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
}
