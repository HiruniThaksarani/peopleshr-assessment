"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckSmallIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import {
  DEMO_BENEFITS,
  DIRECT_CONTACT_ITEMS,
  TRUST_BADGES,
} from "@/constants/contactPage";
import { MotionDiv } from "@/components/framer-motion";

interface SimpleFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
}

interface SimpleFormErrors {
  fullName?: string;
  email?: string;
  companyName?: string;
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState<SimpleFormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState<SimpleFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const validate = (): boolean => {
    const newErrors: SimpleFormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief responsive submission
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setSubmittedName(formData.fullName);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
    });
    setErrors({});
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "phone":
        return <PhoneIcon className="w-4 h-4" />;
      case "mail":
        return <MailIcon className="w-4 h-4" />;
      case "mapPin":
        return <MapPinIcon className="w-4 h-4" />;
      case "clock":
        return <ClockIcon className="w-4 h-4" />;
      default:
        return <PhoneIcon className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ================= LEFT COLUMN: Direct Contact Information ================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <MotionDiv delay={0.1} duration={0.6} yOffset={20}>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Direct Inquiries
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Your HR Transformation Starts With A Simple Conversation
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you need a quick product walkthrough, have questions on statutory payroll, or want to explore tailored packages for your organization, we are here to help.
              </p>

              {/* 4 Separate Professional Contact Cards */}
              <div className="mt-5 flex flex-col gap-2.5">
                {DIRECT_CONTACT_ITEMS.map((item, idx) => {
                  const isLink = Boolean(item.actionUrl);
                  const isExternal = item.actionUrl.startsWith("http");
                  const Comp = isLink ? "a" : "div";

                  return (
                    <Comp
                      key={idx}
                      href={isLink ? item.actionUrl : undefined}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="p-3.5 sm:py-3.5 sm:px-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-primary/60 hover:shadow-sm hover:bg-blue-50/15 transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-2xs">
                          {renderIcon(item.iconName)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-500 leading-tight">
                            {item.title}
                          </p>
                          <p className="text-xs sm:text-[13.5px] font-medium text-slate-900 group-hover:text-primary transition-colors truncate mt-0.5">
                            {item.value}
                          </p>
                        </div>
                      </div>

                      <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </div>
                    </Comp>
                  );
                })}
              </div>

              {/* Soft Blue Key Highlights Box */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#f0f6fe] via-[#f4f8fe] to-[#edf4fd] p-5 sm:p-6 border border-[#e1eefd]">
                <h3 className="text-sm font-bold text-[#071f68] uppercase tracking-wider mb-3">
                  What You Can Expect
                </h3>
                <div className="space-y-2.5">
                  {DEMO_BENEFITS.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckSmallIcon className="w-3 h-3 stroke-[2.75]" />
                      </span>
                      <span className="text-xs text-slate-700 leading-relaxed font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </MotionDiv>
          </div>

          {/* ================= RIGHT COLUMN: Simple & Clean Contact Form ================= */}
          <div className="lg:col-span-7">
            <MotionDiv delay={0.2} duration={0.6} yOffset={25}>
              <div className="bg-white border border-slate-200/90 p-6 sm:p-9 md:p-10 rounded-3xl shadow-[0_20px_50px_-15px_rgba(13,91,189,0.08)]">
                
                {submitted ? (
                  /* Clean Success State */
                  <div className="py-10 sm:py-14 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 shadow-xs">
                      <CheckCircle2Icon className="w-9 h-9" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      Thank You, {submittedName}!
                    </h3>

                    <p className="text-slate-600 mt-2 max-w-sm text-sm leading-relaxed">
                      We have received your message. A PeoplesHR specialist will contact you within 24 hours to confirm your goals and schedule a product walkthrough. No payment is required at this step.
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <Button onClick={handleReset} variant="outline" size="sm">
                        Send Another Message
                      </Button>
                      <Button asChild size="sm">
                        <a href="tel:+18005550199">
                          <PhoneIcon className="w-3.5 h-3.5 text-white" />
                          <span>Call Direct</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Simple Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                        Send Us a Message
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Share your details to request a demo. After you submit, we confirm your request and follow up within one business day.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-red-400 ring-red-100 bg-red-50/20"
                            : "border-slate-200 focus:border-primary focus:ring-primary/10 bg-slate-50/50 focus:bg-white"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                        >
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="s.jenkins@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? "border-red-400 ring-red-100 bg-red-50/20"
                              : "border-slate-200 focus:border-primary focus:ring-primary/10 bg-slate-50/50 focus:bg-white"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 234-5678"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-primary/10 bg-slate-50/50 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                      >
                        Company Name *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="Acme Corporation"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.companyName
                            ? "border-red-400 ring-red-100 bg-red-50/20"
                            : "border-slate-200 focus:border-primary focus:ring-primary/10 bg-slate-50/50 focus:bg-white"
                        }`}
                      />
                      {errors.companyName && (
                        <p className="mt-1 text-xs text-red-500 font-medium">
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1"
                      >
                        Message / Requirements
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us what you're looking for (demo walkthrough, automated payroll, multi-branch attendance, general inquiry)..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto shadow-md shadow-primary/20 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span>Send Message</span>
                            <ArrowRightIcon className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </Button>

                      <p className="text-[11px] text-slate-400">
                        We respect your privacy. No spam.
                      </p>
                    </div>
                  </form>
                )}

              </div>
            </MotionDiv>
          </div>

        </div>
      </div>
    </section>
  );
}
