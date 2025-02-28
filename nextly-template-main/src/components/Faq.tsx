"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Who can enroll in Sabi Coding courses?",
    answer: "Our courses are designed for everyone, from young children to adults, including those who have left school early. We believe in providing inclusive learning opportunities for all.",
  },
  {
    question: "What courses do you offer?",
    answer: "Sabi Coding we offer a variety of courses tailored to different skill levels and interests: Coding Classes: 1. Learn web development, app development, game development, and blockchain development from scratch 2. UI/UX Design: Courses focused on designing user-centered digital products. 3. Data Analysis: Training to turn data into actionable insights. 4. Cybersecurity & Ethical Hacking: For those aspiring to become cybersecurity professionals. 5. Digital Marketing: Learn to create and execute effective marketing campaigns. 6. Website Design: Courses on creating beautiful, functional websites. 7. Kids Coding: Introducing children to tech skills and helping them develop necessary abilities. 8. Computer Basic Training: Learn to confidently use computers for personal and professional purposes. 9. Coding Bootcamp: Intensive training in full-stack web development, specializing in Node.js or .NET. 10. Online Coding Bootcamp: For students interested in web development who cannot attend our on-campus programs. 11. Kids Coding Classes: Designed to teach kids as young as 6 how to create apps, games, and more while boosting their creativity and problem-solving skills. 12. Tech Training: Courses focusing on programming methodology and paradigm, building language-agnostic engineers.",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "Sabi Coding is committed to providing quality education and support to all our students. We understand that circumstances may change, and you might need to adjust your learning plan. Our refund policy is designed to be fair and accommodating: Refund Policy: Eligibility: Refunds are available within 7 days of your initial payment. Conditions: To qualify for a refund, you must not have accessed more than 7% of the course content. Process: To request a refund, please contact our support team at support@sabicoding.com within the 7-day window."},
];
