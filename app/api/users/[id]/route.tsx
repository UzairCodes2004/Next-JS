import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { userArr } from "../route";

interface Props {
    params: Promise<{ id: string }>;
}
export async function GET(request: NextRequest) {
    return NextResponse.json(userArr);
}

//PUT object Validate the request body if valid return 400 fetch the user with the given id
export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const userID = Number(id);
        const body = await request.json();

        const validation = schema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(validation.error.issues);
        }

        // Find index
        const userIndex = userArr.findIndex(user => user.id === userID)

        userArr[userIndex] = { id: userID, name: body.name }
        return NextResponse.json(userArr);
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid json " },
            {
                status: 400,
            },
        );
    }
}
