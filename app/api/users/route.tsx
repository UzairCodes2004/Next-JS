//HARD CODED POST GET 

// import { NextRequest, NextResponse } from "next/server";
// import { nanoid, safeParse } from "zod";
// import schema from "./schema";

// interface User {
//   id: Number;
//   name: String;
// }
// // user array
// export const userArr: User[] = [
//   {
//     id: 1,
//     name: "Uzair",
//   },
//   {
//     id: 2,
//     name: "Hello",
//   },
//   {
//     id: 3,
//     name: "Babar",
//   },
// ];

// export async function  
// GET() {
//  return NextResponse.json(userArr)
// }

// export async function POST(request: NextRequest) {
//   // requesting post data

//   const body = await request.json();
//   const validation = schema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.issues, { status: 401 });

//   const newID = userArr.length + 1;

//   const newUser = {
//     id: newID,
//     name: body.name,
//   };
//   userArr.push(newUser);

//   return NextResponse.json(userArr,{status:201});
// }


// POST GET WITH MOONGOSE DATABASE

import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../lib/mongoose";
import User from "../../../models/User"
import schema from "./schema"

//GET all users 

export async function GET(){
  await dbConnect()
  const users = await User.find({})

  return NextResponse.json(users)

}


//POST Method 
export async function POST(request:NextRequest){
  await dbConnect();
  const body = await request.json();

  const validation =schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues,{status:400})

  const user= await User.create({
    email : validation.data.email,
    name : validation.data.name
  })
  return NextResponse.json(user,{status:201})
}