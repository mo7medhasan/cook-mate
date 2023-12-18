"use client"
import Icon from "@/components/ui-assets/Icon";
import Image from "next/image";
import React from "react";
import { format } from 'date-fns';
import RateModal from "@/components/recipe-details/RateModal";
type Props = {
  params: {
    recipeId: string;
  };
};

function RecipeDetails({ params: { recipeId } }: Props) {
  const myDate = new Date(2023, 9, 18);

  const formattedDate = format(myDate, 'MMMM dd, yyyy');
  return (
    <div className="container flex flex-col gap-8">
      <div className="grid md:grid-cols-2 w-full gap-6">
        <div className="relative min-h-[450px] h-full">
          {" "}
          <Image
            src={"/images/menu3.png"}
            alt="menu"
            sizes={"100%"}
            fill
            className=" rounded-3xl object-cover object-center"
          />
        </div>{" "}
        <div className=" flex flex-wrap gap-6">
          <div className="w-[45%] relative">
            <Image
              src={"/images/menu3.png"}
              alt="menu"
              sizes={"50%"}
              fill
              className=" rounded-3xl object-cover object-center"
            /></div> <div className="w-[45%] relative">
            <Image
              src={"/images/menu3.png"}
              alt="menu"
              sizes={"50%"}
              fill
              className=" rounded-3xl object-cover object-center"
            /></div> <div className="w-[45%] relative">
            <Image
              src={"/images/menu3.png"}
              alt="menu"
              sizes={"50%"}
              fill
              className=" rounded-3xl object-cover object-center"
            /></div>
          <div className="w-[45%] relative">
            <Image
              src={"/images/menu3.png"}
              alt="menu"
              sizes={"50%"}
              fill
              className=" rounded-3xl object-cover object-center"
            /></div>
          <div className="w-[45%] relative">
            <Image
              src={"/images/menu3.png"}
              alt="menu"
              sizes={"50%"}
              fill
              className=" rounded-3xl object-cover object-center"
            /></div>
          <div className="w-[45%] relative">
            <Image
              src={"/images/menu3.png"}
              alt="menu"
              sizes={"50%"}
              fill
              className=" rounded-3xl object-cover object-center"
            /></div>

        </div>
      </div>
      <div className="grid md:grid-cols-10  gap-6 ">
        <div className="md:col-span-6 flex flex-col gap-6">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-1"><span className="font-bold text-2xl pr-3">4.5</span>
              <Icon name="star-solid" color={"gold"} size={24} />
              <Icon name="star-solid" color={"gold"} size={24} />
              <Icon name="star-solid" color={"gold"} size={24} />
              <Icon name="star-solid" color={"gold"} size={24} />
              <Icon name="star-half" color={"gold"} size={24} />
            </div>
            <RateModal />
          </div>
          <h1 className="text-5xl font-bold ">
            Cheesy Samosa Puffs
          </h1>
          <div className="flex items-center gap-3">
            <p className="px-2 rounded-full bg-shade ">By {"RACHEL GURJAR "}</p>
            <p className="px-2 rounded-full bg-shade ">{formattedDate}</p>

          </div>
          <p className="text-lg mt-3">Snacks are a crucial component of every Diwali party, and these samosa puffs increase the fun factor, with light and crispy pastry encasing a soft, cheesy interior. The cheddar cheese melts into the spiced potato mash once baked. Serve with your choice of hot sauce or green chutney for an added punch, and this is sure to become one of your favorite Diwali recipes.</p>
          <div className="my-10 flex flex-col gap-12">
            <h2><span className="bg-[#363636]/10 font-bold px-4 py-3 text-2xl w-auto" >
              Making steps
            </span></h2>
            {[1, 2, 3, 4, 5, 6].map(step => <div key={step} className="flex flex-col gap-6 text-lg">
              <h3 className="font-bold  ">Step {step}</h3>
              <p className="">{`Place a rack in middle of oven; 
              preheat to 400°.
               Place potatoes in a medium saucepan and pour in cold water to cover by 1".
                Season generously with salt and bring to a boil. Reduce heat and simmer until potatoes are very tender, 25–30 minutes. Drain potatoes and let sit until cool enough to handle.`}</p>
            </div>)}
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="border border-dashed rounded-3xl  py-8 px-6 w-full flex flex-col gap-8">
            <h2 className="font-bold  text-2xl">
              Ingredients
            </h2>
            <div className="flex flex-1 flex-col gap-2 ">
              <p className="flex-1 bg-[#363636]/10 p-3 w-full">
              1 lb. russet potatoes (about 2 large), scrubbed
              </p>
              <p className="flex-1 bg-[#363636]/10 p-3 w-full">1 Tbsp. plus 1½ tsp. Diamond Crystal or 2¾ tsp. Morton kosher salt, plus more
              </p> <p className="flex-1 bg-[#363636]/10 p-3 w-full">2 Tbsp. avocado oil or vegetable oil
              </p>
                {[1, 2, 3, 4, 5, 6].map(step => <p  key={step}  className="flex-1 bg-[#363636]/10 p-3 w-full">
              1 lb. russet potatoes (about 2 large), scrubbed
              </p>)}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
