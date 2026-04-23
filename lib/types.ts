export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  country: string;
  price: string;
  description: string;
  category: "visa" | "tourism";
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
}

export interface Value {
  id: string;
  title: string;
  icon: string;
}

export interface ContactFormData {
  email: string;
  phone: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface FormErrors {
  email?: string;
  phone?: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";
