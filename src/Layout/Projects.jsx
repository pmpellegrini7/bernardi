import { Card, Button } from "antd";
import { motion } from "framer-motion";
import projectData from '/src/Components/Projects/config.js'

function Projects() {

    const cardVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };
    
    return (
            <div className="w-full sm:min-h-screen flex flex-col justify-center items-center p-10 bg-gray-100">
                <h1 className="text-4xl font-bold mb-10">Projects</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        {projectData.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Card
                                    key={project.title}
                                    cover={<img alt={project.title} src={project.image} style={{width: 200, padding: 40}} className="m-auto"/>}
                                    className="shadow"
                                    bodyStyle={{ padding: "20px 24px" }}
                                >
                                    <Card.Meta
                                        title={<h3 className="font-bold text-center">{project.title}</h3>}
                                        description={<p className="mb-4 text-center">{project.description}</p>}
                                    />
                                    <Button type="primary" style={{background: '#EAB308'}} block>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            Ver sitio
                                        </a>
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
            </div>
    );
}

export default Projects;