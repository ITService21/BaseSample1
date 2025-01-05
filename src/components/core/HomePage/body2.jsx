import React, { useRef } from "react";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

const PerfectPlatform = () => {
  const animationRef5 = useScrollAnimation("animate-flipInX");
  const animationRef6 = useScrollAnimation("animate-flipInX");
  const animationRef7 = useScrollAnimation("animate-flipInX");
  const animationRef8 = useScrollAnimation("animate-flipInX");
  const animationRef9 = useScrollAnimation("animate-flipInX");

  return (
    <section className="py-16  bg-gray-25 ">
      <h2 className="text-4xl font-bold text-center mb-8">
        The perfect platform to excel in your
        <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
          {" "}
          academic journey{" "}
        </span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* <ScrollAnimation animateIn="flipInX"> */}
        <div
          ref={animationRef5}
          className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm"
        >
          <img
            className="mx-auto mb-4"
            src="https://blob.sololearn.com/assets/home-perfect-platform-1-rebranding.svg"
            alt="sl-home-perfect-img"
            loading="lazy"
          />
          <div className="text-xl font-semibold mb-2">Students</div>
          <span className="text-gray-600 mb-4 block">
            Preparing for board exams, competitive tests, or your first big
            interview? Leverage our expert guidance and practical strategies to
            master your subjects and achieve your goals with confidence.
          </span>
          <a
            type="button"
            className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
            href="/signup"
          >
            Learn for free
          </a>
        </div>
        {/* </ScrollAnimation> */}
        <div
          ref={animationRef6}
          className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm"
        >
          <img
            className="mx-auto mb-4"
            src="https://assets.sololearn.com/home-perfect-platform-2.svg"
            alt="sl-home-perfect-img"
            loading="lazy"
          />
          <div className="text-xl font-semibold mb-2">Professionals</div>
          <span className="text-gray-600 mb-4 block">
            You can explore something entirely new to boost your academic
            performance or career prospects. Whether you're building
            foundational skills or enhancing existing knowledge, our coaching
            institute offers a variety of courses, from competitive exam
            preparation to advanced technical training.
          </span>
          <a
            type="button"
            className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
            href="/signup"
          >
            Boost your career
          </a>
        </div>
      </div>

      <div className="text-center mb-8 mt-[90px]">
        <h2 className="font-black text-black text-4xl text-heading uppercase">
          Why{" "}
          <span className="bg-gradient-to-b from-[#864135] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            Join Us{" "}
          </span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div
          ref={animationRef7}
          className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs"
        >
          <div className="mb-4">
            <img
              className="mx-auto"
              src="https://assets.sololearn.com/home-why-code-1.svg"
              alt="why-code-icon"
              loading="lazy"
            />
          </div>
          <div className="text-xl font-semibold mb-2">It's popular</div>
          <div className="text-gray-600">
            <strong>Technical skills are in high demand.</strong> Over 60% of
            future careers will require strong technical expertise. Start
            building your skillset with our expert-led courses today!
          </div>
        </div>
        <div
          ref={animationRef8}
          className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs"
        >
          <div className="mb-4">
            <img
              className="mx-auto"
              src="https://assets.sololearn.com/home-why-code-2.svg"
              alt="why-code-icon"
              loading="lazy"
            />
          </div>
          <div className="text-xl font-semibold mb-2">It's promising</div>
          <div className="text-gray-600">
            Unlock your career potential! Graduates from our coaching programs
            are equipped with the skills that employers demand. Entry-level
            professionals in the field can earn an{" "}
            <strong>average salary of over $78,000</strong> annually.
          </div>
        </div>
        <div
          ref={animationRef9}
          className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs"
        >
          <div className="mb-4">
            <img
              className="mx-auto"
              src="https://assets.sololearn.com/home-why-code-3.svg"
              alt="why-code-icon"
              loading="lazy"
            />
          </div>
          <div className="text-xl font-semibold mb-2">It's fun</div>
          <div className="text-gray-600">
            Imagine combining your passion, skill, and knowledge with
            creativity, and{" "}
            <strong>building a successful future every day!</strong>
            Our programs empower you to unlock your potential and achieve your
            goals.
          </div>
        </div>
      </div>
      <div className="text-center mt-8 mb-12">
        <a
          type="button"
          className="text-center text-[13px] sm:text-[16px] px-6 py-4 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-blue-500 text-white"
          href="/signup"
        >
          I want to learn
        </a>
      </div>

      {/* Slanted Line */}
      <div className="relative w-full h-0 border-t-[110px] border-transparent border-r-[160vw] border-r-gray-25 transform rotate-2 -mt-10 -ml-40 -mb-24"></div>
    </section>
  );
};

export default PerfectPlatform;
