import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// Helper to verify admin auth token
function verifyAuth(request: NextRequest): boolean {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) return false;

    const token = authHeader.split(' ')[1];
    try {
        const decoded = atob(token);
        const [username, password] = decoded.split(':');
        return (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        );
    } catch {
        return false;
    }
}

// GET /api/leads — Fetch all leads (protected)
export async function GET(request: NextRequest) {
    if (!verifyAuth(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const client = await clientPromise;
        const db = client.db('mcadsolution');
        const collection = db.collection('leads');

        const leads = await collection
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json({ leads }, { status: 200 });
    } catch (error) {
        console.error('Error fetching leads:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// POST /api/leads — Create a new lead (public)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        const { name, email, phone } = body;
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email, and phone are required fields.' },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('mcadsolution');
        const collection = db.collection('leads');

        // Insert the lead document
        const result = await collection.insertOne({
            name: body.name,
            email: body.email,
            phone: body.phone,
            organization: body.organization || '',
            interest: body.interest || 'Training',
            message: body.message || '',
            createdAt: new Date(),
        });

        return NextResponse.json(
            { success: true, id: result.insertedId },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error saving lead:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
