import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from 'react';
function Home() {
    const CV_PATH = 'src/assets/Programador - Franco Bernardi.pdf'
    const CV_PIC_PATH = 'src/assets/AboutMe/Foto CV.jpg'

    const [hovering, setHovering] = useState(false);

    const toggleHovering = () => {
        setHovering(!hovering);
    };

    return (
        <section className='w-full h-screen flex flex-col justify-center items-center text-5xl bg-gray-100 gap-8'>
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                src={CV_PIC_PATH}
                alt="Profile"
                className="rounded-full w-56 sm:w-72 sm:mt-32 sm:mb-10 shadow-lg"
            />
            <h1 className='text-4xl'>Hi! I'm</h1>
            <Typed
                    strings={[
                        'Franco Bernardi',
                        'a Software Developer'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    backDelay={1000}
                    className="text-yellow-500 font-bold text-4xl"
            />
            <Link to={CV_PATH} target="_blank" download  className='bg-white hover:bg-gray-100 text-gray-800 p-4 mt-2 border border-gray-400 rounded shadow text-2xl hover:scale-105 duration-500'>Download CV</Link>
        </section>
    )
}

export default Home;