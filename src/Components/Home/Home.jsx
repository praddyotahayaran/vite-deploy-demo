import React from 'react'
import './Home.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Home = () => {
    return (
        <div className="home">
            <Parallax pages={4}>

                <ParallaxLayer>
                    WEB DEVELOPMENT WEB
                </ParallaxLayer>

                <ParallaxLayer>
                    WEB DEVELOPMENT WEB
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Home


