"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import { CheckCircle, Headphones, ListChecks, Sparkles, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Services",          id: "services"},
        {
          name: "Results",          id: "results-benefits"},
        {
          name: "Case Study",          id: "case-study"}
      ]}
      brandName="AI 24 Automators"
      button={{
        text: "Book a Call",        href: "https://calendly.com/bizautomater/discovery-call"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "sparkles-gradient"}}
      logoText="Automate Your Business with AI"
      description="We build AI voice agents and automation systems that handle calls, qualify leads, and close more deals for you. Limited slots available this week."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BQbdl8fDI5y52TgienUxhnqziM/a-futuristic-ai-dashboard-interface-with-1774425466833-044f4499.png"
      imageAlt="Futuristic AI dashboard interface"
      layoutOrder="default"
      buttons={[
        {
          text: "Book a Free AI Strategy Call",          href: "https://calendly.com/bizautomater/discovery-call"},
      ]}
      buttonAnimation="slide-up"
      buttonClassName="sticky bottom-0 z-50 lg:static"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Headphones,
          title: "AI Calling Agents",          description: "Deploy intelligent AI voice agents for inbound customer service, outbound sales calls, and automated follow-ups. Handle high call volumes 24/7 without human intervention."},
        {
          icon: Target,
          title: "Lead Qualification Automation",          description: "Automate the entire lead qualification process using AI bots that engage, assess, and score leads, ensuring your sales team focuses only on high-intent prospects."},
        {
          icon: ListChecks,
          title: "CRM + Workflow Automation",          description: "Integrate AI seamlessly with your CRM and existing workflows to automate data entry, task management, and communication, freeing up countless hours for your team."},
        {
          icon: CheckCircle,
          title: "Appointment Booking Systems",          description: "Implement AI-driven systems that autonomously book, reschedule, and confirm appointments, optimizing your calendar and reducing no-shows."},
      ]}
      title="Unlock Unrivaled Business Efficiency"
      description="Discover our suite of cutting-edge AI automation services designed to streamline your operations, enhance customer engagement, and drive unprecedented growth."
    />
  </div>

  <div id="mid-page-cta" data-section="mid-page-cta">
    <ContactCTA
      tag="Next Step"
      title="See How AI Can Automate Your Business"
      description="Ready to transform your operations? Book a quick chat to explore how our AI solutions can integrate seamlessly with your business."
      buttons={[
        {
          text: "Schedule Your Call",          href: "https://calendly.com/bizautomater/discovery-call"},
      ]}
      buttonClassName="sticky bottom-0 z-50 lg:static"
      background={{ variant: "radial-gradient" }}
      useInvertedBackground={false}
    />
  </div>

  <div id="results-benefits" data-section="results-benefits">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",          value: "50+",          title: "Hours Saved/Month",          items: [
            "Reclaim valuable time",            "Focus on strategic tasks"],
        },
        {
          id: "metric-2",          value: "2-3X",          title: "Conversion Rate Increase",          items: [
            "Higher lead quality",            "Optimized follow-ups"],
        },
        {
          id: "metric-3",          value: "Zero",          title: "Missed Leads",          items: [
            "24/7 coverage",            "Instant response times"],
        },
        {
          id: "metric-4",          value: "24/7",          title: "Uninterrupted Operation",          items: [
            "Always-on service",            "No additional staff needed"],
        },
      ]}
      title="Experience Tangible Results with AI Automation"
      description="Our proven 3-step system — Analyze, Build, Scale — ensures your business achieves measurable benefits. From saving operational hours to boosting conversions, AI 24 Automators delivers. \n\nHere’s what you can expect:"
    />
  </div>

  <div id="case-study" data-section="case-study">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      gridVariant="uniform-all-items-equal"
      title="Case Study: AI Calling Agent for Real Estate"
      description="See how our AI calling agent transformed lead follow-up and appointment setting for a leading real estate agency, allowing them to scale without increasing headcount. From initial inquiry to qualified lead, our AI handles it all."
      products={[
        {
          id: "real-estate-case-study",          name: "Automated Real Estate Lead Agent",          price: "View Full Case Study",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BQbdl8fDI5y52TgienUxhnqziM/a-split-screen-image-showcasing-an-ai-ca-1774425461380-4381c27b.png",          imageAlt: "AI Calling Agent demo screen for real estate automation"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
    <ContactCTA
      tag="Act Now"
      title="Stop Losing Leads. Let AI Handle It 24/7."
      description="Don't let valuable opportunities slip away. Our AI agents are ready to engage, qualify, and convert leads around the clock."
      buttons={[
        {
          text: "Book Your Free Call Now",          href: "https://calendly.com/bizautomater/discovery-call"},
      ]}
      buttonClassName="sticky bottom-0 z-50 lg:static"
      background={{ variant: "radial-gradient" }}
      useInvertedBackground={false}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}