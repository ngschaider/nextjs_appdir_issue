import { NextResponse } from "next/server";
import { randomNumber } from "../../../server/randomNumber";

export const dynamic = "force-dynamic";

export const GET = () => {
    return NextResponse.json({
        value: randomNumber,
    })
}