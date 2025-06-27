'use client';

import { ChevronRightIcon, CodeIcon, RocketIcon, ZapIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import HubSpotForm from './HubSpotForm';

const Hero: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: 200, suffix: '+', label: 'Businesses Helped', color: 'ultimateqa-blue' },
    { value: 150000, suffix: '+', label: 'Engineers Trained', color: 'ultimateqa-purple' },
    { value: 8, suffix: 'M', label: 'Daily Downtime Cost Prevention', color: 'ultimateqa-blue' },
  ];

  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, current: 0 })));

  useEffect(() => {
    if (!mounted) return;

    const timeouts = stats.map((stat, index) => {
      return setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(interval);
          }
          setAnimatedStats(prev => prev.map((s, i) => 
            i === index ? { ...s, current: Math.floor(current) } : s
          ));
        }, duration / steps);
      }, index * 200);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [mounted]);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-ultimateqa-charcoal via-gray-900 to-ultimateqa-charcoal flex items-center overflow-hidden">
        {/* Background Elements - UltimateQA Brand Style */}
        <div className="absolute inset-0">
          {/* Subtle Brand Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-ultimateqa-blue/20 to-ultimateqa-purple/20 rounded-full blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-ultimateqa-purple/20 to-ultimateqa-blue/20 rounded-full blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
          
          {/* Floating Icons - Light Colors */}
          <div className="absolute top-20 left-10 text-white/30 animate-float">
            <CodeIcon className="w-8 h-8" />
          </div>
          <div className="absolute top-40 right-20 text-white/25 animate-float animation-delay-1000">
            <ZapIcon className="w-6 h-6" />
          </div>
          <div className="absolute bottom-32 right-10 text-white/20 animate-float animation-delay-2000">
            <RocketIcon className="w-7 h-7" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Trust Badge - UltimateQA Brand */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-8 font-body">
              <span className="text-ultimateqa-purple mr-2">⭐</span>
              Since 2015 - Helping Companies Create Better Software
            </div>

            {/* Main Headline - UltimateQA Typography */}
            <h1 className="font-heading text-hero text-white mb-6 leading-tight">
              Push Higher Quality
              <br />
              <span className="bg-gradient-to-r from-ultimateqa-blue to-ultimateqa-purple bg-clip-text text-transparent">
                Software To Market
              </span>
              <br />
              Faster
            </h1>

            {/* Subtitle - UltimateQA Body Font */}
            <p className="font-body text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We transform your ideas into powerful software solutions with AI development, 
              automated testing, and modern web development that drives real business results.
            </p>

            {/* CTA Buttons - UltimateQA Brand Colors */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => setShowForm(true)}
                className="group inline-flex items-center px-8 py-4 bg-ultimateqa-blue text-white rounded-xl font-semibold hover:bg-ultimateqa-purple transition-all duration-200 shadow-lg hover:shadow-xl font-body"
              >
                Get Free Discovery Session
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-ultimateqa-charcoal transition-all duration-200 font-body">
                <span className="mr-2">🎯</span>
                Start 7-Day Free Trial
              </button>
            </div>

            {/* Stats Grid - Clean UltimateQA Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {animatedStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-ultimateqa-blue/50 transition-all duration-300 group"
                >
                  <div className={`text-3xl font-bold text-white mb-2 font-heading`}>
                    {stat.current.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-300 font-body">
                    {stat.label}
                  </div>
                  
                  {/* Trust Indicators */}
                  {index === 0 && (
                    <div className="mt-3 flex items-center justify-center">
                      <div className="flex items-center bg-ultimateqa-blue/20 rounded-full px-3 py-1">
                        <span className="text-xs text-white font-medium font-body">Globally</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="mt-3 flex items-center justify-center">
                      <div className="flex items-center bg-ultimateqa-purple/20 rounded-full px-3 py-1">
                        <span className="text-xs text-white font-medium font-body">184 Countries</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="mt-3 flex items-center justify-center">
                      <div className="flex items-center bg-green-500/20 rounded-full px-3 py-1">
                        <span className="text-xs text-white font-medium font-body">Gartner Data</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Professional Recognition */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300 font-body">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-ultimateqa-blue to-ultimateqa-purple rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs font-bold">TB</span>
                </div>
                <span className="text-white">Top 33 Test Engineers</span>
              </div>
              
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-ultimateqa-purple/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">⭐</span>
                </div>
                <span className="text-white">NPS Score: 10/10</span>
              </div>
              
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-white">99% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HubSpot Form Modal */}
      {showForm && (
        <HubSpotForm 
          isOpen={showForm}
          onClose={() => setShowForm(false)} 
        />
      )}
    </>
  );
};

export default Hero; 