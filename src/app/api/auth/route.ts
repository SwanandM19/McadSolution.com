import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        const validUsername = process.env.ADMIN_USERNAME;
        const validPassword = process.env.ADMIN_PASSWORD;

        if (username === validUsername && password === validPassword) {
            // Return a base64-encoded token (username:password)
            const token = btoa(`${username}:${password}`);
            return NextResponse.json({ success: true, token }, { status: 200 });
        }

        return NextResponse.json(
            { error: 'Invalid username or password' },
            { status: 401 }
        );
    } catch (error) {
        console.error('Auth error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
