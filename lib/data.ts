import type {
  Service,
  Package,
  Feature,
  Value,
  ContactInfo,
  NavItem,
} from "./types";

export const navItems: NavItem[] = [
  { id: "hero", label: "الرئيسية" },
  { id: "services", label: "خدماتنا" },
  { id: "why-us", label: "لماذا نحن" },
  { id: "packages", label: "الباقات" },
  { id: "about", label: "من نحن" },
  { id: "contact", label: "تواصل معنا" },
];

export const services: Service[] = [
  {
    id: "visas",
    icon: "Stamp",
    title: "إصدار التأشيرات",
    description:
      "نقدم خدمات إصدار التأشيرات لجميع الدول بما في ذلك الشنغن، بريطانيا، أمريكا وغيرها من الوجهات العالمية.",
  },
  {
    id: "flights",
    icon: "Plane",
    title: "حجز تذاكر الطيران",
    description:
      "نوفر لك أفضل العروض على تذاكر الطيران مع جميع شركات الطيران العالمية بأسعار تنافسية.",
  },
  {
    id: "hotels",
    icon: "Hotel",
    title: "حجز الفنادق حول العالم",
    description:
      "نختار لك أفضل الفنادق حول العالم التي تناسب ميزانيتك وتلبي تطلعاتك بأعلى معايير الجودة.",
  },
  {
    id: "tours",
    icon: "Map",
    title: "تنظيم البرامج السياحية",
    description:
      "نصمم لك برامج سياحية متكاملة تشمل الإقامة والتنقل والزيارات لأجمل المعالم السياحية.",
  },
  {
    id: "consulting",
    icon: "MessageCircle",
    title: "الاستشارات الخاصة بالسفر",
    description:
      "فريق متخصص يقدم لك استشارات شاملة حول متطلبات السفر والتأشيرات والوجهات المناسبة.",
  },
  {
    id: "tracking",
    icon: "ClipboardCheck",
    title: "متابعة الطلبات حتى إتمامها",
    description:
      "نتابع جميع طلباتك خطوة بخطوة حتى إتمامها بنجاح مع تحديثات مستمرة لضمان راحة بالك.",
  },
  {
    id: "transport",
    icon: "Car",
    title: "توفير مواصلات لجميع أنحاء العالم",
    description:
      "نوفر لك خدمات النقل والمواصلات في جميع وجهاتك حول العالم لتجربة سفر مريحة ومتكاملة.",
  },
];

export const features: Feature[] = [
  {
    id: "accuracy",
    icon: "ShieldCheck",
    title: "دقة في تجهيز ملفات التأشيرات",
  },
  {
    id: "experience",
    icon: "Award",
    title: "خبرة في متطلبات السفارات",
  },
  {
    id: "support",
    icon: "Headphones",
    title: "خدمة عملاء مستمرة",
  },
  {
    id: "custom",
    icon: "Settings",
    title: "حلول مخصصة",
  },
  {
    id: "speed",
    icon: "Zap",
    title: "سرعة في الإنجاز",
  },
];

export const values: Value[] = [
  { id: "trust", title: "المصداقية", icon: "Heart" },
  { id: "professionalism", title: "الاحترافية", icon: "Gem" },
  { id: "commitment", title: "الالتزام", icon: "Handshake" },
  { id: "satisfaction", title: "رضا العميل", icon: "Star" },
];

export const packages: Package[] = [
  {
    id: "schengen",
    country: "تأشيرة الشنغن",
    price: "يبدأ من ١,٥٠٠ ﷼",
    description:
      "تأشيرة شنغن تتيح لك زيارة ٢٧ دولة أوروبية بتأشيرة واحدة. نتكفل بجميع الإجراءات من تجهيز الملف حتى استلام التأشيرة.",
    category: "visa",
  },
  {
    id: "uk",
    country: "تأشيرة بريطانيا",
    price: "يبدأ من ٢,٠٠٠ ﷼",
    description:
      "خدمة متكاملة للحصول على تأشيرة المملكة المتحدة بما في ذلك تجهيز الملفات وحجز المواعيد.",
    category: "visa",
  },
  {
    id: "usa",
    country: "تأشيرة أمريكا",
    price: "يبدأ من ٢,٥٠٠ ﷼",
    description:
      "نساعدك في الحصول على التأشيرة الأمريكية مع إعداد شامل للمقابلة والملفات المطلوبة.",
    category: "visa",
  },
  {
    id: "global-tourism",
    country: "وجهات سياحية عالمية",
    price: "يبدأ من ٣,٠٠٠ ﷼",
    description:
      "برامج سياحية متكاملة لأجمل الوجهات حول العالم تشمل الإقامة والتنقل والجولات السياحية.",
    category: "tourism",
  },
];

export const contactInfo: ContactInfo = {
  phone: "0500807580",
  email: "Oceansaudi1@gmail.com",
};

export const aboutContent = {
  description:
    "نحن وكالة المحيط للسفر والسياحة، جهة متخصصة في تقديم خدمات السفر والسياحة باحترافية عالية. نسعى دائماً لتقديم أفضل الحلول والخدمات التي تلبي احتياجات عملائنا وتتجاوز توقعاتهم. فريقنا المتمرس يعمل بشغف لضمان تجربة سفر لا تُنسى لكل عميل.",
  vision:
    "أن نكون من الجهات الرائدة في مجال السفر والسياحة على مستوى المملكة العربية السعودية والمنطقة، وأن نكون الخيار الأول لكل مسافر يبحث عن تجربة سفر متميزة وموثوقة.",
  mission:
    "توفير حلول سفر متكاملة بجودة عالية وأسعار تنافسية، مع التركيز على رضا العميل والدقة في التنفيذ. نلتزم بتقديم خدمات احترافية تشمل جميع جوانب السفر من التأشيرات وحتى العودة.",
};
