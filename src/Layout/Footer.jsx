function Footer() {
    const today = new Date()
    return ( 
        <footer className="fixed w-full flex bottom-0 p-4 items-center justify-center">
            <p><span className="font-bold">Franco Bernardi</span> © {today.getFullYear()} All rights reserved.</p>
        </footer>
    );
}

export default Footer;