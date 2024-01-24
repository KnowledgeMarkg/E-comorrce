import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <div>
    {mode==="dark" ? <img src='https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg' alt=''/> : 
    <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />
    }
        
    </div>
  )
}

export default HeroSection