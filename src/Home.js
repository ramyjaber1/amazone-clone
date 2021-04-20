import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
        <div className="home__row">
        <Product 
                id = "12321341"
                title = "The Lean Startup" 
                price ={29.99}  
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                rating = {5}
        />
        <Product 
                id = "42321341"
                title = "Kenwood kmix Stand mixer for baking , Srtlish kitchen mixer with k-beater , dough hook and whisk , 5 Litre Glass bowl" 
                price ={239.00}  
                image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg" 
                rating = {4}
        />
        
        </div>
        <div className="home__row">
        <Product 
                id = "4903850"
                title = "Samsung LC49RG90SSUXEN 49 Curved LED GAming monitor" 
                price ={199.99}  
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg" 
                rating = {3}
        />
        <Product 
                id = "23445930"
                title = "Amazon Echo (3rd Generation) | Smart Speaker with alexa , charcoal Fabric " 
                price ={239.00}  
                image="https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg" 
                rating = {5}
        />
        <Product 
                id = "3254354345"
                title = "New Apple Ipad Pro (12.9 Inch , Wi-Fi . 128GB) - Silver (4th Generation)" 
                price ={598.99}  
                image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg" 
                rating = {4}
        />
        </div>
        <div className="home__row">
        <Product 
                id = "90828332"
                title = "Samsung LC49RG90SSUXEN 49 Curved LED GAming monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
                price ={598.99}  
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqBsB8axSNGmnPHOZrsGkTf6LTiZimqMso1A&usqp=CAU" 
                rating = {4}
        />
            
            </div>
            </div>
            </div>
    )
}

export default Home
