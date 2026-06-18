function Projects() {
const projects = [
{
title: "E-Commerce Android Application",
tech: "Kotlin, Android Studio",
points: [
"Developed a native Android e-commerce application.",
"Implemented product browsing and detailed product views.",
"Designed responsive layouts for Android devices.",
"Improved user experience with modern UI design.",
],
},
{
title: "Online Book Store Application",
tech: "MongoDB, Express.js, React.js, Node.js",
points: [
"Developed a full-stack Online Book Store application using the MERN Stack.",
"Implemented book browsing, searching, authentication, shopping cart, and online ordering.",
"Created RESTful APIs for inventory, user accounts, and order processing.",
"Designed a responsive React.js interface with scalable MongoDB storage.",
],
},
{
title:
"Context-Aware Intrusion Detection Using Automated Role Discovery and Deep Ensemble Learning",
tech: "Python, Machine Learning, Deep Learning",
points: [
"Developed a context-aware Intrusion Detection System (IDS).",
"Applied K-Means clustering for automated role discovery.",
"Implemented CNN, BiGRU, and FT-Transformer models.",
"Achieved 99.75% accuracy with a 0.77% False Alarm Rate.",
],
},
];

return ( <section className="max-w-6xl mx-auto py-20 px-6"> <h2 className="text-3xl font-bold mb-8">Projects</h2>

```
  <div className="space-y-8">
    {projects.map((project) => (
      <div
        key={project.title}
        className="bg-slate-800 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition"
      >
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-blue-400 mt-2 font-semibold">
          {project.tech}
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
          {project.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

);
}

export default Projects;
