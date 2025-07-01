function Navbar() {

    return (
        <main style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img style={{marginTop: "10px"}} src="/src/assets/getajob_logo-removebg-preview.png" alt="brand-logo" />
            <nav style={{ display: "flex", gap: "2em", fontSize: "16px" }}>
                <a href="">Companies</a>
                <a href="">Candidates</a>
                <a href="">Assessments</a>
                <a href="">Post a Job</a>
                <a href="">Career Advice</a>
            </nav>
            <div style={{ display: "flex", gap: "2em", fontSize: "16px", alignItems: "center" }}>
                <a href="#">Sign Up</a>
                <a style={{
                    fontWeight: 600, backgroundColor: "#06942A14", color: "#06942A", fontSize: "16px",
                    borderRadius: "30px", paddingInline: "3em", paddingBlock: "10px",
                }}>
                    Log In
                </a>

            </div>
        </main>
    )
}

export default Navbar