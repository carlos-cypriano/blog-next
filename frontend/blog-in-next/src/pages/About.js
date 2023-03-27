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
                    <div className={'col-md-6'}>
                        <span>
                            <Link href={"/About"} className={"nav-link"}>
                                <img className={'mt-2'} style={{ borderRadius: '50%', width: '45px', height: '45px' }} src={'../../assets/img/carlos-cypriano.jpg'} alt='profile'></img>
                            </Link>
                        </span>
                        <span className={'ms-1'}>{profile.username}</span>

                        <div className={'mb-3'}>
                            <h4 className={'mt-3'}>Name:</h4>
                            <p>{profile.name}</p>
                            <h4>User Name:</h4>
                            <p>{profile.username}</p>
                            <h4>E-mail:</h4>
                            <p>{profile.email}</p>
                        </div>
                    </div>
                    <div className={'col-md-6 mt-5'}>
                        <div className={'mb-3'}>
                            <h4>Address:</h4>
                            <p>Street: {profile.address.street}</p>
                            <p>Suite: {profile.address.suite}</p>
                            <p>City: {profile.address.city}</p>
                            <p>Zip-Code: {profile.address.zipcode}</p>
                            <p>Lat: {profile.address.geo.lat}</p>
                            <p>Lng: {profile.address.geo.lng}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>


        </>
    )
}