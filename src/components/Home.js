import React from 'react'
import Navbar from './Navbar'
import Textinput from './Textinput'
import ContactUs from './Contact'
import Footer from './Footer'


function Home() {
    return (
        <>
            {/* <Search /> */}
            {/* <Login /> */}
            {/* <Navbar title="TextHandle" home_active='active'/> */}
            <Textinput heading="Enter Text to Change" />
            {/* <ContactUs /> */}
            <Footer />
        </>
    )
}

export default Home;
