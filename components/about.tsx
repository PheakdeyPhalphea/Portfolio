"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useI18nContext } from "@/context/i18n-context";
import { useTheme } from "@/context/theme-context";
import en from "@/locale/en";

type skillsProps = (typeof en.about.data)[number];

export default function About() {
  const { language, t } = useI18nContext();
  const { theme } = useTheme();
  const { ref } = useSectionInView(language === "en" ? "About" : "Perfil", 0.5);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 1 }}
      className="my-24 sm:mt-0 sm:mb-40 max-w-[36rem] sm:max-w-[50rem] xl:max-w-[56rem] text-center scroll-mt-28 xl:text-xl"
      id="about"
    >
      <SectionHeading>{t("about.title")}</SectionHeading>
      <p className="mb-5 leading-9 sm:leading-[46px]">{t("about.first")}</p>
      <p className="block leading-9 sm:leading-[46px]">{t("about.second")}</p>
    </motion.section>
  );
}
