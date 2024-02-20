import React from "react";

const Services = () => {
  const cards = [
    {
      id: 1,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1460543120/photo/a-visit-to-the-dentist.jpg?s=612x612&w=0&k=20&c=7EA7JXQ6BotvDVX1w3J2SuLvIhZ2ilMugJRtGZk4PtM="
          alt=""
        />
      ),
      name: "Dental",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 2,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1388254153/photo/shot-of-a-baby-sitting-on-her-mothers-lap-while-being-examined-by-a-doctor.jpg?s=612x612&w=0&k=20&c=PBzQWrBVp8pIyYBH_ds8Bu8y4Y4j2jdL3Z2n8L1W0v4="
          alt=""
        />
      ),
      name: "Pediatrician",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 3,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1425844400/photo/look-at-the-light.jpg?s=612x612&w=0&k=20&c=EkjpTH-ke1zb5XX3VW9MB-TBRDu23rpLReCvJZUHC1E="
          alt=""
        />
      ),
      name: "Eye care",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 4,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1181246830/photo/mother-breastfeeding-newborn-baby-in-hospital-ward-first-breastfeeding.jpg?s=612x612&w=0&k=20&c=wJLp9C51s1t_YloK9e4Z9fn8US7X-61g8DK4MaLG66I="
          alt=""
        />
      ),
      name: "parental care",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 5,
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1366228042/photo/facial-aesthetics-surgery-treatment.jpg?s=612x612&w=0&k=20&c=7zOyHVSkG1FrdqUqG1jXWWdPquSKXotFbvujX1SwPyw="
          alt=""
        />
      ),
      name: "Skin Speasilist",
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    {
      id: 6,
      name: "Suegery Speasilist",
      icon: (
        <img
          className="w-full   rounded-sm"
          src="https://media.istockphoto.com/id/1485048008/photo/team-of-professional-doctors-performing-operation-in-surgery-room-medical-team-performing.jpg?s=612x612&w=0&k=20&c=euIB-0Y35PawMy1B_E3m26Vn1539nZPyCFh05IcAAY4="
          alt=""
        />
      ),
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque. Tempore voluptates minus harum voluptatibus iure impedit accusantium delectus at?'
    },
    
  ];
  return (
    <div id="Service">
      <div className="grid grid-cols-1 py-16">
        <p className="text-4xl text-sky-500">Our Services</p>
        <p className="text-3xl font-bold">
         We provide our best to bring smile of your face
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 bg-slate-50 lg:grid-cols-3 gap-5 mt-10 p-3">
        {cards.map((card) => (
          <div className="grid grid-cols-1   border-r-2 border-1 border-gray-400 shadow-xl shadow-gray-500 hover:h-full p-2 rounded-xl ">
           <p className="text-4xl uppercase font-semibold text-sky-600 py-2 px-5 ">
              {card.name}
            </p>
            <p className="  p-3 my-2">{card.icon}</p>
            
              
              { 
                <li
                  className="list-none justify-self-start  text-xl flex-flex-col"
                  
                >
                  {card.para }
                </li>
              }
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
