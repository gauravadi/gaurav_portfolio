import React from "react";

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white">

      <h1 className="text-5xl font-bold">
        Gaurav Adhithya M
      </h1>

      <p className="text-xl mt-4">
        Full Stack Developer & Android Developer
      </p>

      <p className="max-w-2xl mt-4 text-gray-200">
        Aspiring Full Stack Developer with knowledge of React.js,
        Express.js, MongoDB, Kotlin, Java and SQL.
      </p>

      <div className="mt-8 flex gap-4">

        <a
          href="https://drive.google.com/file/d/1g5_J-bM5L96jEk71-ehUDw-GbbKAGlCc/view?usp=sharing"
          
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
        >
          View Resume
        </a>

        <a
          href="https://github.com/gauravadi"
          target="_blank"
          rel="noreferrer"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/gaurav-adhithya-m-1649b6308"
          target="_blank"
          rel="noreferrer"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
        >
          LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Hero;