import { tool } from "ai";
import { z } from "zod";

export const getAchievements = tool({
  description:
    "Show Fathima Sumreen's key achievements, awards, publications, volunteering, and notable accomplishments. Use this when users ask about achievements, awards, recognition, publications, certifications, volunteering, or notable accomplishments.",
  parameters: z.object({
    _placeholder: z.string().optional(),
  }),
  execute: async () => {
    return {
      achievements: [
        {
          category: "Awards & Recognition",
          icon: "🏆",
          items: [
            "Tennis State Champion (Under-16) — National level, India",
            "Won Inter-college Badminton Tournament",
            "Best Project Award (IT Dept) — Solar Energy Prediction System, implemented across JNTU campuses & published by Springer",
            "Merit Certificate of Excellence for outstanding academic & extracurricular achievements",
            "Special Mention at Inter-college MUN 2021 for exceptional communication & diplomacy",
            "Merit certificate for outstanding performance at IIIT Hyderabad Hackathon",
            "Distinction certificate — National Engineers Olympiad",
          ],
        },
        {
          category: "Research & Publications",
          icon: "📄",
          items: [
            "Published at ICMLBDA 2023 (Springer) — Solar Energy Prediction & Demand Analysis",
            "15+ citations, 500+ downloads, 10+ academic mentions",
            "94% prediction accuracy using Python, TensorFlow, XGBoost, and AWS",
          ],
        },
        {
          category: "AI & Product",
          icon: "🤖",
          items: [
            "Built Naviyo — AI travel assistant with 82% A/B test classification accuracy, validated with 200+ users",
            "Salesforce Futureforce Hackathon — Built gamified productivity platform, increased user engagement by 60%",
            "IIIT Hyderabad Hackathon — Smart Campus IoT solution reducing energy consumption by 25%",
          ],
        },
        {
          category: "Engineering Impact @ Salesforce",
          icon: "⚡",
          items: [
            "40% reduction in onboarding time by redesigning lifecycle workflows",
            "65% cut in manual verification effort via A/B tested automation logic",
            "Shipped features serving 40K+ enterprise users end-to-end",
            "Trailblazer with 82,000+ points and 186 badges on Salesforce Trailhead",
          ],
        },
        {
          category: "Community & Volunteering",
          icon: "🤝",
          items: [
            "StreetCause Coordinator — Worked with underprivileged children to improve local government school infrastructure",
            "Rotaract Club GNITS (Joint Director) — Executed projects benefiting 400+ people directly",
            "Entrepreneurship Cell GNITS (Director) — Hosted industry leader events, increased attendance by 30%",
            "Earth Force Club, Salesforce — Drove sustainability initiatives including waste reduction and tree-planting campaigns",
            "Samskruthi Cultural Club (Broadcasting Chair) — Revolutionized event coverage through live streaming and promotions",
          ],
        },
        {
          category: "Content & Community",
          icon: "📚",
          items: [
            "Founder of @coffeennovels — book community with 60,000+ Instagram followers",
            "Book influencer inspiring deeper appreciation for fiction and literature",
          ],
        },
        {
          category: "Academic",
          icon: "🎓",
          items: [
            "Pursuing MISM at Carnegie Mellon University (Class of 2026)",
            "Selected for NVIDIA x CMU industry research collaboration",
            "VSP Vision CMU Capstone — demand forecasting model with R² = 0.737 across 162 SKUs",
            "Languages: English, Spanish, Hindi, Telugu, Arabic, Urdu, American Sign Language",
          ],
        },
      ],
    };
  },
});