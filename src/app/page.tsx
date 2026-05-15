"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Database, Shield, Zap, BarChart3, Lock, Globe, Code2, Brain, ArrowRight, Check, Sparkles, Activity, Layers, Terminal, FileJson, CreditCard, Building2, TrendingUp } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FloatingGoldBar } from "@/components/ui/obj-gold-bar";
import { AdvancedButton } from "@/components/ui/21st-button";
import { AltynLogo } from "@/components/ui/logo";
import { PurposeCards } from "@/components/ui/purpose-cards";
import { Component as ImageAutoSlider } from "@/components/ui/image-auto-slider";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$0",
    description: "Get started for free",
    features: ["Up to 5 users", "Basic analytics", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "For growing teams",
    features: ["Unlimited users", "Advanced analytics", "Priority support", "Custom integrations"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Everything in Pro", "Dedicated account manager", "SLA guarantee", "On-prem option"],
    popular: false,
  },
];


function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full glass-strong px-6 h-14 flex items-center justify-between shadow-2xl border border-white/10">
      <Link href="/">
        <AltynLogo />
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#api" className="hover:text-white transition-colors">API</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <Link href="/dashboard/docs" className="hover:text-white transition-colors">Docs</Link>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/login"><AdvancedButton variant="outline" className="h-9 px-4 rounded-full text-xs">Sign In</AdvancedButton></Link>
        <Link href="/dashboard">
          <AdvancedButton variant="primary" className="h-9 px-4 rounded-full text-xs">Get Started</AdvancedButton>
        </Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Generate compliant{" "}
          <span className="gradient-text">synthetic financial data</span>{" "}
          instantly
        </motion.h1>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 mb-8">
          <FloatingGoldBar />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-16">
          <Link href="/dashboard">
            <AdvancedButton variant="primary">Start Building</AdvancedButton>
          </Link>
          <Link href="/api-playground">
            <AdvancedButton variant="outline">View API</AdvancedButton>
          </Link>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 max-w-4xl mx-auto z-10 relative">
          <ContainerScroll
            titleComponent={
              <h2 className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-white mb-20">
                The Standard for<br />
                <span className="gradient-text-gold">Synthetic Data</span>
              </h2>
            }
          >
            <div className="rounded-xl bg-navy-950 p-6 font-mono text-sm text-left overflow-hidden h-full">
              <div className="flex items-center gap-2 mb-4 text-text-muted">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-rose-accent/60" /><div className="w-3 h-3 rounded-full bg-amber-accent/60" /><div className="w-3 h-3 rounded-full bg-emerald-accent/60" /></div>
                <span className="ml-2 text-base">altyn generate — Banking Dataset</span>
              </div>
              <div className="space-y-2 text-text-secondary">
                <p><span className="text-emerald-accent">$</span> altyn generate --type banking --records 1M --fraud-ratio 0.05</p>
                <p className="text-text-muted">→ Initializing GAN-based transaction engine...</p>
                <p className="text-text-muted">→ Generating 1,000,000 synthetic transactions...</p>
                <p className="text-text-muted">→ Injecting fraud patterns (5.0% ratio)...</p>
                <p className="text-text-muted">→ Running statistical validation...</p>
                <p className="text-emerald-accent text-base mt-4 font-bold">✓ Dataset generated in 4.2s | Quality: 97.8% | Privacy: 99.1%</p>
                <p className="text-amber-accent text-base mt-2">→ Export: s3://altyn-datasets/banking_v12.parquet (284 MB)</p>
              </div>
            </div>
          </ContainerScroll>
        </motion.div>
      </div>
    </section>
  );
}

const LOGOS = ["JPMorgan Chase", "Goldman Sachs", "Stripe", "Plaid", "Square", "Visa", "Mastercard", "Coinbase"];

