import { Card } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <div className="md:container mx-auto px-4 py-10">
      <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-xl shadow-xl">
        <div className="p-6 md:p-10">
          <h1 className="text-center text-slate-300 text-2xl md:text-3xl font-bold leading-relaxed mb-6">
            <span className="text-yellow-400 font-medium ">FAQs</span>
          </h1>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-slate-700/30 rounded-lg">
                <AccordionTrigger className="text-slate-200 hover:text-yellow-400 px-4 py-3">
                  How do I get a referral code?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-4 pb-3">
                  To get a referral code, sign in to your account and navigate to the referral section.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-slate-700/30 rounded-lg">
                <AccordionTrigger className="text-slate-200 hover:text-yellow-400 px-4 py-3">
                  Do I get rewarded in tokens or ETH when I refer buyers?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-4 pb-3">
                  You will receive your rewards in ETH instantly once someone you refer makes a transaction.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-slate-700/30 rounded-lg">
                <AccordionTrigger className="text-slate-200 hover:text-yellow-400 px-4 py-3">
                  What are the benefits of the referral program?
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 px-4 pb-3">
                  Our referral program offers competitive rewards and helps you earn passive income.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FAQSection;