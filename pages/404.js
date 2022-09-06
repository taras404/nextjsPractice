import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFoundPage = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className='not-found'>
            <h1>Ой</h1>
            <h2>Щось пішло не так</h2>
            <p>Перейти на <Link href='/'><a>Головну</a></Link></p>
        </div>
    )
}

export default NotFoundPage