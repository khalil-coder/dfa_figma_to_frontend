import "./Testimonial.css"
function Testimonial() {
    return (
        <section id="testimonial-section">
            <h2>What are our customers saying</h2>
            <div id="testimonial-container">
                <div id="left-div-testimonial-section">
                    <div id="customer-img-container">
                        <img src="/src/assets/man-smiling-2.png" alt="" />
                    </div>
                </div>
                <div id="right-div-testimonial-section">
                    <div style={{ textAlign: "end", marginTop: "20px", marginRight: "40px" }}>
                        <img src="/src/assets/Prev Arrow.png" alt="prev-arrow" style={{ marginRight: "15px", width: "40px" }} />
                        <img src="/src/assets/Next Arrow.png" alt="next-arrow" style={{ width: "40px" }} />
                    </div>
                    <img src="/src/assets/quote.png" alt="quote.png" id="quote-img" />
                    <p className="customer-review">The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me</p>
                    <h3 className="customer-name">Irma Black</h3>
                    <h3 className="customer-role">HR Manager at MasterCard</h3>
                </div>
            </div>

            <div id="get-started-container">
                <h3>Get a job you actually like</h3>
                <p>Create an account and start applying</p>
                <button>Get started</button>
            </div>
        </section>
    )
}

export default Testimonial;