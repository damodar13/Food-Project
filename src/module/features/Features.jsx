import React from'react'
function Features() {
    return (
        <div><section className="section-features" id="feature">
        <div className="row">
            <h2>Get Food Fast &mdash; Not Fast Food</h2>
            <p className="long-copy">
                Hello, we're Omnifood, your new premium food delivery Service.
                We Knowe you'rs always busy. No time for cooking.So let 
                us take care of that,we're really good at it, we promise
            </p>
        </div>
        <div className="row">
            <div className="col span_1_of_4 box">
                <ion-icon className="icon-big" name="infinite-outline"></ion-icon>
                <h3>Up to 360 days/year</h3>
                <p>With our service, you can order delicious, healthy meals any day of the year. We deliver up to 360 days annually, ensuring you never have to worry about your next meal. </p>
            </div>
            <div className="col span_1_of_4 box">
                <ion-icon className="icon-big" name="alarm-outline"></ion-icon>
                <h3>Ready in 20 minutes</h3>
                <p>Our meals are prepared with speed and care, ensuring you receive your food within 20 minutes. Enjoy fresh, healthy dishes without the wait, perfect for your busy lifestyle.</p>
            </div>
            <div className="col span_1_of_4 box">
                <ion-icon className="icon-big" name="fast-food-outline"></ion-icon>
                <h3>100% Organic</h3>
                <p>We prioritize your health with 100% organic ingredients. Our meals are crafted from the finest organic produce, ensuring you enjoy nutritious and delicious food every time.</p>
            </div>
            <div className="col span_1_of_4 box">
                <ion-icon className="icon-big" name="cart-outline"></ion-icon>
                <h3>Order Anything</h3>
                <p>With our service, you can order anything your heart desires. From gourmet meals to quick snacks, we cater to all your cravings. Enjoy a diverse menu that satisfies every taste and preference.</p>
            </div>
        </div>
    </section></div>
    )
}
export default Features;