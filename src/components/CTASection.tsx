'use client';

import { ArrowRightIcon, RocketIcon } from 'lucide-react';

interface CTASectionProps {
  onCTAClick?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onCTAClick }) => {
  const handleCTAClick = () => {
    // Track the final CTA click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'final_cta_section',
      });
    }
    
    if (onCTAClick) {
      onCTAClick();
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
                 <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
         }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main CTA Content */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Push Higher Quality Software
            <span className="text-secondary-400 block">
              To Market Faster
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
            Entrust your business to us, and we'll do our best to exceed your expectations!
            Transform your testing approach with world-class automation solutions.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button
            onClick={handleCTAClick}
            className="btn-secondary group inline-flex items-center px-10 py-5 text-xl font-bold text-white rounded-xl shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-secondary-300 transition-all duration-300 transform hover:scale-105"
            aria-label="Get started with UltimateQA today"
          >
            <RocketIcon className="w-7 h-7 mr-4 group-hover:translate-x-1 transition-transform" />
            Get Started Today
            <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="text-center sm:text-left">
            <div className="text-white/90 text-sm">
              ✓ Free consultation
            </div>
            <div className="text-white/90 text-sm">
              ✓ 24-hour response time
            </div>
            <div className="text-white/90 text-sm">
              ✓ Tailored solutions
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">24hrs</div>
            <div className="text-blue-200">Response Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-blue-200">Success Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-blue-200 text-sm mb-4">
            Ready to discuss your project? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <a 
              href="mailto:info@ultimateqa.com" 
              className="hover:text-secondary-400 transition-colors"
            >
              info@ultimateqa.com
            </a>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
            <a 
              href="tel:+1-555-ULTIMATE" 
              className="hover:text-secondary-400 transition-colors"
            >
              +1 (555) ULTIMATE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 