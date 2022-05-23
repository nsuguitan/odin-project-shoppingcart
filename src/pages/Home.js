const Home = () =>{
    const cookieSrcList = ["./images/broken-cookie-0.png","./images/broken-cookie-1.png","./images/broken-cookie-2.png"]

    const goToShop = () =>{

        setTimeout(() => {
            document.getElementById("cookie-button").src=cookieSrcList[1]
        }, 1000);
        setTimeout(() => {
            document.getElementById("cookie-button").src=cookieSrcList[2]
        }, 2000);
        setTimeout(() => {
            document.getElementById("cookie-button").style.visibility = "hidden"
        }, 2500);
        setTimeout(() => {
            window.location.href = "/Shop";
        }, 3500);
    }

    

    return(
        <div>
            <button id="home-button" >
                <img src={cookieSrcList[0]} alt="LET'S SHOP!" id="cookie-button" onClick={goToShop}/>
            </button>
        </div>
    );
};


export default Home;