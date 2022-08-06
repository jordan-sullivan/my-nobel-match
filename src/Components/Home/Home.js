// import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import './Home.css';
// import Quiz from "../Quiz/Quiz"
// import Results from "../Results/Results"
// import External from "../External/External"

const Home = () => {

    return(

        <div className="homeDiv">
            <div className="homeText">
                <h1 className="title">My Nobel Match</h1>
                <h2 className="subTitle">Take the which to see which<br/>Nobel laureate you are!</h2>
                <Link to="/quiz">
                    <button className="go">GO</button>
                </Link>
            </div>
        </div>
    )
}

export default Home