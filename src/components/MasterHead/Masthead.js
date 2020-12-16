import React from 'react'
import './Masthead.css'
export default function Masthead() {
    // const style={
    //     bottom: "-20px",
    //     left: "0px",
    //     position: "absolute"
    // }
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Meet your match, Zuckerberg.</h1>
                    <h2 className="lead">Boost your productivity and reclaim your free time by<br/> blocking distracting websites, games and applications.</h2>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Download Now</a>
                    <div className="image">
                    </div> 
                </div>               
            </div>
        </div>
    )
}
