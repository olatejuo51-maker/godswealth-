'use client';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-foreground">
              God&apos;s Wealth
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Professional writer & content strategist crafting words that build wealth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Ghostwriting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Copywriting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Content Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-4 text-foreground/70">
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.249-.129.597-.129.945v5.423h-3.554s.05-8.799 0-9.719h3.554v1.375c.427-.659 1.191-1.598 2.897-1.598 2.117 0 3.704 1.385 3.704 4.363v5.579zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.957.77-1.71 1.958-1.71 1.188 0 1.915.754 1.94 1.71 0 .951-.752 1.71-1.983 1.71zm1.582 10.019H3.754V9.714h3.165v9.738zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 002.856-10.01A9.954 9.954 0 0023.53 3.3a4.978 4.978 0 00-7.062-2.253v.001c-.618.122-1.212.338-1.773.663a4.968 4.968 0 00-1.594 1.557 4.95 4.95 0 00-.976 2.203c-.23.832-.234 1.703-.034 2.54a10.05 10.05 0 01-8.08-4.111c-.403-.678-.738-1.411-.969-2.17A4.964 4.964 0 001.92 1.953c-.466.324-.891.797-1.238 1.386-.348.59-.597 1.27-.73 1.99-.133.722-.108 1.468.064 2.19.172.723.475 1.408.905 2.027a10.05 10.05 0 006.38 3.38 4.986 4.986 0 00-1.15 1.588 4.94 4.94 0 00-.74 1.902 4.943 4.943 0 00-.002 1.928 4.97 4.97 0 00.98 1.998 4.993 4.993 0 001.678 1.364 4.96 4.96 0 002.075.438 10.03 10.03 0 00-6.19 2.047c-.53.39-.978.88-1.319 1.447a9.96 9.96 0 006.332 2.052 10.08 10.08 0 006.49-2.126 10.04 10.04 0 003.493-5.5 10.01 10.01 0 00.65-3.957v-.526c.66-.502 1.254-1.096 1.77-1.776z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {currentYear} God&apos;s Wealth. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
