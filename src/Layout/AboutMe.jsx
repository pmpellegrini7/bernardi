import { Card, Typography } from "antd";
import { motion } from "framer-motion";

function AboutMe() {
    const infoAboutMe = [
        {
        title: "First Name & Last Name 📋",
        values: ["Franco Bernardi"],
        },
        {
        title: "Location 🎯",
        values: ["San Nicolás de los Arroyos, Buenos Aires - Argentina"],
        },
        {
        title: "Profession 💼",
        values: [
            "Security Analyst Jr",
            "Advanced Student of Programming",
            "Oracle Netsuite Developer",
        ],
        },
        {
        title: "Languages 🌎",
        values: ["Spanish: Native", "English: Intermidiate (B2)", "Portuguese: Basic"],
        },
        {
        title: "Technologies / Skills 💻",
        values: [
            "HTML - CSS",
            "Javascript",
            "React",
            "C#",
            "SQL Server",
            "Tailwind - Sass",
        ],
        },
    ];

    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full sm:h-screen flex flex-col justify-center items-center p-10 bg-gray-100"
        >
            <Typography.Title level={2} className="mb-11">
                About Me
            </Typography.Title>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                {infoAboutMe.map((categorie) => (
                <Card key={categorie.title} title={categorie.title} className="shadow">
                    {categorie.values.map((value, index) => (
                    <p key={index}>• {value}</p>
                    ))}
                </Card>
                ))}
            </div>
        </motion.section>
    );
}

export default AboutMe;