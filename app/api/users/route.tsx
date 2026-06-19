import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){
// if we remove req parameter next js will cache the result of this response 
    return NextResponse.json([
      {
          id : 1,
          name:'Uzair'         
      },
      {
        id:2,
        name:'Hello'
      },
      {
        id:3,
        name:'Babar' 
      }
    ])

}
