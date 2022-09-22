
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
       <nav>
        <div className="logo">
            <Image src="/sun.png" width={64} height={64} alt="sun"/>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>Ninja Listing</a></Link>
        <Link href="/contact"><a>Contact Us</a></Link>
       </nav>
    )
}

export default Navbar;