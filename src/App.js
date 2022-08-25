import React from 'react'
import {Blog, Features, Footer, Header, Possibility, What} from './containers'
import { Article, Brand, Feature, Cta, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div>
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <What />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    </div>
  )
}

export default App