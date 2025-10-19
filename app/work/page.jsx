"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "web-development",
    title: "E-commerce Platform",
    description : "A full-stack e-commerce platform built with modern technologies for seamless online shopping experience.",
    stack : [{name : "Next.js"}, {name : "Tailwind CSS"}, {name : "Node.js"}, {name : "MongoDB"}],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "web-development",
    title: "Portfolio Website",
    description : "A responsive portfolio website showcasing creative work and professional experience.",
    stack : [{name : "React"}, {name : "Tailwind CSS"}, {name : "Framer Motion"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "data-analysis",
    title: "Health Care Data Analysis Visualization",
    description : "The goal is to extract actionable insights into hospital operations, patient diagnosis trends, billing patterns, and staff feedback.",
    stack : [{name : "Power BI"}, {name : "Excel"}],
    image: "/assets/work/healthcaredataanalysis.png",
    live: "",
    github: "https://github.com/Shubham-Tambei9/HealthCare_DataAnalysis_Visualization",
  },
  {
    num: "04",
    category: "ui-ux",
    title: "Mobile App Design",
    description : "Complete UI/UX design for a fitness tracking mobile application with modern design principles.",
    stack : [{name : "Figma"}, {name : "Adobe XD"}, {name : "Prototyping"}],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "ml-dl",
    title: "Telecom Churn Prediction with R",
    description : "Customer churn significantly affects telecom companies' revenue. By identifying customers likely to leave, companies can take proactive measures to retain them.",
    stack : [{name : "R"}, {name : "randomForest"}, {name : "SMOTE"}, {name : "ggplot2"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Shubham-Tambei9/Teleco-Churn-Prediction",
  },
  {
    num: "06",
    category: "ui-ux",
    title: "Website Redesign",
    description : "Complete redesign of a corporate website focusing on user experience and modern aesthetics.",
    stack : [{name : "Figma"}, {name : "Adobe Creative Suite"}, {name : "User Research"}],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "ml-dl",
    title: "Image Classification Model",
    description : "Deep learning model for image classification using convolutional neural networks with high accuracy.",
    stack : [{name : "TensorFlow"}, {name : "Keras"}, {name : "Python"}, {name : "OpenCV"}],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "ml-dl",
    title: "Natural Language Processing",
    description : "Advanced NLP model for sentiment analysis and text classification using transformer architecture.",
    stack : [{name : "PyTorch"}, {name : "Transformers"}, {name : "BERT"}, {name : "Hugging Face"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "09",
    category: "ml-dl",
    title: "Recommendation System",
    description : "Machine learning-based recommendation system for personalized content and product suggestions.",
    stack : [{name : "Scikit-learn"}, {name : "Pandas"}, {name : "NumPy"}, {name : "Collaborative Filtering"}],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web-development", name: "Web Development" },
  { id: "data-analysis", name: "Data Analysis" },
  { id: "ui-ux", name: "UI/UX Design" },
  { id: "ml-dl", name: "ML & DL" },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [project, setProject] = useState(projects[0]);

  // Filter projects based on selected category
  const filterProjects = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
      setProject(projects[0]);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
      setProject(filtered[0] || projects[0]);
    }
  };

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(filteredProjects[currentIndex]);
  };

  return (
  <motion.section
  initial={{ opacity: 0}}
  animate={{ 
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}
  className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto">
      {/* Category Filter Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => filterProjects(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-accent text-primary"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-white/60">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
          </p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/* outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
              </div>
              {/* project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description*/}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma*/}
                    {index !== project.stack.length-1 && ","}
                  </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>

          </div>
          </div>
        <div className="w-full xl:w-[50%]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
          >
            {filteredProjects.map((project, index)=>{
              return (
              <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                {/* overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image 
                  src={project.image}
                  fill
                  className="object-cover"
                  alt=""
                  />
                </div>
                </div>
              </SwiperSlide>
              );
            })}
            {/* slider buttons */}
            <WorkSliderBtns containerStyles= "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnSyles= "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            />
          </Swiper>
        </div>
     </div>
    </div>
  </motion.section>
  );
};

export default Work;
