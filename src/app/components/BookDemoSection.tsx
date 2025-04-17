"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "./ui/sparkles";
import { cn } from "../lib/utils";
import { Calendar, Clock, CheckCircle2, ArrowRight, Shield, Star, ChevronLeft } from "lucide-react";
import { GridBackground } from "./ui/grid-background";

export function BookDemoSection() {
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    company: "",
    platforms: [] as string[],
    inquiries: "",
    jobTitle: "",
    goals: [] as string[],
    timeframe: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlatformToggle = (platform: string) => {
    setFormState(prev => {
      const platforms = [...prev.platforms];
      if (platforms.includes(platform)) {
        return {
          ...prev, 
          platforms: platforms.filter(p => p !== platform)
        };
      } else {
        return {
          ...prev,
          platforms: [...platforms, platform]
        };
      }
    });
  };
  
  const handleGoalToggle = (goal: string) => {
    setFormState(prev => {
      const goals = [...prev.goals];
      if (goals.includes(goal)) {
        return {
          ...prev, 
          goals: goals.filter(g => g !== goal)
        };
      } else {
        return {
          ...prev,
          goals: [...goals, goal]
        };
      }
    });
  };

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, this would send the data to your backend
    console.log("Form submitted:", formState);
    setSubmitted(true);
  };
  
  // Form validation
  const canProceedToStep2 = formState.name && formState.email && formState.company;
  
  // Timeframe options for scheduling
  const timeframes = [
    { id: 'asap', label: 'As soon as possible' },
    { id: 'this-week', label: 'This week' },
    { id: 'next-week', label: 'Next week' },
    { id: 'this-month', label: 'This month' }
  ];
  
  // Business goals options
  const businessGoals = [
    { id: 'increase-leads', label: 'Increase qualified leads' },
    { id: 'reduce-cost', label: 'Reduce support costs' },
    { id: 'improve-response', label: '24/7 customer availability' },
    { id: 'automation', label: 'Automate repetitive inquiries' },
    { id: 'data-insights', label: 'Better data & insights' }
  ];

  return (
    <div className="min-h-screen w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased" id="contact">
      <GridBackground opacity={0.3} strokeColor="rgb(255 255 255 / 0.1)" gridSize={30} />
      <div className="max-w-3xl mx-auto p-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold mb-2">
            Start Converting More Customers Today
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <p className="text-muted-foreground max-w-xl mx-auto my-2 text-sm md:text-base text-center relative z-10">
            Get a 15-minute personalized demo and see exactly how our AI Agents can work with your specific platforms and business needs
          </p>
        </motion.div>

        {!submitted ? (
          <div className="mt-8 relative z-10">
            {/* Progress indicator */}
            <div className="mb-8 flex justify-center">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}>1</div>
                <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-neutral-800'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}>2</div>
                <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-neutral-800'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}>3</div>
              </div>
            </div>
            
            {/* Multi-step form */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.form
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={handleNextStep}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Tell us about yourself</h3>
                    <p className="text-neutral-400 text-sm">We&apos;ll use this information to personalize your demo</p>
                  </div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-muted-foreground">
                        Full Name*
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Smith"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-muted-foreground">
                        Business Email*
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm text-muted-foreground">
                        Company Name*
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Company"
                        value={formState.company}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="jobTitle" className="text-sm text-muted-foreground">
                        Job Title
                      </label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        placeholder="Marketing Manager"
                        value={formState.jobTitle}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-8">
                    <Button
                      type="submit"
                      disabled={!canProceedToStep2}
                      className={`px-6 py-2 rounded-lg flex items-center space-x-2 ${canProceedToStep2 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-neutral-700 cursor-not-allowed'}`}
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.form>
              )}
              
              {currentStep === 2 && (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={handleNextStep}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Your Business Goals</h3>
                    <p className="text-neutral-400 text-sm">Help us understand what you&apos;re looking to achieve</p>
                  </div>
                
                  <div className="space-y-4">
                    <label className="text-sm text-muted-foreground">
                      What are your primary goals? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {businessGoals.map((goal) => (
                        <button
                          key={goal.id}
                          type="button"
                          className={cn(
                            "px-4 py-3 rounded-lg text-sm border text-left flex items-center",
                            formState.goals.includes(goal.id)
                              ? "bg-blue-500/20 border-blue-500/50 text-white"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                          )}
                          onClick={() => handleGoalToggle(goal.id)}
                        >
                          <CheckCircle2 className={`w-5 h-5 mr-2 ${formState.goals.includes(goal.id) ? 'text-blue-400' : 'text-neutral-600'}`} />
                          {goal.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm text-muted-foreground">
                      What&apos;s your preferred implementation timeframe?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeframes.map((timeframe) => (
                        <button
                          key={timeframe.id}
                          type="button"
                          className={cn(
                            "px-4 py-3 rounded-lg text-sm border text-center",
                            formState.timeframe === timeframe.id
                              ? "bg-blue-500/20 border-blue-500/50 text-white"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                          )}
                          onClick={() => setFormState(prev => ({...prev, timeframe: timeframe.id}))}
                        >
                          {timeframe.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center"
                      onClick={handlePrevStep}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.form>
              )}
              
              {currentStep === 3 && (
                <motion.form
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Almost Done!</h3>
                    <p className="text-neutral-400 text-sm">Tell us about your current platforms and inquiry volume</p>
                  </div>
                
                  <div className="space-y-3">
                    <label className="text-sm text-muted-foreground">
                      Which social media platforms do you use for customer engagement?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Facebook", "Instagram", "LinkedIn", "Twitter", "WhatsApp"].map((platform) => (
                        <button
                          key={platform}
                          type="button"
                          className={cn(
                            "px-3 py-2 rounded-full text-sm border",
                            formState.platforms.includes(platform)
                              ? "bg-blue-500/20 border-blue-500/50 text-white"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                          )}
                          onClick={() => handlePlatformToggle(platform)}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiries" className="text-sm text-muted-foreground">
                      Approximately how many customer inquiries do you handle monthly?
                    </label>
                    <select
                      id="inquiries"
                      name="inquiries"
                      value={formState.inquiries}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      <option value="">Select a range</option>
                      <option value="1-50">1-50 inquiries/month</option>
                      <option value="51-200">51-200 inquiries/month</option>
                      <option value="201-500">201-500 inquiries/month</option>
                      <option value="501-1000">501-1000 inquiries/month</option>
                      <option value="1000+">1000+ inquiries/month</option>
                    </select>
                  </div>
                  
                  <div className="space-y-4 bg-gradient-to-br from-blue-950/30 to-purple-950/30 p-6 rounded-lg border border-blue-800/20">
                    <h3 className="text-white text-base font-medium flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      What you&apos;ll get from your personalized demo:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Calendar className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">15-minute personalized walkthrough matched to your specific business needs</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">See exactly how our AI would handle your specific customer scenarios</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">Custom pricing proposal based on your volume and integration needs</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">No obligation or pressure - just a helpful consultation to explore if we&apos;re a good fit</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center"
                      onClick={handlePrevStep}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <Sparkles className="absolute inset-0" />
                      <span className="relative z-10">Book Your Demo Now</span>
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Fantastic! You&apos;re All Set</h3>
            <p className="text-muted-foreground mb-4 max-w-md mx-auto">
              We&apos;ve received your request and will contact you within one business day to schedule your personalized demo.
            </p>
            <div className="p-5 bg-white/5 rounded-lg border border-white/10 text-sm text-neutral-300 text-left mt-6">
              <p className="mb-3 font-medium text-white">Next steps:</p>
              <ol className="space-y-2">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 mr-2 flex-shrink-0 text-xs">1</span>
                  <span>Check your email ({formState.email}) for a confirmation message</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 mr-2 flex-shrink-0 text-xs">2</span>
                  <span>Our team will review your information and prepare a customized demo for {formState.company}</span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 mr-2 flex-shrink-0 text-xs">3</span>
                  <span>You&apos;ll receive a calendar invite with Zoom meeting details</span>
                </li>
              </ol>
            </div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href="#benefits"
                className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Explore More Features While You Wait
              </a>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          {!submitted && (
            <div className="flex justify-center space-x-8">
              <div className="flex items-center text-sm text-neutral-400">
                <Shield className="w-4 h-4 mr-2 text-neutral-500" /> 
                100% Secure &amp; Confidential
              </div>
              <div className="flex items-center text-sm text-neutral-400">
                <Clock className="w-4 h-4 mr-2 text-neutral-500" /> 
                15-Minute Demo
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> and <a href="#" className="underline hover:text-primary">Terms of Service</a>.
          </p>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
} 