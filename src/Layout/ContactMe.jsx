import ContactOption from "../Components/ContactMe/ContactOption"
import { motion } from "framer-motion";

function ContactMe() {
    return ( 
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full min-h-screen flex flex-col justify-center items-center sm:p-10 bg-gray-100"
            >
                <section className='w-full gap-10 h-screen flex flex-col justify-center items-center'>
                    <h1 className="font-bold text-3xl sm:text-4x1 mb-10">Let's work together!</h1>
                    <ContactOption/>
                </section>
            </motion.div>
    );
}

export default ContactMe;