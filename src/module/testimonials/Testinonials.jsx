import React from "react"
import cust1 from '../../resources/img/cust1.avif'
import cust2 from '../../resources/img/cust4.jpeg' 
import cust3 from '../../resources/img/cust3.jpeg'

function Testimonials () {
    return (
        <div><section className=" section-testimonials clearfix" data-aos="fade-in" data-aos-duration="2000">
        <div className="row h2_cust">
            <h2>Our Customers cant't live without us</h2>
        </div>
        <div className="row">
            <div className="col span_1_of_3">
                <blockquote>
                    Omnifood has completely changed the way I eat! As someone with a hectic work schedule,
                    I never had time to cook healthy meals. Now, I get fresh, nutritious dishes delivered 
                    daily right to my doorstep. It's like having a personal chef in Berlin!
                    <cite><img src={cust1} alt="customer-1" />Amelia Richter</cite>
                </blockquote>
            </div>
            <div className="col span_1_of_3">
                <blockquote>
                    Absolutely love Omnifood! The quality of the meals is top-notch, and the variety keeps it exciting 
                    every day. It's perfect for anyone who wants to eat clean without spending hours in the kitchen. I’ve 
                    recommended it to all my mates in London!
                    <cite><img src={cust2} alt="customer-2" />James Thornton</cite>
                </blockquote>
            </div>
            <div className="col span_1_of_3">
                <blockquote>
                    I’ve tried many food delivery services, but none compare to Omnifood. The meals are packed with 
                    flavor and nutrients, and I feel more energetic throughout the day. Lisbon needs more startups 
                    like this!
                    <cite><img src={cust3} alt="customer-3" />Miguel Ferreira</cite>
                </blockquote>
            </div>
        </div>
    </section></div>
    )
}
export default Testimonials