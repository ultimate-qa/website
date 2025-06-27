'use client';

import CTASection from '@/components/CTASection';
import FeaturedIn from '@/components/FeaturedIn';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HubSpotForm from '@/components/HubSpotForm';
import Results from '@/components/Results';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import type { ServiceType } from '@/types';
import { useState } from 'react';

export default function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType>('Software Consulting');

  const handleOpenForm = (service?: string) => {
    if (service) {
      setSelectedService(service as ServiceType);
    }
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header onCTAClick={() => handleOpenForm()} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured In & Partners Section */}
      <FeaturedIn />
      
      {/* Professional Services Section */}
      <Services onServiceClick={handleOpenForm} />
      
      {/* Results Section */}
      <Results />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Final CTA Section */}
      <CTASection onCTAClick={() => handleOpenForm()} />

      {/* HubSpot Form Modal */}
      <HubSpotForm 
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        defaultService={selectedService}
      />
    </main>
  );
} 