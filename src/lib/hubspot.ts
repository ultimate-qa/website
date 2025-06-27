import type { HubSpotFormData } from '@/types';

// HubSpot configuration
export const HUBSPOT_CONFIG = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '44315798',
  formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || 'contact-form',
  trackingCode: process.env.NEXT_PUBLIC_HUBSPOT_TRACKING_CODE,
};

// Submit form data to HubSpot
export async function submitToHubSpot(formData: HubSpotFormData): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_CONFIG.portalId}/${HUBSPOT_CONFIG.formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: '0-1',
              name: 'firstname',
              value: formData.fullName.split(' ')[0],
            },
            {
              objectTypeId: '0-1',
              name: 'lastname', 
              value: formData.fullName.split(' ').slice(1).join(' ') || '',
            },
            {
              objectTypeId: '0-1',
              name: 'email',
              value: formData.email,
            },
            {
              objectTypeId: '0-1',
              name: 'company',
              value: formData.company,
            },
            {
              objectTypeId: '0-1',
              name: 'phone',
              value: formData.phone || '',
            },
            {
              objectTypeId: '0-1',
              name: 'service_interest',
              value: formData.serviceInterest,
            },
            {
              objectTypeId: '0-1',
              name: 'message',
              value: formData.message || '',
            },
          ],
          context: {
            pageUri: typeof window !== 'undefined' ? window.location.href : '',
            pageName: 'UltimateQA Landing Page',
            ipAddress: '', // Will be auto-detected by HubSpot
          },
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error('HubSpot submission error:', error);
    return false;
  }
}

// Track events in HubSpot
export function trackHubSpotEvent(eventName: string, properties?: Record<string, any>): void {
  if (typeof window !== 'undefined' && (window as any)._hsq) {
    (window as any)._hsq.push([
      'trackEvent',
      {
        id: eventName,
        properties: properties || {},
      },
    ]);
  }
}

// Initialize HubSpot tracking
export function initializeHubSpotTracking(): void {
  if (typeof window !== 'undefined' && HUBSPOT_CONFIG.trackingCode) {
    // Create HubSpot tracking script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/${HUBSPOT_CONFIG.portalId}.js`;
    
    // Add to head
    document.head.appendChild(script);
    
    // Initialize _hsq if it doesn't exist
    (window as any)._hsq = (window as any)._hsq || [];
  }
}

// Track form events
export const trackFormEvents = {
  formViewed: () => trackHubSpotEvent('form_viewed'),
  formStarted: () => trackHubSpotEvent('form_started'),
  formSubmitted: (serviceInterest: string) => 
    trackHubSpotEvent('form_submitted', { service_interest: serviceInterest }),
  ctaClicked: (ctaName: string) => 
    trackHubSpotEvent('cta_clicked', { cta_name: ctaName }),
  serviceCardClicked: (serviceName: string) => 
    trackHubSpotEvent('service_card_clicked', { service_name: serviceName }),
};

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone format (optional, flexible)
export function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Optional field
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Format form data for submission
export function formatFormData(rawData: any): HubSpotFormData {
  return {
    fullName: rawData.fullName?.trim() || '',
    email: rawData.email?.trim().toLowerCase() || '',
    company: rawData.company?.trim() || '',
    phone: rawData.phone?.trim() || '',
    serviceInterest: rawData.serviceInterest || 'Strategy Consultation',
    message: rawData.message?.trim() || '',
  };
} 