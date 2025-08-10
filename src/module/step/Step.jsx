import React from "react"
import phone_img from '../../resources/img/phone.jpeg'
import app_storeA from '../../resources/img/app_storeA.jpeg'
import app_store_logo from '../../resources/img/app_store_logo.jpeg'

function Step() {
    return (
        <div>
            <section className="section-step" id="hiw" data-aos="fade-in" data-aos-duration="2000">
                <div className="row h2-box">
                    <h2>How it works &mdash; Simple as 1,2,3</h2>
                </div>
                <div className="row">
                <div className="col span_1_of_2 steps-dox phone">
                    <img data-aos="slide-left" data-aos-duration="1000" src={phone_img} alt="phone-image" className="app-screen" />
                </div>
                <div className="col span_1_of_2 steps-box app">
                    <div className="works-step">
                        <div>1</div>
                            <p>Choose plan that fits best for your need.</p>
                        </div>
                        <div className="works-step">
                            <div>2</div>
                            <p>Pay for the plan & download the app.</p>
                        </div>
                        <div className="works-step">
                            <div>3</div>
                            <p>You are done start ordering!!</p>
                        </div>
                        <a className="btn-app" href="#"><img src={app_storeA} alt="app-store" /></a>
                        <a className="btn-app" href="#"><img src={app_store_logo} alt="app-store" /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Step