const Home = (probs) => {
    function handleClick(e){
       alert("You Click!",e);
    }
    return (  
        <div className="home">
            <h2>This is the home page {probs.number} </h2>
            <button onClick={(e)=> handleClick(e)}
            style={{ backgroundColor: "blue", borderRadius: "10px", margin: "10px" }}>Click me</button>
        </div>
    );
}
 
export default Home;