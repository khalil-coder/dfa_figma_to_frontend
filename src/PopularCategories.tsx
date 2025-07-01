import "./PopularCategories.css"
const POPULARCATEGORIES = [
    { category: "Oil and Gas", imgSrc: "/src/assets/oil-and-gas-icon.png", newJobCount: 20 },
    { category: "Healthcare", imgSrc: "/src/assets/healthcare-icon.png", newJobCount: 10 },
    { category: "Education", imgSrc: "/src/assets/education-icon.png", newJobCount: 10 },
    { category: "Accounting", imgSrc: "/src/assets/accounting-icon.png", newJobCount: 10 },
    { category: "Design, Art and Multimedia", imgSrc: "/src/assets/art-and-design-icon.png", newJobCount: 20 },
    { category: "Technology", imgSrc: "/src/assets/laptop-icon.png", newJobCount: 10 },
    { category: "Security", imgSrc: "/src/assets/security-icon.png", newJobCount: 10 },
    { category: "Data Analyst", imgSrc: "/src/assets/data-analysis-icon.png", newJobCount: 10 },

]
function PopularCategories() {
    return (
        <section id="popular-categories-section">
            <h1>Popular Categories</h1>
            <div id="categories">
                {POPULARCATEGORIES.map((job) => (
                    <div className="category-card">
                        <div style={{textAlign: "center"}}>
                            <img src={job.imgSrc} alt="" />
                            <p>{job.category}</p>
                            <small>({job.newJobCount} new jobs)</small>
                        </div>
                    </div>
                ))}
            </div>
            <div id="jobs-from-top-companies">
                <div id="bg-mid-div"></div>
                <div id="left-div-jobs-from-top-companies">
                    <h2>
                        Over  1000+  jobs from top companies in our network
                    </h2>
                    <p style={{marginTop: "30px", fontFamily: "Graphik-Light"}}>Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.</p>
                    <p style={{marginTop: "30px", fontFamily: "Graphik-Light"}}>Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.</p>
                    <button style={{marginTop: "15px"}}>Learn More <img src="/src/assets/Next Arrow.png" alt="next-arrow" width={"20px"}/></button>
                </div>
                <div id="company-brand-container">
                    <img id="uber-brand" src="/src/assets/uber-icon.png" alt="uber" />
                    <img id="nine-mobile-brand" src="/src/assets/9mobile-icon.png" alt="9mobile" />
                    <img id="zapier-brand" src="/src/assets/zapier-icon.png" alt="zapier" />
                    <img id="google-brand" src="/src/assets/g-icon.png" alt="google-icon" />
                    <img id="airtel-brand" src="/src/assets/airtel-icon.png" alt="flutterwave" />
                    <img id="accenture-brand" src="/src/assets/accenture-icon.png" alt="accenture" />
                    <img id="flutterwave-brand" src="/src/assets/flutterwave-icon.png" alt="flutterwave" />
                    <img id="mckinsey-brand" src="/src/assets/mckinsey-icon.png" alt="mckinesy" />
                </div>

            </div>
        </section>
    )
}
export default PopularCategories;