import contactOptions from './config.js'

function ContactOption() {
    
    return (
        <div className="w-2/3 grid flex-wrap sm:grid-cols-3 gap-5 ">
            {
                contactOptions.map((option,index) => {
                    return (
                        <div className="flex items-center justify-center" key={index}>
                            <a href={option.href} target="_blank"  className="col-span-1">
                                <img className="w-20" src={option.iconURL} alt="Logo Whatsapp" />
                                <span className="w-full flex items-center justify-center mt-2">{option.text}</span>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContactOption;