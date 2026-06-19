import { log } from "console";
import { NextRequest,NextResponse } from "next/server";

interface Props{
    params:Promise<{id:number}>
}
export async function GET(request :NextRequest,{params}:Props){
const {id}=await params

if(id>10)
    return NextResponse.json({error:'User not found'},{status:404})
return NextResponse.json({id :1 ,name:'uzair'})
if(id==2)
    return NextResponse.json({id:2,name:'Uzi'})
}

//PUT object Validate the request body if valid return 400 fetch the user with the given id 
export async function PUT(request:NextRequest,{params}:Props) {
    try {
        const {id}=await params
        const body = await request.json()
        if(!body.name)
           { return NextResponse.json({error:'Name is required'})}
        if (id>10)
        { return NextResponse.json({error:'User not found'})}
        
        console.log('Entering Put req')
        return NextResponse.json({id:id,name:body.name})
        console.log('Exiting Put req')
    } catch(error) {
        return NextResponse.json({error:'Invalid json '},{
            status:400
        })
    }
}
