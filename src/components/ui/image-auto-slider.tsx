"use client";

import React from 'react';
import { Database, Shield, Zap, Lock, Globe, Code2, Brain, Activity } from "lucide-react";

export const Component = () => {
  const features = [
    { id: "1", title: "Synthetic Data", description: "Generate millions of realistic records.", icon: Database },
    { id: "2", title: "Fraud Simulation", description: "Inject complex AML & fraud patterns.", icon: Shield },
    { id: "3", title: "Real-time API", description: "Stream synthetic data instantly.", icon: Zap },
    { id: "4", title: "Privacy Safe", description: "Zero exposure to real customer data.", icon: Lock },
    { id: "5", title: "Global Schemas", description: "Support for multi-region data structures.", icon: Globe },
    { id: "6", title: "SDK Integration", description: "Native Python, Node.js, and Go SDKs.", icon: Code2 },
    { id: "7", title: "Model Training", description: "Train risk models on edge cases.", icon: Brain },
    { id: "8", title: "Activity Graphs", description: "Map out synthetic network behaviors.", icon: Activity }
  ];

  // Duplicate for seamless loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .feature-card {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .feature-card:hover {
          transform: scale(1.05);
          filter: brightness(1.2);
        }
      `}</style>
      
      <div className="w-full min-h-[50vh] bg-transparent relative overflow-hidden flex flex-col items-center justify-center py-12">
        <div className="text-center mb-8">
            <h2 className="font-extrabold mb-4 text-white leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Platform <span className="gradient-text-gold">Features</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Explore the tools available to build your financial future.</p>
        </div>
        
        {/* Scrolling features container */}
        <div className="relative z-10 w-full flex items-center justify-center py-16">
          <div className="scroll-container w-full max-w-7xl">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="feature-card flex-shrink-0 w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy-900/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                    style={{
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-600/20 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-sm text-text-secondary">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};
