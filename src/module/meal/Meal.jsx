import React from "react"
import f1 from '../../resources/img/f1.jpg'
import f3 from '../../resources/img/f3.jpg'
import f4 from '../../resources/img/f4.jpg'
import f5 from '../../resources/img/f5.jpg'
import f6 from '../../resources/img/f6.jpg'
import f7 from '../../resources/img/f7.jpg'
import f8 from '../../resources/img/f8.jpg'
import f9 from '../../resources/img/f9.jpg'

function Meal() {
    return (
        <div><section className="meals-showcase" data-aos="fade-in" data-aos-duration="2000">
        <ul className="section-meals ul1 clearfix">
            <li>
                <figure className="meal-photo">
                    <img src={f1} alt="meal-1" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={f3} alt="meal-2" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={f4} alt="meal-3" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={f5} alt="meal-4" />
                </figure>
            </li>
        </ul>
        <ul className="section-meals ul2 clearfix">    
            <li>
                <figure className="meal-photo">
                    <img src={f6} alt="meal-5" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={f7} alt="meal-6" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={f8} alt="meal-7" />
                </figure>
            </li>
            <li>
                <figure className="meal-photo">
                    <img src={f9} alt="meal-8" />
                </figure>
            </li>
        </ul>
    </section></div>
    )
}
export default Meal