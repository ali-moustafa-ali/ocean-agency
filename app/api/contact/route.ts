import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, phone } = body;

    const errors: Record<string, string> = {};

    // Validate email
    if (!email || !email.trim()) {
      errors.email = "البريد الإلكتروني مطلوب";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = "يرجى إدخال بريد إلكتروني صحيح";
      }
    }

    // Validate phone
    if (!phone || !phone.trim()) {
      errors.phone = "رقم الهاتف مطلوب";
    } else {
      const phoneRegex = /^[\d\s+\-()]{8,}$/;
      if (!phoneRegex.test(phone)) {
        errors.phone = "يرجى إدخال رقم هاتف صحيح";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Mock: In production, send email via SendGrid/Resend/etc.
    console.log("Contact form submission:", { email, phone });

    return NextResponse.json({
      success: true,
      message: "تم إرسال رسالتك بنجاح",
    });
  } catch {
    return NextResponse.json(
      { success: false, errors: { general: "حدث خطأ في الخادم" } },
      { status: 500 }
    );
  }
}
