import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
const NavItem = () => {
    const router = useRouter();
    return (
        <nav className="sidebar">
            <div className="logo">
                <Image src="/logo.png" alt="Logo" width={70} height={60} />
            </div>

            <div className='ProfilePic'>
                <Image src="/profilepic.png" alt="profile" width={50} height={50} />
            </div>


            <span className={`navSpan ${router.pathname == "/" ? "activeNav" : ""}`}>
            <object data="/home.svg" width="25" height="25"></object>
                <Link href="/">Home</Link>
            </span>

            <span className={`navSpan ${router.pathname == "/marketplace" ? "activeNav" : ""}`}>
            <object data="/buy.png" width="25" height="25"></object>
                <Link href="/marketplace">Marketplace</Link>
            </span>
            <span className={`navSpan ${router.pathname == "/forum" ? "activeNav" : ""}`}>
            <object data="/handshake.png" width="25" height="25"></object>
                <Link href="/forum">Forum</Link>
            </span>
            <span className={`navSpan ${router.pathname == "/events" ? "activeNav" : ""}`}>
            <object data="/cam.svg" width="25" height="25"></object>
                <Link href="/events">Events</Link>
            </span>
            <span className={`navSpan ${router.pathname.includes("/buyingspace") ? "activeNav" : ""}`}>
            <object data="/me.svg" width="25" height="25"></object>
                <Link href="/buyingspace/channels">Buying space</Link>
            </span>
            <span className={`navSpan ${router.pathname =="/logout" ? "activeNav" : ""}`}>
            <object data="/logout.svg" width="25" height="25"></object>
                <Link href="/logout">Logout</Link>
            </span>
        </nav>
    );
}

export default NavItem;