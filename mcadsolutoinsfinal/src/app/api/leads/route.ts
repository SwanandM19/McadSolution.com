// import { NextRequest, NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongodb';

// // Helper to verify admin auth token
// function verifyAuth(request: NextRequest): boolean {
//     const authHeader = request.headers.get('authorization');
//     if (!authHeader || !authHeader.startsWith('Bearer ')) return false;

//     const token = authHeader.split(' ')[1];
//     try {
//         const decoded = atob(token);
//         const [username, password] = decoded.split(':');
//         return (
//             username === process.env.ADMIN_USERNAME &&
//             password === process.env.ADMIN_PASSWORD
//         );
//     } catch {
//         return false;
//     }
// }

// // GET /api/leads — Fetch all leads (protected)
// export async function GET(request: NextRequest) {
//     if (!verifyAuth(request)) {
//         return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     try {
//         const client = await clientPromise;
//         const db = client.db('mcadsolution');
//         const collection = db.collection('leads');

//         const leads = await collection
//             .find({})
//             .sort({ createdAt: -1 })
//             .toArray();

//         return NextResponse.json({ leads }, { status: 200 });
//     } catch (error) {
//         console.error('Error fetching leads:', error);
//         return NextResponse.json(
//             { error: 'Internal server error' },
//             { status: 500 }
//         );
//     }
// }

// // POST /api/leads — Create a new lead (public)
// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json();

//         // Validate required fields
//         const { name, email, phone } = body;
//         if (!name || !email || !phone) {
//             return NextResponse.json(
//                 { error: 'Name, email, and phone are required fields.' },
//                 { status: 400 }
//             );
//         }

//         // Connect to MongoDB
//         const client = await clientPromise;
//         const db = client.db('mcadsolution');
//         const collection = db.collection('leads');

//         // Insert the lead document
//         const result = await collection.insertOne({
//             name: body.name,
//             email: body.email,
//             phone: body.phone,
//             organization: body.organization || '',
//             interest: body.interest || 'Training',
//             message: body.message || '',
//             createdAt: new Date(),
//         });

//         return NextResponse.json(
//             { success: true, id: result.insertedId },
//             { status: 201 }
//         );
//     } catch (error) {
//         console.error('Error saving lead:', error);
//         return NextResponse.json(
//             { error: 'Internal server error' },
//             { status: 500 }
//         );
//     }
// }



import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, organization, interest, message } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent HTML injection
    const s = (str: string) =>
      str?.replace(/</g, '&lt;').replace(/>/g, '&gt;') ?? 'N/A';

    await transporter.sendMail({
      from: `"M CAD Solutions" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,           // So you can reply directly to the person
      subject: `New Inquiry: ${s(interest)} from ${s(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A1C26; border-bottom: 2px solid #F9A825; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px; font-weight: bold; width: 140px;">Name</td>
              <td style="padding: 10px;">${s(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email</td>
              <td style="padding: 10px;"><a href="mailto:${s(email)}">${s(email)}</a></td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px; font-weight: bold;">Phone</td>
              <td style="padding: 10px;">${s(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Organization</td>
              <td style="padding: 10px;">${s(organization) || 'N/A'}</td>
            </tr>
            <tr style="background: #f5f5f5;">
              <td style="padding: 10px; font-weight: bold;">Interest</td>
              <td style="padding: 10px;">${s(interest)}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Message</td>
              <td style="padding: 10px;">${s(message) || 'No message provided'}</td>
            </tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Submitted via M CAD Solutions contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}