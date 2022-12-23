const NavBar = (props) => {
    return ( 
        <nav className="navbar">
            <h1> Gwabstech Solutions</h1>
            <div className="links">
                <a href={props.homeLink}>Home </a>
                <a href={props.contactUsLink}> Contact Us</a>
                <a href={props.aboutLink}> About Us </a>
                <a href={props.projectsLink}> Projects </a>
            </div>

        </nav>
     );
}
 
export default NavBar;