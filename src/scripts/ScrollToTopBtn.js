import React,{useState,useEffect} from 'react'
import './ScrollToTopBtn.css'

export default function ScrollToTopBtn() {
    const [open, setOpen] = useState(false);

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY > 100)
        {
           // console.log(">100");
          setOpen(true);
        }else
        {
            //console.log("<100");
          setOpen(false);
        }
      })
    },[])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }

  return (
    <div>
        {open && (
             <button className='scrolltotopbtn' onClick={scrollUp}>
              <div className='scrolltotopbtn-font'>^</div>
             </button>
        )}
       
    </div>
  )
}
