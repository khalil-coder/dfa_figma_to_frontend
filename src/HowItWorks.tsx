import "./HowItWorks.css"
function HowItWorks() {
    return (
        <section id="how-it-works-section">
            <div id="left-how-it-works-container">
                <div id="img-left-container">
                    <div className="image-card">
                        <img src="/src/assets/lady-1.png" alt="lady-1" />
                        <p>Product Analyst <span style={{ color: "#06942A", fontWeight: "bolder" }}>@ Paystack</span></p>
                    </div>
                    <div className="image-card">
                        <img src="/src/assets/man-2.png" alt="man-2" />
                        <p>Securities Trader <span style={{ color: "#06942A", fontWeight: "bolder" }}>@ Mckinnesy</span></p>
                    </div>
                </div>
                <div id="img-right-container">
                    <div className="image-card">
                        <img src="/src/assets/man-1.png" alt="man-1" />
                        <p>HR Manager <span style={{ color: "#06942A", fontWeight: "bolder" }}>@ Paystack</span></p>
                    </div>
                </div>
            </div>
            <div id="right-how-it-works-container">
                <h2 style={{ fontFamily: 'Graphik-Bold' }}>How it works</h2>
                <p className="how-it-works-par">Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.</p>
                <div>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
                        <img src="/src/assets/checked.png" alt="checked" /> <h3>Search Jobs</h3>
                    </div>
                    <p className="how-it-works-par" style={{marginTop: 0}}>We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.</p>
                </div>
                <div>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
                        <img src="/src/assets/checked.png" alt="checked" /> <h3>Create a Profile and Get Noticed</h3>
                    </div>
                    <p className="how-it-works-par" style={{marginTop: 0}}>Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
                </div>
                <div>
                    <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
                        <img src="/src/assets/checked.png" alt="checked" /> <h3>Apply for Jobs</h3>
                    </div>
                    <p className="how-it-works-par" style={{marginTop: 0}}>Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.</p>
                </div>
            </div>
        </section>
    );
}
export default HowItWorks;