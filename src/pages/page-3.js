import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const handleClick = (e) => {
    alert("CLICKED " + e.target.id);
}

const ThirdPage = () => (
    <Layout>
        <SEO title="Page with COW" />
        <div style={{display: `flex`}}>
            <div style={{maxWidth: `300px`, width: `50%`}}>
                <Image name={"cow.png"}/>
            </div>
            <button onClick={handleClick}>CLICK HERE</button>
            <div style={{width: `50%`}}>
                <p style={{color: `#dfaa12`}}>It is a cow!</p>
            </div>
        </div>
    </Layout>
)

export default ThirdPage