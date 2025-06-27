'use client';

import { StarIcon } from 'lucide-react';

const FeaturedIn: React.FC = () => {
  const achievements = [
    {
      metric: 'NPS Score',
      value: '10',
      unit: '/10',
      description: 'Customer satisfaction',
      icon: '⭐',
      gradient: 'from-ultimateqa-blue to-ultimateqa-purple'
    },
    {
      metric: 'Global Reach',
      value: '184',
      unit: '',
      description: 'Countries served',
      icon: '🌍',
      gradient: 'from-ultimateqa-purple to-secondary-400'
    },
    {
      metric: 'Success Rate',
      value: '99',
      unit: '%',
      description: 'Project completion',
      icon: '✅',
      gradient: 'from-success-500 to-success-600'
    },
    {
      metric: 'Team Growth',
      value: '500',
      unit: '%',
      description: 'Since 2015',
      icon: '📈',
      gradient: 'from-ultimateqa-purple to-primary-400'
    }
  ];

  const recognition = [
    {
      name: 'Tech Beacon',
      description: 'Top 33 Automation Engineers',
      period: 'Since 2015',
      type: 'Recognition'
    },
    {
      name: 'Gartner Research',
      description: '$8M Daily Downtime Prevention',
      period: '2024',
      type: 'Citation'
    },
    {
      name: 'DevOps Community',
      description: 'Leading Test Expert',
      period: 'Ongoing',
      type: 'Community'
    }
  ];

  const partners = [
    { name: 'VollQ.ai', type: 'AI Testing', icon: '🤖' },
    { name: 'Forcode', type: 'Development', icon: '⚡' },
    { name: 'Tonder.io', type: 'Payments', icon: '💳' },
    { name: 'Taho', type: 'Dev Tools', icon: '🛠️' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-primary-50 rounded-full text-ultimateqa-blue text-sm font-medium mb-4 font-body">
            <StarIcon className="w-3 h-3 mr-2" />
            Trusted Excellence
          </div>
          <h2 className="font-heading text-section text-ultimateqa-charcoal mb-4">
            Recognized by Industry Leaders
          </h2>
          <p className="font-body text-lg text-medium-gray max-w-2xl mx-auto">
            Our expertise drives measurable results for businesses worldwide
          </p>
        </div>

        {/* Main Metrics Grid - Clean UltimateQA Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-light-gray hover:border-ultimateqa-blue/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl">{achievement.icon}</div>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${achievement.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-end space-x-1">
                  <span className="text-2xl md:text-3xl font-bold text-ultimateqa-charcoal font-heading">
                    {achievement.value}
                  </span>
                  {achievement.unit && (
                    <span className="text-lg text-medium-gray pb-1 font-body">{achievement.unit}</span>
                  )}
                </div>
                <div className="text-xs font-semibold text-ultimateqa-blue uppercase tracking-wider font-body">
                  {achievement.metric}
                </div>
                <div className="text-xs text-medium-gray font-body">{achievement.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition & Partners - UltimateQA Brand Colors */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Recognition */}
          <div>
            <h3 className="text-lg font-semibold text-ultimateqa-charcoal mb-4 font-heading">Recognition</h3>
            <div className="space-y-3">
              {recognition.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors border border-light-gray">
                  <div>
                    <div className="font-medium text-ultimateqa-charcoal text-sm font-body">{item.name}</div>
                    <div className="text-xs text-medium-gray font-body">{item.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-ultimateqa-blue font-body">{item.period}</div>
                    <div className="text-xs text-ultimateqa-purple font-body">{item.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold text-ultimateqa-charcoal mb-4 font-heading">Partners</h3>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((partner, index) => (
                <div key={index} className="p-4 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors group border border-light-gray">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg group-hover:scale-110 transition-transform">
                      {partner.icon}
                    </div>
                    <div>
                      <div className="font-medium text-ultimateqa-charcoal text-sm font-body">{partner.name}</div>
                      <div className="text-xs text-medium-gray font-body">{partner.type}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote - UltimateQA Brand Style */}
        <div className="mt-12 p-8 bg-gradient-primary rounded-xl text-white">
          <div className="text-center">
            <blockquote className="text-xl font-medium text-white mb-3 font-body">
              "This is top quality work"
            </blockquote>
            <cite className="text-sm text-white/80 font-body">
              — Djamel, Technical Lead, Healthcare Organization
            </cite>
            <div className="flex items-center justify-center mt-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <StarIcon className="w-4 h-4 text-white mr-2" />
                <span className="text-sm font-semibold text-white font-body">NPS Score: 10/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn; 