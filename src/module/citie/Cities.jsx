import React from "react"
import lisbon from '../../resources/img/lisbon.jpeg'
import berlin from '../../resources/img/berlin.jpeg'
import san_francisco from '../../resources/img/San Francisco.jpeg'
import london from '../../resources/img/london.jpeg'

function Cities() {
    return (
        <div>
            <section className="section-cities" id="city" data-aos="fade-in" data-aos-duration="2000">
                <div className="row">
                    <h2>We are currently in these cities</h2>
                    </div>
                    <div className="row">
                    <div className="col span_1_of_4 box">
                        <img src={lisbon} alt="lisbon" />
                        <h3>Lisbon</h3>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="person-circle-outline"></ion-icon>1600+ Happy Customers
                        </div>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="star"></ion-icon>50+ Chefs
                        </div>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="logo-twitter"></ion-icon><a href="#" class="a-ion">@Omnifood_Lisbon</a>
                        </div>
                    </div>
                    <div className="col span_1_of_4 box">
                        <img src={berlin} alt="berlin" />
                        <h3>Berlin</h3>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="person-circle-outline"></ion-icon>1400+ Happy Customers
                        </div>
                        <div className="city-feature">
                                <ion-icon className="icon-small" name="star"></ion-icon>70+ Chefs
                        </div>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="logo-twitter"></ion-icon><a href="#" class="a-ion">@Omnifood_Berlin</a>
                        </div>
                    </div>
                    <div className="col span_1_of_4 box">
                        <img className="sanf" src={san_francisco} alt="san Francisco" />
                        <h3>San Francisco</h3>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="person-circle-outline"></ion-icon>1800+ Happy Customers
                        </div>
                        <div className="city-feature">
                                <ion-icon className="icon-small" name="star"></ion-icon>80+ Chefs
                        </div>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="logo-twitter"></ion-icon><a href="#" class="a-ion">@Omnifood_SanFrancisco</a>
                        </div>
                    </div>
                    <div className="col span_1_of_4 box">
                        <img src={london} alt="london" />
                        <h3>London</h3>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="person-circle-outline"></ion-icon>1900+ Happy Customers
                        </div>
                        <div className="city-feature">
                            <ion-icon className="icon-small" name="star"></ion-icon>70+ Chefs
                        </div>
                        <div className="city-feature ln_cf">
                            <ion-icon className="icon-small" name="logo-twitter"></ion-icon><a href="#" class="a-ion">@Omnifood_London</a>
                        </div>
                    </div>
                </div>
           </section>
        </div>
    )
}


export default  Cities