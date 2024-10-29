import { connect } from "@/dbConfig/dbConfig";

import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/app/helpers/mailer";

connect(); 

export async function POST(request){
    try {

        const reqBody = await request.json();
        console.log("begin")
        const {name, email, subject, message} = reqBody;
        console.log("hoo")
        console.log(name)

        // send email
        await sendEmail({name, email, subject, message})

        const response = 'Email sent'

        // response
        return NextResponse.json({
            message: 'Email sent',
            success: true,
            response
        });

    } catch (error) {
        return NextResponse.json({error: error.message},{statu: 500});
    };
};