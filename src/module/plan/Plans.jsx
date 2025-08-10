import React from "react";

function Plans() {
    return (
        <div><section className="section-plans" id="plans" data-aos="fade-in" data-aos-duration="2000">
        <div className="row">
            <h2>Start Eating healthy today</h2>
        </div>
        <div className="row">
            <div className="col span_1_of_3  plan-box plan-box-part" >
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <h3>Premium</h3>
                    <p className="plan-price">499$<span>/month</span></p>
                    <p className="plan-price-meal">That only 8.316$ per meal</p>
                </div>
                <div>
                    <ul>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>2 meal every Day for 30 days</li>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Order 24*7</li>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Acces to newest creation</li>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Free Delivery</li>
                    </ul>
                </div>
                <div>
                    <a href="#" className="btn btn-full btno">Sign me up!</a>
                </div>
            </div>
            <div className="col span_1_of_3 plan-box plan-box-part">
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <h3>Pro</h3>
                    <p className="plan-price">199$<span>/month</span></p>
                    <p className="plan-price-meal">That only 10.905$ per meal</p>
                </div>
                <div>
                    <ul>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>1 meal every Day for 30 days</li>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Order 24*7</li>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Acces to newest creation</li>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Free Delivery</li>
                    </ul>
                </div>
                <div>
                    <a href="#" className="btn btn-full btno">Sign me up!</a>
                </div>
            </div>
            <div className="col span_1_of_3 plan-box plan-box-part">
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <h3>Starter</h3>
                    <p className="plan-price">19$<span>/meal</span></p>
                    <p className="plan-price-meal">Only one meal</p>
                </div>
                <div >
                    <ul>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Only 1 meal</li>
                        <li><ion-icon className="icon-small" name="checkmark-outline"></ion-icon>Order 24*7</li>
                        <li><ion-icon className="icon-small" name="close-outline"></ion-icon>Acces to newest creation</li>                            <li><ion-icon name="close-outline"></ion-icon>Free Delivery</li>
                    </ul>
                </div>
                <div>
                    <a href="#" className="btn btn-full btno">Sign me up!</a>
                </div>
            </div>
        </div>               
    </section>
    </div>
    )
}
export default Plans;