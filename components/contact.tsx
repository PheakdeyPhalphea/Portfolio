"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./section-heading";

import { useI18nContext } from "@/context/i18n-context";
import { useTheme } from "@/context/theme-context";
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
export default function Contact() {
  const { language, t } = useI18nContext();
  const { theme } = useTheme();
  const { ref } = useSectionInView(
    language === "en" ? "Contact" : "Contacto",
    
  );


  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className=" sm:mb-28 w-[min(100%,42rem)] text-center scroll-mt-28"
    >
      <SectionHeading>{t("contact.title")}</SectionHeading>
      <p className="text-gray-700 mt-3 dark:text-white/80">
        {t("contact.message")}
      </p>
      <div className="flex items-center justify-center mt-[40px]  space-x-6">
        <a
          href="https://www.linkedin.com/in/phalphea-pheakdey/"
          target="_blank"
          aria-label="LinkedIn"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 backdrop-blur-[0.5rem]"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/PheakdeyPhalphea"
          target="_blank"
          aria-label="GitHub"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 backdrop-blur-[0.5rem]"
        >
          <BsGithub />
        </a>
        <a
          href="https://github.com/PheakdeyPhalphea"
          target="_blank"
          aria-label="GitHub"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 backdrop-blur-[0.5rem]"
        >
          <BsTelegram />
        </a>
        <a
          href="https://github.com/PheakdeyPhalphea"
          target="_blank"
          aria-label="GitHub"
          className="bg-white p-4 text-gray-700 flex items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 backdrop-blur-[0.5rem]"
        >
          <MdOutlineMail />
        </a>
      </div>
      
    </motion.section>
  );
}
