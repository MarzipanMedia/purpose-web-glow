
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AiSeoHero from '../../components/ai-seo/AiSeoHero';
import AiSeoServices from '../../components/ai-seo/AiSeoServices';
import AiSeoProcess from '../../components/ai-seo/AiSeoProcess';
import AiSeoContactForm from '../../components/ai-seo/AiSeoContactForm';
import FAQSection from '../../components/services/FAQSection';
import ServiceClientLogos from '../../components/services/ServiceClientLogos';

// FAQ data (British English, placeholder answers)
const aiSeoFaqs = [
  {
    question: "What makes your AI-powered SEO agency stand out from the others?",
    answer:
      "Our agency leverages ethical, cutting-edge AI strategies tailored to your business. We focus on transparency, privacy, and measurable, sustainable results."
  },
  {
    question: "How long does it typically take to see results from SEO efforts?",
    answer:
      "SEO is a long-term strategy. Noticeable improvements can begin within 3–6 months, but significant results are typically seen after consistent effort over 6–12 months."
  },
  {
    question: "Can you guarantee first-page rankings on Google?",
    answer:
      "No ethical agency can guarantee first-page rankings, as search algorithms are constantly changing. We focus on sustainable tactics that improve your chances and drive qualified traffic."
  },
  {
    question: "How do you determine the right keywords to target for my business?",
    answer:
      "We use advanced AI tools and industry research to identify high-impact, relevant keywords based on your goals, competition, and target audience."
  },
  {
    question: "Do I need to sign a long-term contract with your digital agency?",
    answer:
      "No long-term contracts are required. We offer flexible arrangements, though ongoing SEO delivers the best results."
  },
  {
    question: "How do you measure the success of an SEO campaign?",
    answer:
      "We measure success using analytics such as organic rankings, website traffic, conversions, and other business-relevant KPIs agreed with you."
  },
  {
    question: "Will you make changes to my website?",
    answer:
      "Yes, we recommend and (with your approval) implement on-site improvements as part of our SEO service."
  },
  {
    question: "How much do SEO services cost in Sydney?",
    answer:
      "Costs vary depending on requirements, but we offer transparent pricing tailored to your business size and goals. Please contact us for a no-obligation quote."
  },
  {
    question: "An SEO agency in Bondi? Do you actually do any work?",
    answer:
      "Absolutely! It's not all smoothies and sunshine. We're a results-driven team based in Bondi, working with clients across Australia to deliver measurable SEO outcomes. Bondi is full of content creators and creatives all hustling along together. But we've been here since 2014 and we're happy to call Sydney home"
  },
];

const AiSeo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AiSeoHero />
        <AiSeoServices />
        <AiSeoProcess />
        <ServiceClientLogos 
          heading="Trusted By SEO Clients"
          subheading="Join these forward-thinking organizations who've chosen our AI SEO expertise" 
          backgroundColor="bg-white"
        />
        <AiSeoContactForm />
        <FAQSection
          title="Frequently Asked Questions about AI SEO"
          description="Everything you need to know about working with our ethical, AI-powered SEO agency in Australia."
          faqs={aiSeoFaqs}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AiSeo;
