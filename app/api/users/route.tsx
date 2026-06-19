import { NextRequest, NextResponse } from "next/server";
import { nanoid, safeParse } from "zod";
import schema from "./schema";
interface User {
  id: Number;
  name: String;
}
// user array
export const userArr: User[] = [
  {
    id: 1,
    name: "Uzair",
  },
  {
    id: 2,
    name: "Hello",
  },
  {
    id: 3,
    name: "Babar",
  },
];

export function GET() {
  // if we remove req parameter next js will cache the result of this response
  return NextResponse.json(userArr);
}

export async function POST(request: NextRequest) {
  // requesting post data

  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 401 });

  const newID = userArr.length + 1;

  const newUser = {
    id: newID,
    name: body.name,
  };
  userArr.push(newUser);

  return NextResponse.json(userArr,{status:201});
}
