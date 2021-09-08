function Footer(props) {
    return(<footer className="flex items-center justify-center w-full h-24 border-t">
        <a
            className="flex items-center"
            href="https://watsonxyz-kelliewatson.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>Developed by &nbsp;</div>
            <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-transparent bg-clip-text hover:from-pink-500 hover:via-red-500 hover:to-purple-600">{`${props.companyName}`}</div>
        </a>
    </footer>);
}
export default Footer;