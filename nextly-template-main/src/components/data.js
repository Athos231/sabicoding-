import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Empower Your Tech Journey with Sabi Coding",
  desc: "At Sabi Coding, we are dedicated to accelerating your career in technology by providing comprehensive learning experiences tailored to your needs.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Diverse Course Offerings",
      desc: "  From Coding and Web Development to UI/UX Design, Data Analysis, and Cybersecurity, our curriculum is designed to equip you with in-demand skills.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Flexible Learning Options",
      desc: " We offer both in-person and virtual classes to accommodate your schedule and learning preferences.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Inclusive Programs for All Ages",
      desc: "Our coding classes cater to various age groups, including specialized programs for children aged 4 to 17, fostering early interest in technology. ",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Multi-Platform Learning Experience",
  desc: "At Sabi Coding, we ensure that everyone can access quality tech education—whether you have a smartphone or a basic phone. Our platform is built for a mobile-first experience, ensuring seamless learning on any device. For those with limited internet access or using feature phones, our USSD-based interface delivers course content efficiently and reliably. Moreover, our AI-powered learning system personalizes your educational journey, recommending courses, tracking progress, and adapting to your learning style.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile-First Experience",
      desc: "Enjoy a responsive, user-friendly interface optimized for smartphones and tablets.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "USSD-Based Learning",
      desc: "Access course materials through a simple, low-data USSD interface for basic phones.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "AI-Powered Learning",
      desc: "Benefit from personalized recommendations and adaptive learning paths tailored to your skill level. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
