import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Practice coding makes you better.
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Sabi Coding is an African massive open online learning and teaching marketplace provider aimed to empower over 100,000 adults and students in Africa by 2050 by providing free and paid tech & leadership courses.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Get started free
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">100+</span>{" "}
            students
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <FeedakidFoundation />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <ALU />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Alx />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function FeedakidFoundation() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="80" fill="none" viewBox="0 0 350 80">
      <g fill="currentColor" clipPath="url(#clip0)">
        <rect x="0" y="0" width="350" height="80" rx="20" fill="#6366F1" />
        <text x="50%" y="50%" font-family="Arial" font-size="20" text-anchor="middle" fill="white" alignment-baseline="middle">
          Feedakid Foundation
        </text>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H350V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Alx() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="80" fill="none" viewBox="0 0 350 80">
      <g fill="currentColor" clipPath="url(#clip0)">
        <rect x="0" y="0" width="350" height="80" rx="20" fill="#6366F1" />
        <text x="50%" y="50%" font-family="Arial" font-size="20" text-anchor="middle" fill="white" alignment-baseline="middle">
          African Leadership Experience 
        </text>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H350V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function ALU() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="80" fill="none" viewBox="0 0 350 80">
      <g fill="currentColor" clipPath="url(#clip0)">
        <rect x="0" y="0" width="350" height="80" rx="20" fill="#6366F1" />
        <text x="50%" y="50%" font-family="Arial" font-size="20" text-anchor="middle" fill="white" alignment-baseline="middle">
          African Leadership University
        </text>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H350V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
