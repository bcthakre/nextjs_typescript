import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            Copyright 2021 Ninja List. 
            <Link href="/privacy"><a>Privacy Policy</a></Link>
            <Link href="/terms"><a>Terms of Use</a></Link>
        </footer>
    )
}

export default Footer;