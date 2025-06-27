'use client';

import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, StarIcon } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  results?: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ 
  quote, 
  author, 
  role, 
  company, 
  industry, 
  rating, 
  results 
}) => {
  return (
    <div className="testimonial-card bg-white rounded-xl p-8 shadow-lg border border-gray-200 h-full">
      <div className="flex items-start mb-6">
        <QuoteIcon className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0 mt-1" />
        <div className="flex text-secondary-500">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
      </div>
      
      <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="text-sm text-gray-500">
          <div className="font-semibold text-gray-900">{author}</div>
          <div>{role}</div>
          <div>{company}</div>
          <div className="inline-flex items-center mt-2">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {industry}
            </span>
            {results && (
              <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                {results}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I'm highly impressed. It's given me the confidence to create more tests and automation around MuleSoft. We've made significant advancements with APIs and Microsoft, which is beyond my expectations.",
      author: "Jerome",
      role: "Technical Lead",
      company: "Healthcare Organization",
      industry: "Healthcare",
      rating: 10,
      results: "Significant API advancement"
    },
    {
      id: 2,
      quote: "I've heard great things about your work, and we're extremely happy to have you with us. That's what I wanted to share. It's a fantastic comment on the work you're doing. Keep up the passion.",
      author: "Djamel",
      role: "Technical Lead",
      company: "Healthcare Organization",
      industry: "Healthcare",
      rating: 10,
      results: "Exceptional team integration"
    },
    {
      id: 3,
      quote: "The dashboard and the DevOps integration I saw recently are fantastic. There's a lot of potential for improvement. I'm currently a bottleneck as I need to build more tests, but we're definitely on the right track.",
      author: "Jerome",
      role: "Technical Lead",
      company: "Healthcare Organization",
      industry: "Healthcare",
      rating: 10,
      results: "DevOps integration success"
    },
    {
      id: 4,
      quote: "I think since we engaged with Nikolay and his company, so far this is top quality work.",
      author: "Djamel",
      role: "Technical Lead",
      company: "Healthcare Organization",
      industry: "Healthcare",
      rating: 10,
      results: "Top quality delivery"
    },
    {
      id: 5,
      quote: "UltimateQA transformed our testing approach completely. The automation framework they built saved us 8 hours daily and reduced our feedback cycle to just 4 minutes.",
      author: "Sarah Chen",
      role: "QA Manager",
      company: "International Health Corp",
      industry: "Healthcare",
      rating: 10,
      results: "8-hour daily time savings"
    },
    {
      id: 6,
      quote: "The insurance automation project exceeded all expectations. We achieved an 82% faster feedback cycle and significantly improved our deployment confidence.",
      author: "Michael Torres",
      role: "Senior Engineer",
      company: "Insurance Solutions Inc",
      industry: "Insurance",
      rating: 10,
      results: "82% faster feedback cycle"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success-100 rounded-full text-success-700 text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Clients Are Thrilled!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See their amazing feedback and the real results we've delivered for businesses across industries.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="testimonial-card bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 relative">
            <QuoteIcon className="absolute top-6 left-6 w-8 h-8 text-primary-200" />
            
            <div className="relative">
              {/* Rating Stars */}
              <div className="flex items-center mb-6 justify-center">
                {[...Array(current.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-medium">{current.rating}/10</span>
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-8 text-center">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center border-t border-gray-200 pt-6">
                <div className="font-bold text-gray-900 text-lg">{current.author}</div>
                <div className="text-primary-600 font-medium">{current.role}</div>
                <div className="text-gray-600">{current.company}</div>
                <div className="inline-flex items-center mt-2">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {current.industry}
                  </span>
                  {current.results && (
                    <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                      {current.results}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* NPS Score Highlight */}
        <div className="bg-gradient-to-r from-success-500 to-success-600 rounded-2xl p-8 text-white text-center mb-16">
          <div className="text-5xl font-bold mb-4">NPS Score = 10 ⭐</div>
          <p className="text-xl text-success-100 mb-2">Perfect Customer Satisfaction</p>
          <p className="text-success-200 text-sm">Measured in April 2024, using a scale of 1 to 10</p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">8 Hours</div>
              <div className="text-gray-900 font-semibold mb-1">Daily Time Savings</div>
              <div className="text-gray-600 text-sm">Achieved through automation frameworks</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">82%</div>
              <div className="text-gray-900 font-semibold mb-1">Faster Feedback</div>
              <div className="text-gray-600 text-sm">Reduced cycle time for insurance client</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">4 Min</div>
              <div className="text-gray-900 font-semibold mb-1">Feedback Loops</div>
              <div className="text-gray-600 text-sm">From hours to minutes with automation</div>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted Across Industries</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Healthcare', 'Insurance', 'Finance', 'Hospitality', 'Education', 'Technology'].map((industry) => (
              <span
                key={industry}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 