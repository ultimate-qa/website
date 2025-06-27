'use client';

import { CheckCircleIcon, ClockIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';

const Results: React.FC = () => {
  const metrics = [
    { label: 'Time Saved', value: '8 hrs/day', icon: ClockIcon, color: 'ultimateqa-blue' },
    { label: 'Faster Feedback', value: '82%', icon: TrendingUpIcon, color: 'ultimateqa-purple' },
    { label: 'Speed Increase', value: '66%', icon: TrendingUpIcon, color: 'ultimateqa-blue' },
    { label: 'Engineers Trained', value: '150K+', icon: UsersIcon, color: 'ultimateqa-purple' },
  ];

  const caseStudies = [
    {
      industry: 'Healthcare',
      title: 'Automated Patient Data Validation',
      result: '8-hour daily time savings',
      description: 'Comprehensive test automation for critical healthcare systems ensuring patient data integrity and compliance.',
      metrics: ['99.9% accuracy', '8hrs saved daily', 'HIPAA compliant'],
      gradient: 'from-ultimateqa-blue to-primary-600'
    },
    {
      industry: 'Insurance',
      title: 'Claims Processing Optimization',
      result: '82% faster feedback cycle',
      description: 'End-to-end automation of insurance claims processing with real-time validation and reporting.',
      metrics: ['82% faster cycle', '40% cost reduction', '24/7 monitoring'],
      gradient: 'from-ultimateqa-purple to-secondary-600'
    },
    {
      industry: 'Hospitality',
      title: 'Booking System Enhancement',
      result: '66% faster feedback loop',
      description: 'Modern web development and testing solutions for seamless guest experiences across all platforms.',
      metrics: ['66% speed increase', '99% uptime', 'Global deployment'],
      gradient: 'from-ultimateqa-blue to-ultimateqa-purple'
    },
    {
      industry: 'Education',
      title: 'Global Training Platform',
      result: '150K+ engineers trained globally',
      description: 'Scalable learning management system with automated testing and quality assurance capabilities.',
      metrics: ['150K+ users', '184 countries', '98% satisfaction'],
      gradient: 'from-ultimateqa-purple to-secondary-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 border border-ultimateqa-blue/20 rounded-full text-ultimateqa-blue text-sm font-medium mb-6 font-body">
            <CheckCircleIcon className="w-4 h-4 mr-2" />
            Proven Results
          </div>
          <h2 className="font-heading text-section text-ultimateqa-charcoal mb-6">
            Real Impact Across Industries
          </h2>
          <p className="font-body text-lg text-medium-gray max-w-3xl mx-auto">
            We deliver measurable improvements that drive business success and operational excellence
          </p>
        </div>

        {/* Metrics Overview - Clean UltimateQA Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-light-gray hover:border-ultimateqa-blue/30 transition-all duration-300 text-center group">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-${metric.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <metric.icon className={`w-6 h-6 text-${metric.color}`} />
              </div>
              <div className={`text-2xl font-bold text-${metric.color} mb-1 font-heading`}>
                {metric.value}
              </div>
              <div className="text-sm text-medium-gray font-body">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies - UltimateQA Brand Style */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-light-gray hover:border-ultimateqa-blue/30 transition-all duration-300 group">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-ultimateqa-blue bg-primary-50 px-3 py-1 rounded-full font-body">
                    {study.industry}
                  </span>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${study.gradient}`}></div>
                </div>
                <h3 className="text-xl font-semibold text-ultimateqa-charcoal mb-2 font-heading">
                  {study.title}
                </h3>
                <p className="text-medium-gray mb-4 font-body">
                  {study.description}
                </p>
              </div>

              <div className="mb-6">
                <div className={`text-lg font-bold text-ultimateqa-blue mb-2 font-heading`}>
                  {study.result}
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="text-xs bg-gray-100 text-ultimateqa-charcoal px-2 py-1 rounded-full font-body">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-ultimateqa-blue hover:text-ultimateqa-purple transition-colors">
                <span className="text-sm font-medium font-body">View Case Study</span>
                <CheckCircleIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Strip - UltimateQA Colors */}
        <div className="bg-gradient-primary rounded-xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div>
              <div className="text-2xl font-bold mb-1 font-heading">Top 33</div>
              <div className="text-sm text-white/80 font-body">Test Engineers Worldwide</div>
              <div className="text-xs text-white/60 font-body">Tech Beacon Recognition</div>
            </div>
            
            <div className="border-l border-r border-white/20 py-4 md:py-0">
              <div className="text-2xl font-bold mb-1 font-heading">NPS 10/10</div>
              <div className="text-sm text-white/80 font-body">Customer Satisfaction</div>
              <div className="text-xs text-white/60 font-body">Consistent Excellence</div>
            </div>
            
            <div>
              <div className="text-2xl font-bold mb-1 font-heading">$8M Daily</div>
              <div className="text-sm text-white/80 font-body">Downtime Prevention</div>
              <div className="text-xs text-white/60 font-body">Gartner Research Data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results; 