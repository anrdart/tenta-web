import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || email.length > 200) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } });
    if (existing) {
      if (existing.isActive) {
        return NextResponse.json({ message: 'Already subscribed.' }, { status: 200 });
      }
      await prisma.newsletterSubscriber.update({ where: { email }, data: { isActive: true } });
      return NextResponse.json({ message: 'Reactivated.' }, { status: 200 });
    }

    await prisma.newsletterSubscriber.create({ data: { email } });
    return NextResponse.json({ message: 'Subscribed successfully.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
