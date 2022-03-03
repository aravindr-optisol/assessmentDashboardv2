import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
import style from '../../../styles/BySpaceNavItem.module.css'
const BySpaceNavItem = () => {

    const router = useRouter();
    return (
        <div className={style.BuyingSpaceNav}>
        <span className={router.pathname==="/buyingspace/channels" ? style.BuyingSpaceNavActive : ""}>
        <Link href="/buyingspace/channels">Channels</Link>
        </span>
        <span className={router.pathname==="/buyingspace/spaces" ? style.BuyingSpaceNavActive : ""}>
          <Link href="/buyingspace/spaces">Spaces</Link>
        </span>
      </div>
    );
}

export default BySpaceNavItem;