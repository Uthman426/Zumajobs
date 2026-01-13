"use client";

import { Check, X, Star } from "lucide-react";
import Threepics from "@/components/Threehomepics";

const plans = [
  {
    name: "BASIC",
    price: 15,
    description:
      "Perfect for startups or small businesses just getting started with hiring. Post up to 20 jobs and get visibility on major job boards.",
    features: [
      { label: "20 job postings", included: true },
      { label: "Boost on job search engine", included: true },
      { label: "Resume database", included: false },
      { label: "Access to employers", included: false },
    ],
    highlighted: false,
  },
  {
    name: "STANDARD",
    price: 29,
    description:
      "Ideal for growing companies. Enjoy extended reach with search engine boosts and access to a pool of resumes for smarter hiring decisions.",
    features: [
      { label: "20 job postings", included: true },
      { label: "Boost on job search engine", included: true },
      { label: "Resume database", included: true },
      { label: "Access to employers", included: false },
    ],
    highlighted: true,
  },
  {
    name: "PREMIUM",
    price: 35,
    description:
      "Designed for established businesses that want full access. Post unlimited jobs, access resumes, connect directly with top candidates, and enjoy premium visibility.",
    features: [
      { label: "20 job postings", included: true },
      { label: "Boost on job search engine", included: true },
      { label: "Resume database", included: true },
      { label: "Access to employers", included: true },
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
        <div className="mx-auto item-center justify-center w-[40%] mt-10 mb-10">
        <h1 className=" text-4xl pl-5 leading-normal font-thin pl-38 ">Job postings</h1>
        <div className="bg-teal-700 w-32  h-0.5 mx-auto"></div>
      </div>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border rounded-lg p-8 flex flex-col ${
              plan.highlighted
                ? "border-teal-700 shadow-xl"
                : "border-gray-200"
            }`}
          >
            {/* Ribbon */}
            {plan.highlighted && (
              <div className="absolute top-0 left-0">
                <div className="w-0 h-0 border-t-[70px] border-r-[70px] border-t-teal-700 border-r-transparent relative">
                  <Star className="absolute top-3 left-3 text-white w-5 h-5" />
                </div>
              </div>
            )}

            {/* Title */}
            <h2 className="text-xl font-semibold text-center mb-4">
              {plan.name}
            </h2>

            {/* Price */}
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-500"> / month</span>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {plan.description}
            </p>

            <hr className="mb-6" />

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="text-teal-700 w-5 h-5" />
                  ) : (
                    <X className="text-gray-400 w-5 h-5" />
                  )}
                  <span
                    className={
                      feature.included
                        ? "text-gray-800"
                        : "text-gray-400"
                    }
                  >
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-auto bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-md font-medium transition">
              Buy now
            </button>

            {/* Footer text */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Flat 15% OFF | Buy 5 Job postings or more
            </p>
          </div>
        ))}
      </div>
      <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6">
        Your Dream Jobs Are Waiting
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-4 max-w-4xl">
        Discover thousands of job opportunities across various industries tailored
        to match your skills and interests. Whether you're a recent graduate or a
        seasoned professional, we connect you with companies that value your
        potential and ambition.
      </p>

      <p className="text-gray-600 leading-relaxed mb-10 max-w-4xl">
        Our platform simplifies your job search by bringing trusted employers to
        your fingertips. Stay ahead of the curve with real-time notifications,
        resume tips, and interview preparation resources — all designed to help
        you land your next great opportunity.
      </p>

      {/* Subheading */}
      <h3 className="text-xl font-semibold mb-6">
        The following details the responsibilities a user may have at each phase
        of a project.
      </h3>

      {/* Bullet List */}
      <div className="grid gap-6 md:grid-cols-3">
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Research and identify suitable job opportunities.</li>
          <li>Engage with recruiters and company representatives.</li>
          <li>Maintain communication with hiring managers.</li>
          <li>Manage your preferences and privacy settings.</li>
        </ul>

        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Customize and update your professional profile.</li>
          <li>Improve your resume with AI-driven insights.</li>
          <li>Follow up on applications and provide feedback.</li>
          <li>Build a strong professional network.</li>
        </ul>

        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Track job applications and interview schedules.</li>
          <li>Stay informed on industry trends and hiring news.</li>
          <li>Attend webinars and virtual career fairs.</li>
          <li>Evaluate offers and make informed decisions.</li>
        </ul>
      </div>
    </section>
    <div className="mx-auto item-center justify-center w-[40%] mt-10 mb-10">
        <h1 className=" text-4xl pl-5 leading-normal font-thin pl-38 ">Latest News</h1>
        <div className="bg-teal-700 w-32  h-0.5 mx-auto"></div>
      </div>
    < Threepics/>
    </div>
  );
}
