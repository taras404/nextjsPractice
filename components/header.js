import Link from 'next/link'
import {SiBurgerking} from 'react-icons/si'


const Header = () => {
    return (
        <header>
            <div>
              <SiBurgerking />
            </div>
            <nav>
              <Link href="/"><a>Головнa</a></Link>
              <Link href="/about"><a>Про нас</a></Link>
              <Link href="/reviews"><a>Відгуки</a></Link>
              <Link href="/burgers"><a>Бургери</a></Link>

            </nav>
        </header>
    )
}

export default Header