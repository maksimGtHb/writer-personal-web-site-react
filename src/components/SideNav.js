import React, {useState} from "react"
import {Side, Point, Toggle} from "./SideNavStyle";

const SideNav = () => {

    const [isVisible, setIsVisible] = useState(true);

    const toggleNav = () => {
    setIsVisible(!isVisible);
    };
    return(

   



        <>
        <Toggle onClick = {toggleNav}>
 
           content
            <img src={`${process.env.PUBLIC_URL}/arrowDown.png`}
         
         style={{ width: "0.8em", filter: "invert(100%)", marginLeft: "0.4em",  verticalAlign: "middle" 
            
            }}
         />
            
            {isVisible}
        </Toggle>
        {isVisible && (
        <Side>
        <Point onClick = {(e) => 
        {e.preventDefault(); 
        document.getElementById("introduction").scrollIntoView({behavior: "smooth"});
        }}>• Introduction</Point>

        <Point onClick = {(e) => {e.preventDefault(); 
        document.getElementById("interesting").scrollIntoView({behavior: "smooth"});
        }}>• Interesting</Point>

        <Point onClick = {(e) => {e.preventDefault(); 
        document.getElementById("why-this-profession").scrollIntoView({behavior: "smooth"});
        }}>• Why this profession</Point>

        <Point onClick = {(e) => {e.preventDefault(); 
        document.getElementById("services-and-products").scrollIntoView({behavior: "smooth"});
        }}>• Services and products</Point>

        <Point onClick = {(e) => {e.preventDefault(); 
        document.getElementById("conclusion").scrollIntoView({behavior: "smooth"});
        }}>• Conclusion</Point>

        </Side>
            )}
        </>

    )
}


export default SideNav;