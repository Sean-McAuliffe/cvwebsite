import { useState } from "react";

export default function SkillTab() {
    const [tab, setTab] = useState(0);

    const data = [
        {
            label: "Solutions Architect",
            index: 0,
            desc: "Working as an SA is my ideal role, and what I'm passionate about. As an SA, I focus on leveraging the AWS platform to design scalable, cost-efficient, & performant systems. My design philosophy is to keep things as modular as possible to allow for growth, while also avoiding over-engineering solutions in an effort to keep things simple & easy to maintain.",
            color: 'green',
            skills: [
                {
                    name: "AWS CDK",
                    level: 80
                },
                {
                    name: "AWS",
                    level: 85
                },
                {
                    name:'Serverless Architectures',
                    level: 90
                },
                {
                    name: "Streaming Architectures",
                    level:80
                },
                {
                    name:"Data Lake Design",
                    level: 90
                },
                {
                    name: "Enterprise Migrations",
                    level: 85
                }
            ]
        },
        {
            label: "Developer",
            index: 1,
            desc: "After working as an analyst, I began to teach myself the skills I'd need in order to transition to being a developer. Here I focused on best-practices related to working in a git environment with a team, & writing clean code with good documentation. I also began to learn Typescript & Scala, in addition to honing my skills with Python.",
            color: 'orange',
            skills: [
                {
                    name: "Typescript",
                    level: 85
                },
                {
                    name: "Docker",
                    level: 85
                },
                {
                    name: "Python",
                    level: 80
                },
                {
                    name: "Scala",
                    level: 75
                },
                {
                    name: "React",
                    level: 90
                },
                {
                    name: "NextJS",
                    level: 85
                },
            ]
        },
        {
            label: "Analyst",
            index: 2,
            desc: "My first professional exposure to tech & big data was as an analyst! While a strict-analyst role wasn't my passion, I did learn valuable skills that I still use as an SA. For example, working as an analyst provided me with my first exposure to writing code - specifically, Python for data analysis. I also learned the value of being able to clearly & concisely communicate my ideas during stakeholder presentations.",
            color: 'blue',
            skills: [
                {
                    name: "Presentations",
                    level: 90
                },
                {
                    name: "Pandas",
                    level: 85
                },
                {
                    name: "Jupyterlab",
                    level: 95
                },
                {
                    name: "Excel",
                    level: 95
                },
                {
                    name:"Process Improvement",
                    level: 90
                },
                {
                    name: "Communication",
                    level: 90
                }
            ]
        },
    ];

    return (
        <>
            <div className="w-full p-2 flex text-center justify-items-center gap-5 font-semibold text-xl">
                {data.map((d) => {
                    return (
                        <button
                            key={d.index}
                            className={tab == d.index ? "border-b-4 border-b-slate-900 w-1/3" : "border-transparent w-1/3"}
                            onClick={() => setTab(d.index)}
                        >
                            {d.label}
                        </button>
                    );
                })}
            </div>
            <div className="w-full flex-col p-2">
                <div className="w-full mb-3">{data[tab].desc}</div>
                <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                    {data[tab].skills.map((skill) => {
                        return (

                            <div className="h-20 border-2 border-slate-600 rounded-lg shadow-md p-2 sm:col-span-1 md:col-span-1 lg:col-span-1 text-center align-middle bg-white">
                                <div className={`w-full font-semibold text-lg text-${data[tab].color}-900`}>{skill.name}</div>
                                <div><span className={`text-${data[tab].color}-900 font-medium`}>{skill.level}</span> / 100 </div>

                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    );
}