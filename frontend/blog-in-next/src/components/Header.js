import Link from "next/link"

export default function Header() {
    return (
        <>
            <header>
                <nav className={"navbar navbar-expand-sm fixed-top bg-warning text-white"}>
                    <div className={"container-fluid"}>
                        <Link id="logo" href="/" className={"navbar-brand ms-4"}>
                            <span className={"text-danger"}>&lt;</span><span className={"text-white"}>Blog</span><span style={{color: "#FF4500"}}>Done</span><span
                                className={"text-danger"}>&frasl;&gt;</span>
                        </Link>
                        <button className={"navbar-toggler custom-toggler"} type="button" data-bs-toggle="collapse"
                            data-bs-target="#navegacao-principal" aria-controls="navegacao-principal" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className={"navbar-toggler-icon"}>
                                <i className={"fi-xwluxl-three-bars-wide"}></i>
                            </span>
                        </button>
                        {/* <div className={"collapse navbar-collapse"} id="navegacao-principal">
                            <ul id="navegacao" className={"navbar-nav ms-auto"}>
                                <li className={"nav-item"}>
                                    <Link href={"/"} className={"nav-link"}>Home</Link>
                                </li>
                                <li className={"nav-item"}>
                                    <Link href={"/About"} className={"nav-link"}>Sobre</Link>
                                </li>

                            </ul>
                        </div> */}
                    </div>
                </nav>
            </header>
        </>
    )
}