import Header from "@/components/header"
import Title from "./components/title/Title"
import StepSequence from "./components/steps/StepsSequence"
import image4 from "@/assets/image4svg.svg";
import image5 from "@/assets/image5svg.svg";
import React, { useState } from 'react';
import { HeroSection } from "./components/HeroSection";
import { AtributeList } from "./components/AtributeList";
import { Button } from "./components/Button";
import { PayOption } from "./components/PayOption";
import { Footer } from "./components/footer/Footer";
import { GaranteeSection } from "./components/GaranteeSection";
import { ReviewSection } from "./components/ReviewSection";
import { OfferCard } from "./components/OfferCard";

function App() {
  const titles = ['Cart Review', 'Checkout', 'Special Offer', 'Confirmation'];
  const [rating, setRating] = useState(0);

  const handleClick = (selectedRating: React.SetStateAction<number>) => {
    setRating(selectedRating);
  };


  return (
    <div style={{ fontFamily: 'Manrope, sans-serif' }}>
      <Header />
      <div className="itemSection bg-white max-[768px]:bg-gradient-to-b from-[#f8f8f8] to-[#ffffff] md:px-5 md:mb-10 max-w-[1245px] mx-auto tall:mb-48">
        <Title title="Wait ! your order in progress." smallSubtitle="Lorem ipsum dolor sit amet, consectetur adipiscing" />
        <StepSequence currentStep={2} titles={titles} />
        <div className="p-8 grid md:grid-cols-2 md:gap-5 md:bg-[#f8f8f8]  mx-auto">
          <div className="leftSection max-w-[550px]">
            <h1 className="leading-[33.6px] text-2xl font-normal mb-2 text-center md:hidden" >
              <a className="text-[#2C7EF8] ">ONE TIME ONLY</a> special price for 6 extra Clarifion for <a className="text-[#2C7EF8]">only $14</a> each ($84.00 total!)
            </h1>
            <img src={image4} />
            <div className="hidden md:block">
              <ReviewSection />
            </div>
          </div>
          <div className="rightSection max-w-[550px]">
            <h1 className=" leading-[33.6px] text-2xl font-normal mb-2 text-center md:text-justify hidden md:block" >
              <a className="text-[#2C7EF8] ">ONE TIME ONLY</a> special price for 6 extra Clarifion for <a className="text-[#2C7EF8]">only $14</a> each ($84.00 total!)
            </h1>
            <HeroSection image5={image5} star={0} handleClick={handleClick} rating={rating} />
            <h1 className=" leading-[16.8px] text-center text-xs font-normal md:hidden">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</h1>
            <AtributeList />
            <OfferCard     />
            <Button text="YES - CLAIM MY DISCOUNT"  />
            <PayOption />
            <h1 className="text-center text-red-500 underline mb-4">NO THANKS, I DON’T WANT THIS.</h1>
            <GaranteeSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;