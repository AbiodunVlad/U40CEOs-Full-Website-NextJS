import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const faq = [
  {
    question: "What is Under 40 CEOs Membership all about?",
    answer:
      "Under 40 CEOs Membership is a platform designed to empower aspiring and established young business leaders with resources, networks, and knowledge to grow and scale their ventures successfully.",
  },
  {
    question: "Who can join Under 40 CEOs?",
    answer:
      "Our membership is open to students, young professionals, aspiring entrepreneurs, and established business leaders under 40 years old who are looking to gain valuable insights, build meaningful connections, and access exclusive opportunities.",
  },
  {
    question: "What are the membership tiers available?",
    answer:
      "We offer four membership tiers: -Student Tier: Ideal for young aspiring entrepreneurs currently in school. -Bronze Tier: For early-stage entrepreneurs or professionals starting their business journey. -Gold Tier: Designed for growing businesses and professionals ready to scale. -Platinum Tier: Tailored for high-achieving entrepreneurs seeking exclusive mentorship, premium resources, and global exposure.",
  },
  {
    question: "How do I choose the right membership tier for me?",
    answer:
      "Consider your current stage of business growth and the resources you need. Our Student and Bronze tiers are great for beginners, while Gold and Platinum offer more advanced resources for scaling and sustaining a business.",
  },
  {
    question: "What benefits do members receive at each tier?",
    answer:
      "Student Tier: Access to learning resources, virtual events, and a community of like-minded peers. -Bronze Tier: Entry to select events, basic mentorship opportunities, and foundational business resources. -Gold Tier: Networking events, advanced training programs, and priority access to mentors. -Platinum Tier: Full access to all events, premium mentorship, personalized consultancy, and priority features in our media publications.",
  },
  {
    question: "Can I switch between tiers?",
    answer:
      "Yes, you can upgrade or downgrade your membership at any time. Reach out to our support team to guide you through the process.",
  },
  {
    question: "Are there any exclusive perks for Platinum members?",
    answer:
      "Yes, Platinum members enjoy: -Priority access to events and resources. -Exclusive mentorship with top CEOs. -Personalized consultancy services. -Recognition and visibility through Under 40 CEOs platforms.",
  },
  {
    question: "How do I apply for membership?",
    answer:
      "Applying is simple: Visit our membership page on www.under40ceos.com. -Choose the tier that fits your needs. -Complete the registration form and payment process. -Once registered, you’ll receive a welcome email with details about your membership.",
  },
  {
    question: "Is there a refund policy for membership fees?",
    answer:
      "Unfortunately, membership fees are non-refundable. However, we ensure that you receive tremendous value throughout your membership period.",
  },
  {
    question: "What kind of networking opportunities are available?",
    answer:
      "As a member, you’ll have access to:\n\n- Networking events like Under 40 CEOs Live and our annual summits.\n- Online and offline community-building activities.\n- Exclusive access to our member directory to connect with like-minded individuals.",
  },
  {
    question: "Does Under 40 CEOs provide mentorship programs?",
    answer:
      "Yes, mentorship is a core part of our membership. Depending on your tier, you can access group mentorship sessions, one-on-one coaching, or priority mentorship from top CEOs.",
  },
  {
    question: "Will I have access to online resources?",
    answer:
      "Absolutely! Members enjoy access to curated business resources, including articles, eBooks, webinars, and masterclasses on key entrepreneurial topics.",
  },
  {
    question: "Are events included in my membership fee?",
    answer:
      "Most events are included in your membership. However, some premium events may require a discounted additional fee for certain membership tiers. Platinum members enjoy free access to all events.",
  },
  {
    question:
      "What makes Under 40 CEOs different from other business networks?",
    answer:
      "We focus exclusively on young leaders under 40, offering tailored resources, actionable insights, and a supportive community of like-minded individuals. Our network spans across Africa and the globe, providing unparalleled access to mentorship, learning, and collaboration.",
  },
  {
    question: "Can I collaborate with other members?",
    answer:
      "Yes! Collaboration is at the heart of our community. You can connect with other members through events, our online directory, and discussion forums to explore partnership opportunities.",
  },
  {
    question: "How long does my membership last?",
    answer:
      "Membership is valid for one year and can be renewed annually. We’ll send you reminders when it’s time to renew.",
  },
  {
    question: "Can companies enroll their employees for membership?",
    answer:
      "Yes, we offer corporate membership packages tailored for organizations looking to empower their young leaders. Contact us for more details on corporate plans.",
  },
  {
    question: "Is there an age limit for membership?",
    answer:
      "Under 40 CEOs Membership is designed for individuals under 40 years of age. However, we have programs and initiatives that extend beyond this age group. Contact us for tailored opportunities.",
  },
  {
    question:
      "What happens if I have technical issues during the registration process?",
    answer:
      "Our support team is here to help. Reach out to us via email or phone, and we’ll assist you promptly.",
  },
  {
    question: "How does membership help my business grow?",
    answer:
      "By joining Under 40 CEOs, you gain:\n\n- Access to valuable resources and insights from successful entrepreneurs.\n- Networking opportunities to connect with potential partners, investors, and clients.\n- Mentorship to guide you through challenges and unlock opportunities.",
  },
  {
    question: "Are there success stories from members?",
    answer:
      "Yes, many of our members have shared inspiring success stories about how Under 40 CEOs helped them scale their businesses, build networks, and achieve their goals. Explore testimonials on our website for inspiration!",
  },
  {
    question: "Is Under 40 CEOs limited to specific industries?",
    answer:
      "No, Under 40 CEOs is open to young leaders from all industries. Our diverse community includes professionals from various sectors, fostering cross-industry collaboration and learning.",
  },
  {
    question: "How can I maximize the benefits of my membership?",
    answer:
      "To fully leverage your membership:\n\n- Engage Actively: Participate in events, workshops, and discussions.\n- Network: Connect with fellow members to share experiences and opportunities.\n- Utilize Resources: Take advantage of the learning materials and mentorship programs available.",
  },
  {
    question: "Are there opportunities for international exposure?",
    answer:
      "Yes, Under 40 CEOs has a global reach, providing members with opportunities for international networking, exposure, and collaborations.",
  },
  {
    question: "How does Under 40 CEOs support startups?",
    answer:
      "We offer tailored resources for startups, including mentorship, access to investors, strategic training, and business reviews to help early-stage ventures grow and succeed.",
  },
  {
    question: "Can I volunteer or contribute to Under 40 CEOs initiatives?",
    answer:
      "Absolutely! We encourage members to get involved by volunteering, contributing to our blog, or participating in community events. Contact us to explore available opportunities.",
  },
  {
    question:
      "How does Under 40 CEOs ensure the quality of its mentorship programs?",
    answer:
      "Our mentors are experienced business leaders who undergo a thorough selection process to ensure they provide valuable guidance and support to our members.",
  },
  {
    question: "Are there any success metrics for Under 40 CEOs members?",
    answer:
      "Many of our members have achieved significant milestones, including business growth, successful funding rounds, and industry recognition, attributing part of their success to the resources and network provided by Under 40 CEOs.",
  },
  {
    question:
      "How does Under 40 CEOs stay relevant to current business trends?",
    answer:
      "We continuously update our resources, events, and programs to reflect the latest trends and best practices in the business world, ensuring our members receive up-to-date and actionable insights.",
  },
  {
    question: "Is there an online community platform for members?",
    answer:
      "Yes, members have access to our online platform where they can connect, share resources, and engage in discussions with fellow young business leaders.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-slate-100">
      <div className="flex flex-col  items-center py-5 mt-10 xl:mt-20 relative max-w-screen-2xl mx-auto w-4/5 ">
        <h1 className="text-black text-3xl lg:text-4xl text-center font-extrabold uppercase mb-10">
          Frequently <span className="text-purple-300">Asked</span> Questions
        </h1>

        <div className="flex flex-col justify-between w-full mb-5">
          <Accordion allowToggle>
            {faq.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="medium"
                    >
                      {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} whiteSpace="pre-line">
                  {item.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-pink-50 py-2 px-4 text-black font-bold">
          Have questions? Reach out via email at{" "}
          <a
            href="mailto:member@under40ceos.com"
            className="text-purple-600 underline"
          >
            member@under40ceos.com
          </a>{" "}
          or call us on{" "}
          <a href="tel:080012345678" className="text-purple-600 underline">
            0800 1234 5678
          </a>
          .
        </div>
      </div>
    </div>
  );
}
