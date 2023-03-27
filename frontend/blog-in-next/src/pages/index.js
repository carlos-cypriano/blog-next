import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header'
import { ReactDOM, ReactElement } from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Home() {

  <Head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css'></link>
  </Head>

  /*serve pra pegar os dados que estão sendo extraido da api,
   e setar esses dados dentro do código html*/
  const [profiles, setProfiles] = useState([])
  const [posts, setPosts] = useState([])
  const [data, setData] = useState(false)


  // const enviarForm = (e) => {
  //       e.preventDefault()
  //       setData(data)
  // }

  //serve para extrair os dados vindo da API
  useEffect(() => {
    let response
    response = getUsers().then(r => {
      setProfiles(r)
    })
  }, [])

  useEffect(() => {
    let res
    res = getPosts().then(r => {
      setPosts(r)
    })
  }, [])


  // const url = "https://custom-api-profiles.vercel.app/"
  const url = "https://jsonplaceholder.typicode.com/users"
  async function getUsers() {
    let response
    await axios.get(url)
      .then(r => response = r.data)
      .catch(err => response = err)

    return response
  }

  const url2 = "https://jsonplaceholder.typicode.com/posts"
  async function getPosts() {
    let response
    await axios.get(url2)
      .then(r => response = r.data)
      .catch(err => response = err)

    return response
  }


  return (
    <>
      <Head>
        <meta name="description" content="Melhor blog de notícias"/>
        <meta name="author" content="Blog Done, desenvolvimento de softwares"/>
        <meta name="keywords" content="Notícias,Melhor,Blog"/>
        <meta name="robots" content="index, nofollow"/>
        <title>Blog Feito</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <div className={'container'} style={{ marginTop: '65px' }}>
        {profiles.map((profile) => (
          posts.filter((p) => p.id <= 2).map((post) => (
            <div className={'row mt-3'} style={{ background: '#F5FFFA', borderRadius: '15px' }}>
              <div className={'col'}>
                <span>
                  <Link href={"/About"} className={"nav-link"}>
                    <img className={'mt-2'} style={{ borderRadius: '50%', width: '45px', height: '45px' }} src={'../../assets/img/carlos-cypriano.jpg'} alt='profile'></img>
                  </Link>
                </span>
                <span className={'ms-1'}>{profile.username}</span>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                  <div style={{ textAlign: 'center' }}>
                    <img className={'mb-3'} style={{ height: '500px', width: '500px', borderRadius: '10px' }} src='https://imgs.search.brave.com/xQFm-5vxLqBgHilGAShoQhtPYfDRY6zWlhK5nQ0d4pY/rs:fit:1024:684:1/g:ce/aHR0cDovL3d3dy5z/ZXVwb3N0LmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wMi8xMDAtc2Vn/cmVkb3MtZGFzLXBl/c3NvYXMtZmVsaXpl/cy5qcGc'></img>
                  </div>
                </div>
                <div>
                  <button className={'btn btn-warning mb-2'} type="submit" onClick={() => setData(!data)}>comments</button>
                  {
                    data && (
                      <div style={{ borderRadius: "15px", background: "#F4A460", minHeight: "50px" }} className={'ps-2 mb-4'}>{post.body}</div>
                    )
                  }
                </div>
              </div>
            </div>
          ))
        ))}
      </div>

    </>
  )
}
