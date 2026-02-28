import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  CodeIcon,
  GraduationCapIcon,
  Laugh,
  Layers,
  MailIcon,
  Award,
  Sparkles,
  UserSearch,
} from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
}

const questions = {
  Me: 'Who are you? I want to know more about you.',
  Certifications: 'What are your certifications and professional credentials?',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Experience: 'What is your work experience? Tell me about your professional background.',
  Contact: 'How can I reach you? What kind of project would make you say "yes" immediately?',
};

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Certifications', color: '#FF6B35', icon: Award },
  { key: 'Projects', color: '#3E9858', icon: CodeIcon },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Experience', color: '#B95F9D', icon: GraduationCapIcon },
  { key: 'Contact', color: '#C19433', icon: MailIcon },
];

const specialQuestions = [
  'Who are you?',
  'Can I see your resume?',
  'What projects are you most proud of?',
  'What are your skills?',
  'How can I reach you?',
  "What's the craziest thing you've ever done?",
];

const questionsByCategory = [
  {
    id: 'me',
    name: 'Me',
    icon: UserSearch,
    questions: [
      'Who are you?',
      'What are your passions?',
      'How did you get started in tech?',
      'Where do you see yourself in 5 years?',
    ].filter(Boolean),
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: BriefcaseIcon,
    questions: [
      'Can I see your resume?',
      'What makes you a valuable team member?',
      'Where are you working now?',
      'Why should I hire you?',
      "What's your educational background?",
    ].filter(Boolean),
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: CodeIcon,
    questions: ['What projects are you most proud of?'].filter(Boolean),
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: GraduationCapIcon,
    questions: [
      'What are your skills?',
    ].filter(Boolean),
  },
  {
    id: 'certifications',
    name: 'Certifications',
    icon: Award,
    questions: [
      'What are your certifications?',
      'What professional credentials do you have?',
    ].filter(Boolean),
  },
  {
    id: 'experience',
    name: 'Experience',
    icon: BriefcaseBusiness,
    questions: [
      'What is your work experience?',
      'Tell me about your professional background',
      'What companies have you worked for?',
      'What are your career achievements?',
    ].filter(Boolean),
  },
  {
    id: 'contact',
    name: 'Contact & Future',
    icon: MailIcon,
    questions: [
      'How can I reach you?',
      "What kind of project would make you say 'yes' immediately?",
      'Where are you located?',
    ].filter(Boolean),
  },
];

const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 1.5,
        ease: [0.42, 0, 0.58, 1],
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  setInput,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (questionKey: string) => {
    if (!questions[questionKey as keyof typeof questions]) {
      console.error(`Invalid question key: ${questionKey}`);
      return;
    }
    if (submitQuery) {
      submitQuery(questions[questionKey as keyof typeof questions]);
      if (setInput) {
        setTimeout(() => setInput(''), 100);
      }
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery) {
      submitQuery(question);
      if (setInput) {
        setTimeout(() => setInput(''), 100);
      }
    }
    setOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          <div className={isVisible ? 'mb-2 flex justify-center' : 'mb-0 flex justify-center'}>
            <button
              onClick={toggleVisibility}
              className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 transition-colors hover:text-gray-700"
            >
              {isVisible ? (
                <><ChevronDown size={14} />Hide quick questions</>
              ) : (
                <><ChevronUp size={14} />Show quick questions</>
              )}
            </button>
          </div>

          {isVisible && (
            <div className="w-full">
              <div className="flex w-full gap-2 overflow-x-auto pb-2">
                {questionConfig.map(({ key, color, icon: Icon }) => (
                  <Button
                    key={key}
                    onClick={() => handleQuestionClick(key)}
                    variant="outline"
                    className="border-border hover:bg-border/30 flex-shrink-0 cursor-pointer rounded-xl border bg-background/80 px-4 py-3 shadow-none backdrop-blur-sm transition-all duration-200 hover:shadow-lg active:scale-95"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon size={18} strokeWidth={2} color={color} />
                      <span className="text-sm font-medium whitespace-nowrap">{key}</span>
                    </div>
                  </Button>
                ))}

                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Drawer.Trigger className="group relative flex flex-shrink-0 items-center justify-center">
                        <motion.div
                          className="hover:bg-border/30 flex h-auto cursor-pointer items-center space-x-1 rounded-xl border border-border bg-background/80 px-4 py-3 text-sm backdrop-blur-sm transition-all duration-200"
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <CircleEllipsis className="h-[20px] w-[18px]" strokeWidth={2} />
                          </div>
                        </motion.div>
                      </Drawer.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <AnimatedChevron />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs" />
          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-100 mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-background outline-none lg:h-[60%]">
            <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-background p-4">
              <div className="mx-auto max-w-md space-y-4">
                <div aria-hidden className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted" />
                <div className="mx-auto w-full max-w-md">
                  <div className="space-y-8 pb-16">
                    {questionsByCategory.map((category) => (
                      <CategorySection
                        key={category.id}
                        name={category.name}
                        Icon={category.icon}
                        questions={category.questions}
                        onQuestionClick={handleDrawerQuestionClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

interface CategorySectionProps {
  name: string;
  Icon: React.ElementType;
  questions: string[];
  onQuestionClick: (question: string) => void;
}

function CategorySection({ name, Icon, questions, onQuestionClick }: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5" />
        <Drawer.Title className="text-[22px] font-medium text-foreground">{name}</Drawer.Title>
      </div>
      <Separator className="my-4" />
      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (!question || typeof question !== 'string') {
    console.error('Invalid question:', question);
    return null;
  }

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-[10px]',
        'text-md px-6 py-4 text-left font-normal',
        'transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isSpecial ? 'bg-primary' : 'bg-muted'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ backgroundColor: isSpecial ? undefined : '#F0F0F2' }}
      whileTap={{ scale: 0.98, backgroundColor: isSpecial ? undefined : '#E8E8EA' }}
    >
      <div className="flex items-center">
        {isSpecial && <Sparkles className="mr-2 h-4 w-4 text-primary-foreground" />}
        <span className={isSpecial ? 'font-medium text-primary-foreground' : ''}>{question}</span>
      </div>
      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <ChevronRight
          className={cn('h-5 w-5 shrink-0', isSpecial ? 'text-primary-foreground' : 'text-primary')}
        />
      </motion.div>
    </motion.button>
  );
}