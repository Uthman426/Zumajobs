"use client"
import { useState } from "react"
import react from "react"
import { ChevronDown,X } from "lucide-react"

const Faq = ()=>{
     const faqData = {
  basics: [
    {
      question: "How do I change my password?",
      answer:
        "To change your password, go to your account settings, click on 'Security', and follow the prompts to create a new password.",
    },
    {
      question: "How do I sign up?",
      answer: "Click the Sign Up button and follow the registration steps.",
    },
    {
      question: "Can I remove a post?",
      answer: "Yes, you can remove your post from your dashboard.",
    },
    {
      question: "How do reviews work?",
      answer: "Reviews are submitted by verified users after interactions.",
    },
  ],
  account: [
    {
      question: "How do I change my password?",
      answer:
        "In the Account Settings, go to the 'Change Password' section, enter your current password and your new one to update it.",
    },
    {
      question: "How do I change my account settings?",
      answer: "Navigate to Account Settings to update your profile details.",
    },
    {
      question: "How do I delete my account?",
      answer: "You can delete your account from the Account Settings page.",
    },
    {
      question: "I forgot my password. How do I reset it?",
      answer: "Click 'Forgot Password' on the login page and follow the steps.",
    },
    {
      question: "How do I renew my account?",
      answer: "Account renewals can be managed from your billing settings.",
    },
  ],
  jobs:[
    {question:"How can I apply for a job?",
     answer:  "To apply for a job, click on the job listing, review the requirements, and click 'Apply Now'. Fill in your details and submit." 
    },
    {question:"How many jobs can I apply for in a month?",
     answer: "There is no limit on the number of job applications you can submit. However, we recommend applying to roles that match your skills."  
    },
    {question:"Can I contact the company directly?",
     answer: "Yes, if the employer has made their contact information public, you'll see it on the job listing or company profile page."  
    },
    {question:"Can I apply for jobs in multinational companies?",
     answer:"Absolutely. Our platform lists jobs from both local and multinational companies. Use the filters to narrow down your search."   
    }
  ]


}
const [openIndex,setOpenIndex] = useState(null)
const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



    return(
      
  
    <section className="max-w-[75%] mx-auto px-6 py-16 grid grid-cols-2 gap-5 ">
      

      {/* BASICS */}
      <div>
      <h3 className="text-sm font-semibold text-gray-400 mb-4">BASICS</h3>
      <div className="space-y-4 mb-10">
        {faqData.basics.map((faq, index) => {
          const id = `basics-${index}`;

          return (
            <div key={id} className="border border-gray-100 shadow-lg rounded-xl bg-white">
              <button
                onClick={() => handleToggle(id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-700"
              >
                {faq.question}

                {openIndex === id ? (
                  <X className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === id && (
                <div className="px-6 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>

      {/* ACCOUNT */}
      <div>
      <h3 className="text-sm font-semibold text-gray-400 mb-4">ACCOUNT</h3>
      <div className="space-y-4 mb-10">
        {faqData.account.map((faq, index) => {
          const id = `account-${index}`;

          return (
            <div key={id} className="border border-gray-100 shadow-lg rounded-xl bg-white">
              <button
                onClick={() => handleToggle(id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-700"
              >
                {faq.question}

                {openIndex === id ? (
                  <X className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === id && (
                <div className="px-6 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>

      {/* JOBS */}
      <div>
      <h3 className="text-sm font-semibold text-gray-400 mb-4">JOBS</h3>
      <div className="space-y-4">
        {faqData.jobs.map((faq, index) => {
          const id = `jobs-${index}`;

          return (
            <div key={id} className="border border-gray-100 shadow-lg rounded-xl bg-white">
              <button
                onClick={() => handleToggle(id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-700"
              >
                {faq.question}

                {openIndex === id ? (
                  <X className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openIndex === id && (
                <div className="px-6 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
    )
}
export default Faq