import Navbar from './Navbar'
import './App.css'
import RecommendedJobs from './RecommendedJobs'
import HowItWorks from './HowItWorks'
import PopularCategories from './PopularCategories'
import Testimonial from './Testimonial'
import Footer from './Footer'


function App() {
  return (
    <>
      <Navbar />
      <section id='section-1'>
        <div id='first-section-left-container'>
          <h1 style={{ marginBottom: 0, fontFamily: "Graphik-Bold" }}>Find a <span style={{ color: '#06942A' }}>job</span> easily</h1>
          <p style={{ fontFamily: "Graphik-Light" }}>With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
          <div style={{ display: "flex" }} id='homepage-bar'>
            <input type="text" name="" id="" placeholder='Enter keywords, skill, interest' />
            <div id='location-div'><img src="/src/assets/location-mark.png" alt="" /> Locations</div>
            <div id='search-div'><img src="/src/assets/search-icon.png" alt="" /></div>
          </div>
          <div>
            <p style={{ fontFamily: "Graphik-Bold" }}>Trusted by:</p>
            <div id='trusted-by-imgs-container'>
              <img src="/src/assets/paystack-removebg-preview.png" alt="paystack-image-grayscale" />
              <img src="/src/assets/google-removebg-preview.png" alt="google-image-grayscale" />
              <img src="/src/assets/kpmg-removebg-preview.png" alt="kpmg-image-grayscale" />
            </div>
          </div>
        </div>
        <div id='first-section-right-container'>
          <img src="/src/assets/man-smiling.png" alt="" />
        </div>
      </section>
      <RecommendedJobs />
      <HowItWorks />
      <PopularCategories />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
