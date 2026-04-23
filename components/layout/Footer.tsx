import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                O
              </div>
              <div>
                <h3 className="font-bold text-lg">Ocean Agency</h3>
                <p className="text-text-light/60 text-sm">
                  وكالة المحيط للسفر والسياحة
                </p>
              </div>
            </div>
            <p className="text-text-light/70 text-sm leading-relaxed">
              نقدم لك تجربة سفر متكاملة ومريحة حول العالم مع فريق متخصص يسعى
              لتحقيق أعلى مستويات الرضا.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-accent">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-text-light/70 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base mb-4 text-accent">
              معلومات التواصل
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-text-light/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Phone size={16} className="text-primary-light shrink-0" />
                  <span dir="ltr">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-text-light/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Mail size={16} className="text-primary-light shrink-0" />
                  <span dir="ltr">{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-light/70 text-sm">
                <MapPin size={16} className="text-primary-light shrink-0" />
                المملكة العربية السعودية
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-text-light/50 text-sm">
            © {new Date().getFullYear()} Ocean Agency - وكالة المحيط للسفر
            والسياحة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
