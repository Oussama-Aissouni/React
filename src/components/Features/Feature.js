import React ,{useState}from 'react';
import "./Feature.css";

export default function Feature() {
    const features = [
        {
            id: 1,
            header:"Lorem ipsum dolor sit amet.",
            p:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi ipsum sapiente aut dolore blanditiis?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quia quis natus dolor ad et ipsum tempore, odit consequuntur eaque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia excepturi in tenetur? Quibusdam, voluptas maiores."
            ],
            link:"Download Now",
        },
        {
            id: 2,
            header:"Lorem ipsum dolor sit amet.",
            p:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi ipsum sapiente aut dolore blanditiis?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quia quis natus dolor ad et ipsum tempore, odit consequuntur eaque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia excepturi in tenetur? Quibusdam, voluptas maiores."
            ],
            link:"See More Features",
        },
        {
            id: 3,
            header:"Lorem ipsum dolor sit amet.",
            p:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi ipsum sapiente aut dolore blanditiis?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores quia quis natus dolor ad et ipsum tempore, odit consequuntur eaque.",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia excepturi in tenetur? Quibusdam, voluptas maiores."
            ],
            link:"Learn More",
        },
    ];
    const Colors=["#0275d8","#5bc0de","#5cb85c","#f0ad4e","#d9534f","#292b2c"];
    const [bg,setBg]=useState();
    let i=0;
    function increment () { 
        setBg(Colors[i]);
        i=i+1;  
    }
    return (
        <div>
            {features.map(feature =>{
                if((feature.id%2)==1){
                    return(
                        <div style={{backgroundColor : "#a5d6a7 " }} className="features-container" >
                            <div className="mini-container col-xs-8 col-sm-7 col-md-8 col-lg-6 col-sm-offset-1 col-lg-offset-2 middle">
                                <h1 className="features-header">{feature.header}</h1>
                                <p className="features-paragraph">{feature.p}</p>
                                <a className="features-link" href="#">{feature.link}</a>
                                <button class="btn" onClick={increment} style={{backgroundColor :bg }}>Change Bg color</button>
                            </div>
                        </div>
                        );
                    }
                    else{
                        return(
                            <div style={{backgroundColor : "white"}} className="features-container" >
                                <div className="mini-container col-xs-8 col-sm-7 col-md-8 col-lg-6 col-sm-offset-1 col-lg-offset-2 middle">
                                    <h1 className="features-header">{feature.header}</h1>
                                    <p className="features-paragraph">{feature.p}</p>
                                    <a className="features-link" href="#">{feature.link}</a>
                                    <button class="btn" onClick={increment} style={{backgroundColor :bg }}>Change Bg color</button>
                                </div>
                            </div>
                            );
                    }
                }
                )}
        </div>
    )
}

