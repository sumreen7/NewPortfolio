import { tool } from "ai";
import { z } from "zod";

export const getCertifications = tool({
  description:
    "Show Fathima Sumreen's certifications, licenses, and professional credentials. Use this when users ask about certifications, credentials, licenses, or professional qualifications.",
  parameters: z.object({
    _placeholder: z.string().optional(),
  }),
  execute: async () => {
    return {
      certifications: [
        {
          category: "Salesforce",
          icon: "☁️",
          items: [
            { name: "Salesforce Certified Administrator", issuer: "Salesforce", year: "2023" },
            { name: "Salesforce Certified Platform Developer I", issuer: "Salesforce", year: "2023" },
            { name: "Trailblazer — 82,000+ points, 186 badges", issuer: "Salesforce Trailhead", year: "2025" },
          ],
        },
        {
          category: "AI & Machine Learning",
          icon: "🤖",
          items: [
            { name: "Machine Learning Specialization", issuer: "Coursera / Andrew Ng", year: "2023" },
            { name: "Deep Learning Specialization", issuer: "Coursera / DeepLearning.AI", year: "2023" },
          ],
        },
        {
          category: "Cloud & Data",
          icon: "☁️",
          items: [
            { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2023" },
            { name: "Google Cloud Fundamentals", issuer: "Google", year: "2023" },
          ],
        },
      ],
    };
  },
});