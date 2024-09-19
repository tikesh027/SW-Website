import React from "react";
import Category from "./LandingPageComponents/Category";
import RightSidebar from "./LandingPageComponents/Right-Sidebar";
import Slider from "./LandingPageComponents/Slider";
import FeaturePost from "./LandingPageComponents/FeaturePost";
import FunFacts from "./LandingPageComponents/FunFacts";

const LandingPage = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-start">
        <div className="w-full">
          <div>
            <Category />
          </div>
          <div>
            <Slider />
          </div>
          <div>
            <FeaturePost />
          </div>
          <div>
            <FunFacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
