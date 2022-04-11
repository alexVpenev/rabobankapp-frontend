import leftArrow from '../images/left_arrow.png'
import rightArrow from '../images/right_arrow.png'
 
export default function BtnSlider({direction, moveSlide}){
    return(
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow}/>
        </button>
    )
}