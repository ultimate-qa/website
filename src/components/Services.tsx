'use client';

import {
    ArrowRightIcon,
    BrainCircuitIcon,
    CloudIcon,
    CodeIcon,
    MapIcon,
    RocketIcon,
    ServerIcon,
    TestTubeIcon
} from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  benefit: string;
  cta: string;
  onClick: () => void;
  badge?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  benefit, 
  cta, 
  onClick,
  badge
}) => {
  return (
    <div className="service-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 h-full flex flex-col hover:shadow-xl transition-all duration-300 group">
      {badge && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success-100 text-success-700">
            {badge}
          </span>
        </div>
      )}
      
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
          <Icon className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      <div className="bg-success-50 p-4 rounded-lg mb-6">
        <p className="text-success-700 font-semibold text-sm">{benefit}</p>
      </div>
      
      <button
        onClick={onClick}
        className="btn-secondary w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center group hover:bg-secondary-600 transition-colors"
        aria-label={`Learn more about ${title}`}
      >
        {cta}
        <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

interface ServicesProps {
  onServiceClick?: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: 'ai-development',
      icon: BrainCircuitIcon,
      title: 'AI Development',
      description: 'Custom AI solutions, machine learning models, and intelligent automation to transform your business processes.',
      benefit: 'Achieve 5x productivity gains with AI',
      cta: 'Build AI Solutions'
    },
    {
      id: 'web-development',
      icon: CodeIcon,
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies for optimal performance and user experience.',
      benefit: '99.9% uptime and lightning-fast performance',
      cta: 'Start Web Project'
    },
    {
      id: 'automated-testing',
      icon: TestTubeIcon,
      title: 'Automated Testing',
      description: 'Comprehensive test automation frameworks to ensure quality, reduce bugs, and accelerate your delivery pipeline.',
      benefit: '7-day free trial available',
      cta: 'Try Free Testing',
      badge: '7-Day Free Trial'
    },
    {
      id: 'cloud-solutions',
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Cloud-native architecture, migration services, and DevOps automation for scalable, secure applications.',
      benefit: '60% reduction in infrastructure costs',
      cta: 'Migrate to Cloud'
    },
    {
      id: 'api-development',
      icon: ServerIcon,
      title: 'API Development',
      description: 'Robust RESTful APIs, GraphQL endpoints, and microservices architecture for seamless integrations.',
      benefit: 'Seamless system integration & performance',
      cta: 'Build APIs'
    },
    {
      id: 'software-consulting',
      icon: MapIcon,
      title: 'Software Consulting',
      description: 'Strategic technology roadmaps, architecture reviews, and expert guidance for your development initiatives.',
      benefit: 'Clear path to technical success',
      cta: 'Get Consultation'
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    // Track service card click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_card_click', {
        event_category: 'engagement',
        event_label: serviceName,
      });
    }

    if (onServiceClick) {
      onServiceClick(serviceName);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 text-sm font-medium mb-6">
            <RocketIcon className="w-4 h-4 mr-2" />
            Software Development Services
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Build Software That Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered applications to automated testing solutions – we deliver 
            software that drives results and accelerates your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-300 ${
                hoveredCard === service.id ? 'scale-105' : ''
              }`}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefit={service.benefit}
                cta={service.cta}
                onClick={() => handleServiceClick(service.title)}
                badge={service.badge}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project and create a custom solution that drives real results.
            </p>
            <button
              onClick={() => handleServiceClick('General Consultation')}
              className="btn-primary inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all duration-200"
              aria-label="Get personalized consultation"
            >
              Start Your Project Today
              <ArrowRightIcon className="w-6 h-6 ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 