function TrustedBy() {
  return (
    <section className="py-12 px-6 border-y border-border-primary">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-text-muted mb-6">Trusted by leading financial institutions</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {LOGOS.map((name) => (
            <div key={name} className="text-text-muted/40 text-sm font-semibold tracking-wide">{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: Database, title: "Synthetic Data Engine", desc: "Generate millions of realistic transactions, profiles, and account histories with statistical fidelity.", color: "text-amber-400" },
  { icon: Shield, title: "Fraud Simulation Lab", desc: "Simulate card theft, AML, synthetic identity fraud, and coordinated fraud rings with AI-driven scenarios.", color: "text-rose-400" },
  { icon: Brain, title: "ML Model Training", desc: "Train and benchmark fraud detection models directly on synthetic datasets with built-in evaluation.", color: "text-amber-400" },
  { icon: Zap, title: "Real-Time Risk Engine", desc: "Score transactions in real-time with anomaly detection, entity resolution, and behavioral analysis.", color: "text-amber-500" },
  { icon: Code2, title: "Developer API", desc: "RESTful API with SDKs for Python, Node.js, and Go. Generate datasets programmatically at scale.", color: "text-amber-400" },
  { icon: Lock, title: "Privacy & Compliance", desc: "SOC 2 Type II certified. GDPR compliant. Zero real customer data exposure with differential privacy.", color: "text-emerald-accent" },
  { icon: BarChart3, title: "Analytics Suite", desc: "Interactive dashboards with distribution analysis, correlation matrices, and synthetic-vs-real scoring.", color: "text-amber-300" },
  { icon: Globe, title: "Multi-Rail Support", desc: "ACH, wire, card, P2P, crypto — generate data across all payment rails with regional compliance.", color: "text-amber-300" },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-grade synthetic data infrastructure</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Everything you need to generate, validate, and deploy synthetic financial datasets at scale.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ delay: i * 0.05 }}
              className="stat-card group cursor-default">
              <f.icon className={`w-5 h-5 ${f.color} mb-3`} />
              <h3 className="font-semibold text-sm mb-1.5">{f.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApiSection() {
  return (
    <section id="api" className="py-12 px-6 bg-navy-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for developers</h2>
          <p className="text-text-secondary">Integrate synthetic data generation into your pipeline with a few lines of code.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp}
            className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4 text-sm text-text-secondary">
              <FileJson className="w-4 h-4 text-amber-400" /> Python SDK
            </div>
            <pre className="text-xs font-mono text-text-secondary leading-relaxed overflow-x-auto">
              {`import altyn

client = altyn.Client(api_key="ak_live_...")

dataset = client.generate(
    type="banking",
    records=1_000_000,
    fraud_ratio=0.05,
    rails=["ach", "wire", "card"],
    time_range="90d",
    merchants=True,
    geographic="us"
)

# Export to your data warehouse
dataset.export("s3://my-bucket/synth.parquet")
print(f"Quality: {dataset.quality_score}%")`}
            </pre>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp} transition={{ delay: 0.1 }}
            className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4 text-sm text-text-secondary">
              <Terminal className="w-4 h-4 text-amber-400" /> REST API
            </div>
            <pre className="text-xs font-mono text-text-secondary leading-relaxed overflow-x-auto">
              {`curl -X POST https://api.altyn.ai/v1/generate \\
  -H "Authorization: Bearer ak_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "credit_card",
    "records": 500000,
    "fraud_ratio": 0.03,
    "config": {
      "merchants": true,
      "geographies": ["US", "EU"],
      "include_metadata": true
    }
  }'

# Response: 200 OK
{
  "job_id": "gen_8x4kLm...",
  "status": "generating",
  "eta_seconds": 12
}`}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const USE_CASES = [
  { icon: CreditCard, title: "Fraud Detection", desc: "Train ML models on realistic fraud patterns without data privacy risks" },
  { icon: Building2, title: "Bank Testing", desc: "Stress-test core banking systems with production-realistic transaction volumes" },
  { icon: TrendingUp, title: "Risk Modeling", desc: "Build and validate credit risk models with statistically sound synthetic portfolios" },
  { icon: Layers, title: "Sandbox Data", desc: "Populate developer sandbox environments with realistic financial scenarios" },
];

function UseCases() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Purpose-built for financial services</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {USE_CASES.map((uc, i) => (
            <motion.div key={uc.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ delay: i * 0.05 }} className="stat-card text-center py-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <uc.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-semibold mb-2">{uc.title}</h3>
              <p className="text-xs text-text-secondary">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-navy-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-text-secondary">Start free. Scale as you grow.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} transition={{ delay: i * 0.1 }}
              className={`stat-card p-6 relative ${plan.popular ? "border-blue-500/40 glow-blue" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-xs font-medium text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className="text-xs text-text-secondary mb-4">{plan.description}</p>
              <div className="mb-6">
                {plan.price !== null ? (
                  <><span className="text-3xl font-bold">${plan.price}</span><span className="text-text-secondary text-sm">/{plan.period}</span></>
                ) : (
                  <span className="text-3xl font-bold">Custom</span>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-text-secondary">
                    <Check className="w-3.5 h-3.5 text-emerald-accent mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className={plan.popular ? "btn-primary w-full" : "btn-secondary w-full"}>{plan.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-primary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <AltynLogo />
        </div>
        <div className="flex gap-6 text-xs text-text-muted">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <a href="#" className="hover:text-white transition-colors">Status</a>
          <Link href="/dashboard/docs" className="hover:text-white transition-colors">Documentation</Link>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PurposeCards />
      <ImageAutoSlider />
      <ApiSection />
      <Footer />
    </div>
  );
}
