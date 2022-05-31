import { Link, useNavigate } from "react-router-dom";

const Home = () =>{
    const cookieSrcList = ["./images/broken-cookie-0.png","./images/broken-cookie-1.png","./images/broken-cookie-2.png"]
    const navigate = useNavigate();

    const goToShop = (event, path) => {
        event.preventDefault();

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
            navigate(path)
        }, 3500);
    }

    

    return(
        <div>
            <Link id="home-button" to="/Shop" onClick={(e) => goToShop(e, "/Shop")}>
                <img src={cookieSrcList[0]} alt="LET'S SHOP!" id="cookie-button" />
            </Link>
        </div>
    );
};


export default Home;