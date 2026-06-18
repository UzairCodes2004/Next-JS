import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
// if we remove req parameter next js will cache the result of this response 
    return NextResponse.json([
      {
          id : 1, name:'Uzair'
          
      },
      {
        id:2,
        name:'Hello'
      }
    ])

}export async function POST(request: NextRequest) {
  // Parse the request body
  const body = await request.json();
  const { name } = body;
 
  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(), name };
 
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}