'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface CertificationCategory {
  category: string;
  icon: string;
  items: Certification[];
}

interface CertificationsProps {
  data?: { certifications: CertificationCategory[] } | null;
}

const DEFAULT_CERTIFICATIONS: CertificationCategory[] = [
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
];

const Certifications = ({ data }: CertificationsProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const certifications = data?.certifications ?? DEFAULT_CERTIFICATIONS;

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl"
    >
      <Card className="w-full border-none px-6 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Certifications
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{section.icon}</span>
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>
                <ul className="space-y-3 pl-8">
                  {section.items.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-accent-foreground">{cert.name}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {index < certifications.length - 1 && (
                  <div className="border-t border-border pt-2" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Certifications;