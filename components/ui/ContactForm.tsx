"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { validateEmail, validatePhone } from "@/lib/utils";
import type { FormErrors, FormStatus } from "@/lib/types";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);

    if (emailError) newErrors.email = emailError;
    if (phoneError) newErrors.phone = phoneError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setPhone("");
        setErrors({});
      } else {
        const data = await res.json();
        if (data.errors) setErrors(data.errors);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-text mb-2">
          تم إرسال رسالتك بنجاح!
        </h3>
        <p className="text-text-muted mb-6">
          سنتواصل معك في أقرب وقت ممكن
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors cursor-pointer"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50"
      aria-label="نموذج التواصل"
      noValidate
    >
      <h3 className="text-xl font-bold text-text mb-6">أرسل لنا رسالة</h3>

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 mb-6 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <AlertCircle size={20} className="shrink-0" />
          حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.
        </div>
      )}

      {/* Email */}
      <div className="mb-5">
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-text mb-2"
        >
          البريد الإلكتروني
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          onBlur={() => {
            const err = validateEmail(email);
            if (err) setErrors((prev) => ({ ...prev, email: err }));
          }}
          placeholder="example@email.com"
          dir="ltr"
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.email
              ? "border-red-400 focus:ring-red-400"
              : "border-border focus:ring-primary"
          } bg-surface text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-left`}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label
          htmlFor="contact-phone"
          className="block text-sm font-medium text-text mb-2"
        >
          رقم الهاتف
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
          }}
          onBlur={() => {
            const err = validatePhone(phone);
            if (err) setErrors((prev) => ({ ...prev, phone: err }));
          }}
          placeholder="05XXXXXXXX"
          dir="ltr"
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.phone
              ? "border-red-400 focus:ring-red-400"
              : "border-border focus:ring-primary"
          } bg-surface text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-left`}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-l from-primary to-primary-light text-white rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            جاري الإرسال...
          </>
        ) : (
          <>
            <Send size={20} />
            إرسال
          </>
        )}
      </button>
    </form>
  );
}
