import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
   
  let navBarProps = {
    homeLink: "jhfkzhkghzkfgkf",
    contactUsLink: "09030863146",
    aboutLink: "jkgnfjkgnkfjkg" ,
    projectsLink: "jkgnfjkgnkfjkg"

  };

  const number = "09030863146"
  return (
    <div className="App">
      <NavBar 
      homeLink={navBarProps.homeLink}
      contactUsLink = {navBarProps.contactUsLink} 
      aboutLink = {navBarProps.aboutLink}
      projectsLink = {navBarProps.projectsLink}/>
      <Home number= {number}/>


    </div>
  );
  
 
}

export default App;
