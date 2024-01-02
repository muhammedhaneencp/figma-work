import React from 'react'
import image1 from './images/hero img1.png'
import image2 from './images/hero img2.png'
import image3 from './images/Arrow down.png'

const HeroSection = () => {
  return (
    <div>
        <div className="hero-section">
                <div className="first-div">
                <p className='interior'>interior design</p>
                <p>
                Step into a world where the art of Interior Design is meticulously <br /> crafted to bring together timeless elegance and cutting-edge <br /> modern Innovation, Allowing you to transform your living spaces <br /> into the epitome of luxury and sophistication
                </p>

                <button className='startprjct'>start project</button>
                    <div className="hero-img">
                    <img className='firstimg' src={image1} alt="" />
                    <img className='second-img' src={image2} alt="" />
                    <img className='arrow-img' src={image3} alt="" />
                    </div>
                <div className="results">
                    <p className='result1'>400+ <br />project completed</p>
                    <p className='result1'>600+ <br />satisfied clients</p>
                    <p className='result1'>100+ <br />unique styles</p>
                </div>
                </div>
                <div className="second-div">
                </div>

            </div>
      
    </div>
  )
}

export default HeroSection
