"use client"
import Icon from "@/components/ui-assets/Icon";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    recipeId: string;
  };
};

function RecipeDetails({ params: { recipeId } }: Props) {
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

          </div>
        </div>
        <div className="md:col-span-6"></div>
      </div>
    </div>
  );
}

export default RecipeDetails;
