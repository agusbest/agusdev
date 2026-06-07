import Image from "next/image";

const projects = [
    {
        title: "Sales Analytics Dashboard",
        image: "/sales-dashboard.png",
        demo: "https://sales-analytics-dashboard-taupe.vercel.app/",
    },
    {
        title: "Asset Monitoring Dashboard",
        image: "/asset-dashboard.png",
        demo: "https://asset-monitoring-dashboard-slhh.vercel.app/",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-16 bg-slate-50"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-10">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={500}
                                className="w-full h-auto"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-blue-700 font-semibold"
                                >
                                    Live Demo →
                                </a>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}