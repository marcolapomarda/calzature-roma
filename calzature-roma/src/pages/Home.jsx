import React from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import CategoriesSection from "../components/home/CategoriesSection";
import ReviewsSection from "../components/home/ReviewsSection";
import CTASection from "../components/home/CTASection";
import { STORE_IMAGES } from "../components/categoriesData";

export default function Home() {
  return (
    <div>
      <HeroSection storeImage={STORE_IMAGES.storeInterior} />
      <FeaturesSection />
      <CategoriesSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
}