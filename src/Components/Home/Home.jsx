import React from 'react'
import './Home.css'
import thumb from '../../assets/thumb.jpg'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='home__heading'>Product Overview</h1>

            <div className="home__card">
                <div className="home__card-img">
                    <div className="home__card-creative">

                        <img src={thumb} alt="" />
                        <h3>Full Stack Developer</h3>

                        <button className="home__card-btnProfile">
                            View Profile
                        </button>
                        <div className="stats">
                            <span>86% Rating</span>
                            <span>92% Activity</span>
                        </div>
                    </div>
                </div>

                <div className="home__card-text">
                    <h2>People</h2>
                    <p>
                        A next generation HRIS that forms the core of
                        your people stack and programmatically drives
                        your people services, from time off to access
                        management, payroll to benefits. Minimise time
                        spent on admin using automation and
                        employee self-service.
                    </p>

                    <button className="home__card-btn">
                        Find out more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home