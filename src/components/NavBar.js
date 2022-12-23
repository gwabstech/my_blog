const NavBar = (props) => {
    return (
        <nav className="navbar">
            <h1> Gwabstech Solutions</h1>
            <div className="links">
                <a href={props.homeLink} style={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}>Home </a>
                <a href={props.contactUsLink} style={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}> Contact Us</a>
                <a href={props.aboutLink} style={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}> About Us </a>
                <a href={props.projectsLink} style={{ backgroundColor: "white", borderRadius: "10px", margin: "10px" }}> Projects </a>
            </div>

        </nav>
    );
}

export default NavBar;