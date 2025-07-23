import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

/**
 * Footer component - Styled to match sponsors page
 * Uses gradient backgrounds and modern styling
 */
const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Points Race', href: '/points-race' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Blog', href: '/blog' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ];
  
  const socialLinks = [
    { 
      label: 'Facebook', 
      href: 'https://www.facebook.com/groups/339663940504983/',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      label: 'Instagram', 
      href: '#',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      label: 'YouTube', 
      href: 'https://www.youtube.com/channel/UCaJTcqYRuHmzxkqcLZqGy_Q',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <footer className={`w-full bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 ${className}`}>
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23B45309' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand Column */}
              <div className="col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/media/images/uploads/2023/03/boltgun_logo-1024x1024.png"
                    alt="Bolt Gun Nation Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="text-xl font-bold text-slate-900">Bolt Gun Nation</span>
                </div>
                <p className="text-sm text-slate-600 mb-6">
                  New Mexico's premier precision rifle community dedicated to competition, excellence, and camaraderie.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-wp-accent-1 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="col-span-1">
                <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks.slice(0, 4).map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-slate-600 hover:text-wp-accent-1 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Resources */}
              <div className="col-span-1">
                <h3 className="font-semibold text-slate-900 mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://www.facebook.com/groups/339663940504983/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-wp-accent-1 transition-colors text-sm"
                    >
                      Facebook Group
                    </a>
                  </li>
                  <li>
                    <Link 
                      href="/blog"
                      className="text-slate-600 hover:text-wp-accent-1 transition-colors text-sm"
                    >
                      Blog & Updates
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/sponsors"
                      className="text-slate-600 hover:text-wp-accent-1 transition-colors text-sm"
                    >
                      Our Sponsors
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact"
                      className="text-slate-600 hover:text-wp-accent-1 transition-colors text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600">
              {currentYear} Bolt Gun Nation. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {footerLinks.slice(4).map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-wp-accent-1 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
