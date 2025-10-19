"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { FaCode, FaPalette, FaDatabase, FaChartLine } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I create responsive, modern, and scalable websites with clean code and optimized performance.",
    href: "/",
    icon: MdWeb
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "I design intuitive, user-friendly interfaces that combine creativity with seamless user experience.",
    href: "/",
    icon: FaPalette
  },
  {
    num: "03",
    title: "Programming",
    description: "I write efficient, reliable code and build solutions that solve real-world problems across different domains.",
    href: "/",
    icon: FaCode
  },
  {
    num: "04",
    title: "Data Analysis",
    description: "I analyze complex datasets to uncover insights, build visualizations, and support data-driven decisions.",
    href: "/",
    icon: FaChartLine
  },
];

import { motion } from "framer-motion";


const Services = () => {
  return (
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div
      initial= {{opacity: 0}}
      animate={{
        opacity: 1,
        transition : {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index)=>{
          return (
          <div 
          key={index} 
          className="flex-1 flex flex-col justify-center gap-6 group"
          >
            {/* top */}
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                                 <div className="w-16 h-16 rounded-full bg-transparent flex justify-center items-center group-hover:bg-accent transition-all duration-500">
                   <service.icon className="text-white text-2xl group-hover:text-primary" />
                 </div>
              </div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            {/* title */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
              {service.title}
            </h2>
            {/* description */}
            <p className="text-white/60">{service.description}</p>
            {/* border */}
            <div className="border-b border-white/20 w-full"></div>
          </div>
          );
        })}
      </motion.div>
    </div>
  </section>
  );
  
};

export default Services;
