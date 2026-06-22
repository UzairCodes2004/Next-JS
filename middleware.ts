import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){

   return NextResponse.redirect(new URL('/blog',request.url))
}


export const config={

    // * if we add star it means 0 or more parameters direct it to the new-page
    // :path* means every thing 
    // *: zero or more
    //+: one or more
    // ? zero or oe
    matcher:['/users']
}