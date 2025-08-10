import React from "react"

function Footer() {
    return (
        <div>
            <footer>
        <div className="row">
            <div className="col span_1_of_2">
                <ul className="footer-nav">
                    <li><a href="#">About as</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">IOS App</a></li>
                    <li><a href="#">Android App</a></li>
                </ul>
            </div>
            <div className="col span_1_of_2">
                <ul className="social-links">
                    <li><a href="#"><ion-icon class="fb" name="logo-facebook"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="twitter" name="logo-twitter"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="google" name="logo-google"></ion-icon></a></li>
                    <li><a href="#"><ion-icon class="insta" name="logo-instagram"></ion-icon></a></li>
                </ul>
            </div>
        </div>
        <div className="rows">
            <p className="copyright">Copyrigh &copy; 2023 Omnifood. All rights reserved.</p>
        </div>
    </footer>
    
        </div>
    )
}
export default Footer