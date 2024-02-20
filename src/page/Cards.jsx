import React from "react";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { FaAmbulance, FaMoneyBillAlt } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";

const Cards = () => {
  const cards = [
    {
      id: 1,
      icon: <RiSecurePaymentFill />,
      title: "Drug and medicines",
      paragraph: "There is always a good supply of medicines inside the hospital",
    },
    {
      id: 2,
      icon: <MdAddCall />,
      title: "24/7 health-care Support from the Doctors",
      paragraph: "There is always a good supply of medicines inside the hospital",
    },
    {
      id: 3,
      icon: <FaAmbulance />,
      title: "Ambulance and vehicle facilities",
      paragraph: "There is always a good supply of medicines inside the hospital",
    },
    {
      id: 4,
      icon:<FaMoneyBillAlt />,
      title: "Free camping",
      paragraph: "There is always a good supply of medicines inside the hospital",
    },
  ];
  return (
    <div>
       <div className="grid grid-cols-1 py-5">
        <p className="text-4xl text-blue-900">Others Services</p>
        
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5  my-10">
      {cards.map((card) => (
        <div className="flex flex-col items-center justify-center border-sky-800 border-1 shadow-xl shadow-gray-500 overflow-hidden bg-white hover:h-full p-2 rounded-lg transition-all duration-1000 ease-in-out hover:bg-sky-500 hover:text-white">      
            <p className=" text-6xl  bg-sky-600  rounded-full p-3 my-2"> 
            {card.icon}
          </p>
          <p className="text-2xl font-semibold py-2">{card.title}</p>
          <p className="text-xl py-2">{card.paragraph}</p>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default Cards;
