import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  return (
    <div className='pt-4 flex justify-center '>
    {mode==="dark" ? <img src='https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1702877280_untitled-1.jpg' alt=''/> : 
    <img src="https://media6.ppl-media.com/tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1702877280_untitled-1.jpg" alt="" />
    }
        
    </div>
  )
}

export default HeroSection