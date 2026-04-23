export function validateEmail(email: string): string | undefined {
  if (!email.trim()) {
    return "البريد الإلكتروني مطلوب";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "يرجى إدخال بريد إلكتروني صحيح";
  }
  return undefined;
}

export function validatePhone(phone: string): string | undefined {
  if (!phone.trim()) {
    return "رقم الهاتف مطلوب";
  }
  const phoneRegex = /^[\d\s+\-()]{8,}$/;
  if (!phoneRegex.test(phone)) {
    return "يرجى إدخال رقم هاتف صحيح";
  }
  return undefined;
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
