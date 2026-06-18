function Skills() {
const skills = [
"Java",
"Kotlin",
"React.js",
"JavaScript",
"Node.js",
"Express.js",
"MongoDB",
"SQL",
"Android Development",
"MERN Stack",
"Git",
"Postman",
"Figma",
];

return ( <section className="max-w-6xl mx-auto py-20 px-6"> <h2 className="text-3xl font-bold mb-8">Skills</h2>

```
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {skills.map((skill) => (
      <div
        key={skill}
        className="bg-slate-800 p-4 rounded-xl text-center hover:bg-blue-600 transition"
      >
        {skill}
      </div>
    ))}
  </div>
</section>

);
}

export default Skills;
