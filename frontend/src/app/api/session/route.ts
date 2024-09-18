import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const { token, user } = await request.json();

  if (token) {
    const path = process.cwd() + "/session/" + token;
    fs.writeFileSync(path, JSON.stringify(user));
  }

  return NextResponse.json({
    status: 200,
  });
}

export async function GET(request: NextRequest) {
  const token = request.headers.get("token");
    if (token) {
      const path = process.cwd() + "/session/" + token;
      if (fs.existsSync(path)) {
        const user = fs.readFileSync(path, "utf8");
        return NextResponse.json({
          status: 200,
          data: JSON.parse(user),
        });
      }
    }
  return NextResponse.json({
    status: 404,
  });
}
