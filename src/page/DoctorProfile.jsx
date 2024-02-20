import React from "react";

const DoctorProfile = () => {
  const cards = [
    {
      id: 1,
      icon: (
        <img
          className="w-full  rounded-sm"
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
          alt=""
        />
      ),
      name: "Mosarof Bin",
      speasilist: ["Dermatologists", "Infectious disease", "personal loans"],
    },
    {
      id: 2,
      icon: (
        <img
          className="w-full  rounded-sm"
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      ),
      name: "Lona Makham",
      speasilist: ["Dermatologists", "Infectious disease", "personal loans"],
    },
    {
      id: 3,
      icon: (
        <img
          className="w-full  rounded-sm"
          src="https://media.istockphoto.com/id/1806608544/photo/portrait-of-a-female-doctor-at-the-workplace.jpg?s=612x612&w=0&k=20&c=MARkttlfJ1JoAxKffrmXxbI_rIPJTKWaKTrFv1qwCZc="
          alt=""
        />
      ),
      name: "Selina John",
      speasilist: ["Dermatologists", "Infectious disease", "personal loans"],
    },
    {
      id: 4,
      icon: (
        <img
          className="w-full  rounded-sm"
          src="https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=612x612&w=0&k=20&c=i91idG544pXuYkw5ju6iIzm1m-lEqQaygeOOrjG5GEk="
          alt=""
        />
      ),
      name: "Aliza Shah",
      speasilist: ["Dermatologists", "Infectious disease", "personal loans"],
    },
    {
      id: 5,
      icon: (
        <img
          className="w-full  rounded-sm"
          src="https://media.istockphoto.com/id/1627750071/photo/happy-portrait-and-black-woman-doctor-proud-in-hospital-excited-or-cheerful-for-healthcare.jpg?s=612x612&w=0&k=20&c=p5RJXG6VeWwLYP8ZOH8-cjgHUVU1j-if9WofsQ5tp6A="
          alt=""
        />
      ),
      name: "Nowmi Max",
      speasilist: ["Dermatologists", "Infectious disease", "personal loans"],
    },
    {
      id: 6,
      name: "LailaBi Miti",
      icon: (
        <img
          className="w-full  rounded-sm"
          src="https://media.istockphoto.com/id/1485990733/photo/portrait-of-female-doctor-talking-to-online-patient-at-clinic-office-giving-online.jpg?s=612x612&w=0&k=20&c=GGp35c7Bn6QVboz6UkN3xwTlGJ3fxVb03Qq0NDXgQCk="
          alt=""
        />
      ),
      speasilist: ["Dermatologists", "Infectious disease", "personal loans"],
    },
    {
      id: 7,
      icon: (
        <img
          className="w-full  rounded-sm"
          src="https://media.istockphoto.com/id/1436148451/photo/smiling-female-doctor-with-digital-tablet-standing-at-isolated-grey-background.jpg?s=612x612&w=0&k=20&c=-cjXiU2FR2B7e6PKi4ELdFRPMiu22aIBkWLSCGzYjYM="
          alt=""
        />
      ),
      name: "Ulkami Bill",
      speasilist: ["Dermatologists", "Infectious disease", "personal loans"],
    },
  ];
  return (
    <div id="About">
      <div className="grid grid-cols-1 py-16">
        <p className="text-4xl text-sky-500">Specialty doctors</p>
        <p className="text-3xl font-bold">
          They are all time available for your needed
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 bg-slate-100 rounded-lg p-3 ">
        {cards.map((card) => (
          <div className="grid grid-cols-1 bg-white border-r-2 border-1 border-gray-400 shadow-xl rounded-xl shadow-gray-500  ">
            <p className=" w-full h-full p-3 my-2">{card.icon}</p>
            <p className="text-4xl font-semibold  uppercase py-2 px-5 justify-self-start">
              {card.name}
            </p>
            <div className="grid grid-cols-12 h-full px-5">
              <p className="text-2xl font-semibold col-span-4 uppercase -mb-16">Specialty:</p>
              {card.speasilist.map((para, i) => (
                <li
                  className="list-none uppercase col-span-10 text-xl justify-self-end justify-around"
                  key={i}
                > 
                  {para+","}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;
