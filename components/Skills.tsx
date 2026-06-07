
import {
    BrainCircuit,
    BriefcaseBusiness,
    Database,
    Globe,
    Server,
} from "lucide-react";

import {
    FaLaravel,
    FaNodeJs,
    FaReact,
} from "react-icons/fa";


const skills = [
    {
        name: "Laravel",
        icon: <FaLaravel size={32} />,
    },
    {
        name: "React",
        icon: <FaReact size={32} />,
    },
    {
        name: "Node.js",
        icon: <FaNodeJs size={32} />,
    },
    {
        name: "Next.js",
        icon: <Globe size={32} />,
    },
    {
        name: "Database",
        icon: <Database size={32} />,
    },
    {
        name: "REST API",
        icon: <Server size={32} />,
    },
    {
        name: "AI-Assisted Development",
        icon: <BrainCircuit size={32} />,
    },
    {
        name: "Business Solutions",
        icon: <BriefcaseBusiness size={32} />,
    },

];

export default function Skills() {
    return (
        <section className="py-16 bg-slate-50">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-10">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {skills.map((item) => (
                        <div
                            key={item.name}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-3">
                                {item.icon}
                            </div>

                            <p className="text-center font-medium">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}