import React from 'react'
import '../cssFiles/Home.css';
import { Product } from '../components';


// option+z for wrapping the line on the screen

function Home() {
  return (
    <div className='Home'>
        <div className='home-container'>
            <img className='home-img' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='amazon background' />
            <div className='home-row'>
              <Product
                id="121212"
                title="Greenlights By Matthew McConaughey" 
                price='25.99'
                image="https://assets.onbuy.com/i28/product/9dcb40af42e84ddabfa5abcf9c03251e-l80722613/greenlights-by-matthew-mcconaughey-autobiography-54940687.jpg"
                rating={4}
               />
              <Product
                id="131313"
                title="HP 14 Laptop, 14-inch HD Touchscreen" 
                price='337.99'
                image="https://i5.walmartimages.com/asr/b3ef9758-c8c0-458e-b94f-731fc6339303_1.941c839ba2a828bba76f78ae22f8f2b5.jpeg"
                rating={4}
               />
            </div>
            <div className='home-row'>
              <Product
                id="141414"
                title="Sony ZX Series Wired On-Ear Headphones" 
                price='45.57'
                image="https://m.media-amazon.com/images/I/71kYRBupfUL._AC_SL1500_.jpg"
                rating={4}
              />
              <Product
                id="151515"
                title="Ray-Ban RB3548n hexagonal flat lens sunglasses" 
                price='119.99'
                image="https://slimages.macysassets.com/is/image/MCY/products/2/optimized/3644802_fpx.tif?wid=1200&fmt=jpeg&qlt=100"
                rating={4}
              />
              <Product
                id="161616"
                title="Tool Set General Household hand-kit with plastic storage" 
                price='39.59'
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW15lyQcp43R-OWOhfm_ibSYCYxN0OrvOPIf2vxkMp1xNjem_XJce_llGbb3SB4xz7j68&usqp=CAU"
                rating={3}
              />
            </div>
            <div className='home-row'>
              <Product
                id="171717"
                title="KISS Gel FANTASY Ready-to-Wear Gel Fake Nails - Nude" 
                price='9.99'
                image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586287822-2539958-1586287815.jpg"
                rating={3}
              />
            </div>
        </div>
    </div>
  )
}

export default Home