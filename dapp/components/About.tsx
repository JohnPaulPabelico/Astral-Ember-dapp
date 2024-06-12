import React, { useContext } from "react";

function About() {
  return (
    <div>
      {" "}
      <section id="about" className={`transition min-h-dvh bg-slate-900`}>
        <div className="p-12"></div>
        <div className="flex justify-center  items-center h-full">
          <div className="text-center text-5xl space font-bold space flex justify-center text-white items-center">
            ABOUT THE GUILD
          </div>
        </div>
        <div className="flex justify-center  items-center h-full">
          <div className="text-center text-3xl space font-bold space flex justify-center text-white items-center">
            Di ko pa alam lalagay HAHAHAHA
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
