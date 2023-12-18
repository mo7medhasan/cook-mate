"use client";
import "./style.css";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Icon from "../ui-assets/Icon";

function RateModal() {
    const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+"
  ];
  const fillColorArray = [
    "#f17a45",
    "#f17a45",
    "#f19745",
    "#f19745",
    "#f1a545",
    "#f1a545",
    "#f1b345",
    "#f1b345",
    "#f1d045",
    "#f1d045"
  ];
  
  const [opened, { open, close }] = useDisclosure(false);
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        radius={"lg"}
        size={"lg"}
        title={
          <span className="font-semibold text-primary">Rate This Recipe</span>
        }
      >
        <div className="flex flex-col gap-6  p-6">
          <h2 className="font-bold text-4xl ">Cheesy Samosa Puffs</h2>
       <div className="flex flex-1">  <Rating onClick={handleRating}  initialValue={rating}  size={50}
                    transition
                    allowFraction className="rating "
                    showTooltip
                    tooltipArray={tooltipArray}
                    fillColorArray={fillColorArray}
                  /></div> 
          <button
            onClick={() => {
              close();
            }}
            className="flex justify-between items-center flex-1 rounded-full bg-secondary text-white uppercase p-4"
          >
            Confirm <Icon name="arrow-right" color={"white"} size={24} />
          </button>
        </div>
      </Modal>

      <button
        onClick={open}
        className="bg-shade border font-semibold rounded-full flex items-center gap-5 px-7 py-3 uppercase "
      >
        Rate
        <Icon name="star-1" color={"black"} size={24} />
      </button>
    </>
  );
}

export default RateModal;
