import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Mock authentication check
    // In a real application, you would verify against a database
    if (email === "admin@sandyfeet.com" && password === "sandyfeet2026") {
      
      const response = NextResponse.json(
        { message: "Login successful", role: "admin", name: "Admin User", email: "admin@sandyfeet.com" },
        { status: 200 }
      );

      // Set HttpOnly cookie for session management
      response.cookies.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return response;
    } else if (email === "staff@sandyfeet.com" && password === "sandyfeet2026") {
      const response = NextResponse.json(
        { message: "Login successful", role: "staff", name: "Staff User", email: "staff@sandyfeet.com" },
        { status: 200 }
      );

      response.cookies.set("admin_session", "authenticated_staff", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return response;
    }

    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during login." },
      { status: 500 }
    );
  }
}
