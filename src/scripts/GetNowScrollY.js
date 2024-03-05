import { useState, useEffect } from "react";

export function GetNowScrollY(){


    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset((window.scrollY/(document.documentElement.offsetHeight-window.innerHeight)*100).toFixed(0));
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return offset;
  };
  