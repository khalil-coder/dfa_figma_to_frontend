import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div id="footer">
                <div id="logo-container">
                    <img src="/src/assets/getajob_logo-removebg-preview.png" alt="app-logo" />
                    <p>Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>
                </div>
                <div id="information-div">
                    <p>Information</p>
                    <div className="footer-div">
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Terms and Condition</a>
                    </div>
                </div>
                <div id="job-seeker-div">
                    <p>Job Seekers</p>
                    <div className="footer-div">
                        <a href="#">Create Account</a>
                        <a href="#">Job List</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>
                <div id="employer-div">
                    <p>Employers</p>
                    <div className="footer-div">
                        <a href="#">Create Account</a>
                        <a href="#">Post a Job</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>
                <div id="social-media-div">
                    <p>Social Media</p>
                    <div id="social-media-links-div">
                        <a href="#"><img src="/src/assets/Instagram.png" alt="Instagram.png" /></a>
                        <a href="#"><img src="/src/assets/Twitter.png" alt="Twitter.png" /></a>
                        <a href="#"><img src="/src/assets/Facebook.png" alt="Facebook.png" /></a>
                        <a href="#"><img src="/src/assets/Linkedin.png" alt="Linkedin.png" /></a>
                    </div>
                </div>
            </div>
            <p id="copyright-par">©Copyright Get-A-Job RMS 2019, All right reserved</p>
        </footer>
    )
}


export default Footer;