function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">

      <h2 className="text-3xl font-bold mb-8">
        Contact Me
      </h2>

      <div className="bg-slate-800 p-8 rounded-xl">

        <p className="mb-4">
          📧 Email:
          <a
            href="mailto:gauravadhithyamurugan210502@gmail.com"
            className="text-blue-400 ml-2"
          >
            gauravadhithyamurugan210502@gmail.com
          </a>
        </p>

        <p className="mb-4">
          📱 Phone: +91 8148703908
        </p>

        <p className="mb-4">
          📍 Erode, Tamil Nadu
        </p>

        <div className="flex gap-6 mt-6">

          <a
            href="https://github.com/gauravadi"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gaurav-adhithya-m-1649b6308"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;