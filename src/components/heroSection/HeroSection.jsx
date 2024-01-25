import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <div>
    {mode==="dark" ? <img src='https://scontent.fblr12-1.fna.fbcdn.net/v/t39.30808-6/421830795_1070514164163432_7902704761833429199_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=rOUGtlBOeR4AX9r70Fs&_nc_ht=scontent.fblr12-1.fna&oh=00_AfB8pFQAgCdz7We3eeFipzIcu6hLUl0PH9rW6uSB_onrHg&oe=65B784A2' alt=''/> : 
    <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />
    }
        
    </div>
  )
}

export default HeroSection