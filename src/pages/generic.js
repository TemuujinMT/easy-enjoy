import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic02.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>About - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Цахим хичээл</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Уучилаарай хөгжүүлэлт хийгдэж байна</p>
                    <p>Системийн админд хандана уу.</p>
                    <p>mail: temuujin.mt@outlook.com</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic