import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function About() {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        let response
        response = getUsers().then(r => {
            setProfiles(r)
        })
    }, [])

    const url = "https://jsonplaceholder.typicode.com/users"
    async function getUsers() {
        let response
        await axios.get(url)
            .then(r => response = r.data)
            .catch(err => response = err)

        return response
    }

    return (
        <>
            <Head>
                <title>Blog Done</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Header></Header>
            <div className='container' style={{ marginTop: '65px' }}>
                {profiles.filter((p) => p.id == 1).map((profile) => (
                    <div className={'row mt-3'} style={{ background: '#F5FFFA', borderRadius: '15px' }}>
                    <div className={'col'}>
                        <span>
                            <Link href={"/About"} className={"nav-link"}>
                                <img className={'mt-2'} style={{ borderRadius: '50%', width: '45px', height: '45px' }} src={'../../assets/img/carlos-cypriano.jpg'} alt='profile'></img>
                            </Link>
                        </span>
                        <span className={'ms-1'}>{profile.username}</span>

                        <div></div>
                    </div>
                </div>
                ))}
            </div>


        </>
    )
}