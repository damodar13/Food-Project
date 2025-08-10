import React from "react"

function Form() {
    return (
        <div>
            <section className="section-form" id="signup" data-aos="fade-in" data-aos-duration="2000">
        <div className="row">
            <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
            <form action="#" method="post" className="contact-form">
                <div className="row">
                    <div className="col span_1_of_3">
                        <label>Name</label>
                    </div>
                    <div className="col span_2_of_3">
                        <input type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col span_1_of_3">
                        <label>Email</label>
                    </div>
                    <div className="col span_2_of_3">
                        <input type="email" id="email" name="email" placeholder="Your Email" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col span_1_of_3">
                        <label>How did you find us ?</label>
                    </div>
                    <div className="col span_2_of_3">
                        <select name="find-us" id="find-us">
                            <option value="Select option">Select</option>
                            <option value="friend">Friend</option>
                            <option value="search">Search Engine</option>
                            <option value="ad">Advertisement</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col span_1_of_3">
                        <label>Newsletter</label>
                    </div>
                    <div className="col span_2_of_3">
                        <input type="checkbox" name="news" id="news" placeholder="Your Name" checked/>
                    </div>
                </div>
                <div className="row">
                    <div className="col span_1_of_3">
                        <label>Drop a line</label>
                    </div>
                    <div className="col span_2_of_3">
                        <textarea name="ta" id="ta" rows="10" cols="30" placeholder="Your Name" required ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col span_1_of_3">
                        <label>&nbsp</label>
                    </div>
                    <div className="col span_2_of_3">
                        <input type="submit" value="submit" class="btn btn-full btno" placeholder="Your Name"/>
                    </div>
                </div>
            </form>
        </div>
    </section>
        </div>
    )
}
export default Form