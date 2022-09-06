import Link from "next/link";
import styles from '../styles/Home.module.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1> Ooops</h1>
            <h2> The page cannot be found</h2>
            <p> Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    ) ;
}

export default NotFound ;