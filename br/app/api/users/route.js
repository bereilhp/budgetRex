import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    name: "Lionel Messi",
    age: "27",
  };

  return NextResponse.json({ data });
}
