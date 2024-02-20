import React from "react";

const Test = () => {
  const cards = [
    {
      id: 1,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1501183876/photo/radiologist-getting-a-patient-ready-for-an-x-ray.jpg?s=612x612&w=0&k=20&c=MEaeOVWhkb1QYqKPT9IC8rU6Tyt5WBV6ReW9UB0AlwA="
          alt=""
        />
      ),
      testName: "X-ray",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia ducimus dolore deleniti atque asperiores.",
    },
    {
      id: 2,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1443050107/photo/man-with-heart-problems-on-the-visit-to-doctor.jpg?s=612x612&w=0&k=20&c=VY5SPtnNG6uhfELSk98ZS0y52oPmlxK8SLrsBtxU2E0="
          alt=""
        />
      ),
      testName: "ECG",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia ducimus dolore deleniti atque asperiores.",
    },
    {
      id: 3,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1492322683/photo/doctor-doing-an-endoscopy-in-the-patient-in-the-hospital-room.jpg?s=612x612&w=0&k=20&c=krAH8Uvx6GwtRHodHoooiIRDlbqgOCqSu-7bVWxew4E="
          alt=""
        />
      ),
      testName: "Endoscopy",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia ducimus dolore deleniti atque asperiores.",
    },
    {
      id: 4,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1482783730/photo/doctor-making-ultrasonography-to-female-patient-at-ultrasound-office-of-medical-clinic.jpg?s=612x612&w=0&k=20&c=cUtMv_30LSzEENbK4SyL8XQGRBpOunC5fTIAo_1z5SI="
          alt=""
        />
      ),
      testName: "Ultrasonography",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia ducimus dolore deleniti atque asperiores.",
    },
  ];
  return (
    <div id="Test">
      <div className="grid grid-cols-1 pt-10">
        <p className="text-4xl text-sky-500 uppercase">test facilities</p>
        
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 bg-slate-100 gap-5 mt-2 p-2">
        {cards.map((card) => (
          <div className="grid grid-cols-1 bg-slate-50 border-r-2 border-1 border-gray-400 shadow-xl shadow-gray-500 hover:h-full p-2 rounded-lg ">
            <p className=" w-full h-full p-3 my-2">{card.icon}</p>
            <p className="text-xl font-semibold  text-sky-600 py-2 px-5">
              Test Name: <span className="text-3xl font-semibold uppercase text-black">{card.testName}</span>
            </p>
            <div className="flex flex-col justify-self-start px-5">
             
              
                <li className="list-none  text-xl flex-flex-col">
                  {card.para}{" "}
                </li>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
