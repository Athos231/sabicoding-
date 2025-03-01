import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

// import userOneImg from "../../public/img/user11.jpg";
// import userTwoImg from "../../public/img/user22.jpg";
// import userThreeImg from "../../public/img/user33.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Starting with no prior knowledge, the mobile-first experience allowed me to learn on the go. Today, <Mark>I'm employed today</Mark>, thanks to Sabi Coding&apos;s comprehensive training.
            </p>

            {/* <Avatar
              image={userOneImg}
              name="Peter George"
              title="Sierra Leone "
            /> */}
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The structured curriculum and local mentorship at Sabi Coding transformed my understanding of Python. Within three months, I secured a job as a <Mark>junior developer</Mark>, and I owe it to the practical skills I gained.
            </p>

            {/* <Avatar
              image={userTwoImg}
              name="Sinneh Michael Kargbo"
              title="Kenya"
            /> */}
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The inclusive learning environment at Sabi Coding made complex concepts accessible. The AI-powered learning system personalized my journey, and now, <Mark>I'm confidently applying my skills</Mark> in a real-world setting.
            </p>
{/* 
            <Avatar
              image={userThreeImg}
              name="Blaise"
              title="Rwanda"
            /> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
