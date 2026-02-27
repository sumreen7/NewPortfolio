import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Get Sumreen\'s contact information including email, phone, location, and social media links. Use this when users ask for contact details, how to reach you, or contact information.',
  parameters: z.object({}).optional(),
  execute: async (params = {}) => {
    return JSON.stringify({
      contact: {
        email: 'sumreenf@andrew.cmu.edu',
        phone: '+1-412-708-4876',
        location: 'Pittsburgh, Pennsylvania, USA',
        hometown: 'Hyderabad, India',
        linkedin: 'https://www.linkedin.com/in/sumreen7/',
        github: 'https://github.com/sumreen7'
      }
    });
  },
});
