import "./RecommendedJobs.css"
const AVAILABLEJOBS = [
    {
        role: "QA Engineer",
        company: "Paystack",
        engagementType: "Full time",
        location: "Lagos, Nigeria",
        companyLogo: "/src/assets/paystack-logo.png"
    },
    {
        role: "Product Analyst",
        company: "Google",
        engagementType: "Part time",
        location: "Lagos, Nigeria",
        companyLogo: "/src/assets/google-icon.png"
    },
    {
        role: "HR Manager",
        company: "Flutterwave",
        engagementType: "Full time",
        location: "Abuja, Nigeria",
        companyLogo: "/src/assets/butterfly-like-icon.png"
    },
    {
        role: "QA Engineer",
        company: "Access Bank",
        engagementType: "Full time",
        location: "Lagos, Nigeria",
        companyLogo: "/src/assets/access-bank-logo.png"
    },
]
function RecommendedJobs() {
    return (
        <section id="section-2">
            <h2>Recommended Jobs</h2>
            <div id="job-cards-container">
                {AVAILABLEJOBS.map((job, index) => (
                    <div key={index} className="job-card">
                        <div className="card-top">
                            <div style={{ textAlign: "right" }}>
                                <small style={{ fontWeight: "lighter", background: "#F4F5F9", color: "#9B9B9B", paddingInline: "12px", paddingBlock: "5px", borderRadius: "20px", marginRight: "15px" }}>{job.engagementType}</small>
                            </div>
                            <div style={{ padding: "2rem", borderBottom: "1px solid #E5E5E5", textAlign: "center" }}>
                                <img src={job.companyLogo} alt={`${job.company}-logo`} />
                                <h3 style={{ marginBottom: 0 }}>{job.role}</h3>
                            </div>
                        </div>
                        <div className="card-bottom">
                            <p style={{ margin: 0 }}>{job.company}</p>
                            <div className="card-footer">
                                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                                    <img src="/src/assets/location-mark.png" alt="landmark" height={"18px"}/><span style={{fontFamily: "Graphik-Light"}}>{job.location}</span>
                                </div>
                                <small>Apply Now</small>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div style={{textAlign: "end", marginTop: "20px", marginRight: "40px"}}>
                <img src="/src/assets/Prev Arrow.png" alt="prev-arrow" style={{marginRight: "15px"}} />
                <img src="/src/assets/Next Arrow.png" alt="next-arrow" />
            </div>
        </section>
    );
}

export default RecommendedJobs;