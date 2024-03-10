import { useState } from "react";
import './Carousel.css'
export default function Carousel({srcSt, maxLen}: any) {
    const [currId, setCurrId] = useState(1);
    function prev() {
        setCurrId(Math.max(1, currId-1));
    }
    function next() {
        setCurrId(Math.min(maxLen, currId+1));
        
    }
    let arr = Array.from({length:maxLen}, (_, idx:number)=> idx+1);
    
    return (
        <div className='carousel-holder d-flex align-items-center'>
            <div className={`Prev ${(currId==1)?'hideSlide':''}`} onClick={prev}>&#8250;</div>
            <div className="slider">
               { arr.map((idx: number) => 
                    <img key={idx+1011} src={`${srcSt}/${idx}.png`}
                    className={`proj-img-carousel ${(idx == currId)?'activeSlide':''}`}
                    alt="project-image" />
                )}
            </div>
            <div className={`Next ${(currId==maxLen)?'hideSlide':''}`} onClick={next}>&#8250;</div>
        </div>
    )
}