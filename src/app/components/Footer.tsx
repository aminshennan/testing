"use client";

import Link from "next/link";
import { DIcons } from "dicons";
import Image from "next/image";
import { useTranslation } from '../../lib/hooks/useTranslation';

const socialLinks = [
  { icon: DIcons.Mail, href: "mailto:contact@mowazfk.com", label: "Email" },
  { icon: DIcons.X, href: "https://x.com/mowazfk", label: "X" },
  { icon: DIcons.Instagram, href: "https://www.instagram.com/mowazfk/", label: "Instagram" },
  { icon: DIcons.WhatsApp, href: "https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh", label: "WhatsApp" },
  { icon: DIcons.Facebook, href: "https://www.facebook.com/mowazfk", label: "Facebook" },
  { icon: DIcons.LinkedIn, href: "https://www.linkedin.com/company/mowazfk", label: "LinkedIn" },
];

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform`;

export function Footer() {
  const { t, isRTL } = useTranslation();
  
  const footerLinks = [
    {
      id: "company",
      name: t('footer.company'),
      items: [
        { name: t('footer.about'), href: "/about" },
        { name: t('footer.contact'), href: "/contact" },
        { name: t('footer.careers'), href: "/careers" },
      ],
    },
    {
      id: "legal",
      name: t('footer.legal'),
      items: [
        { name: t('footer.terms'), href: "/terms" },
        { name: t('footer.privacy'), href: "/privacy" },
        { name: t('footer.cookies'), href: "/cookies" },
      ],
    },
    {
      id: "resources",
      name: t('footer.resources'),
      items: [
        { name: t('footer.blog'), href: "/blog" },
        { name: t('footer.help'), href: "/help" },
        { name: t('footer.docs'), href: "/docs" },
      ],
    },
  ];

  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-b border-t px-2 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Mowazfk Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">Mowazfk</span>
          </div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${isRTL ? 'rtl-text-right' : ''}`}>
          {footerLinks.map((section) => (
            <div key={section.id}>
              <h3 className="font-medium text-white mb-3">{section.name}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-b border-dotted border-gray-800 mb-6"></div>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              aria-label={link.label}
              href={link.href}
              rel="noreferrer"
              target="_blank"
              className={Underline}
            >
              <link.icon strokeWidth={1.5} className="h-5 w-5" />
            </Link>
          ))}
        </div>

        <div className={`text-center text-xs text-slate-400 ${isRTL ? 'rtl-text-right' : ''}`}>
          <div className="flex flex-row items-center justify-center gap-1">
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span>{t('footer.copyright')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 