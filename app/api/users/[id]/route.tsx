import { log } from "console";
import { NextRequest,NextResponse } from "next/server";
import schema from "../schema";

interface Props{
    params:Promise<{id:number}>
}
export async function GET(request :NextRequest,{params}:Props){
const {id}=await params

if(id>10)
    return NextResponse.json({error:'User not found'},{status:404})
return NextResponse.json({id :1 ,name:'uzair'},{
    
})

}

//PUT object Validate the request body if valid return 400 fetch the user with the given id 
export async function PUT(request:NextRequest,{params}:Props) {
    try {
        const {id}=await params
        const body = await 
        request.json()
const validation =schema.safeParse(body);

        if(!validation.success)
           { return NextResponse.json(validation.error.issues)}
        if (id>10)
        { return NextResponse.json({error:'User not found'})}
        
        console.log('Entering Put req')
        return NextResponse.json({id:id,name:body.name})
        
    } catch(error) {
        return NextResponse.json({error:'Invalid json '},{
            status:400
        })
    }
}
