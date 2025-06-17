import React from "react";
import './StrenghtsPage.css';

const StrengthsPage = () => {

    return (

        <div class="strengths-page" id ="interesting">
            <h1>A wonderful experience</h1>
            <p>What a difference nature Barcelona has</p>

        <div className = "strengths-image-container">
            <figure>
            <a href="http://google.com">
            <img src = {`${process.env.PUBLIC_URL}/img1.jpg`} alt="img1" className="strengths-image"/>
            </a>
            <figcaption>Barcelona distinctive weather</figcaption>
            </figure>

            <figure>
            <a href="http://google.com">
            <img src = {`${process.env.PUBLIC_URL}/img2.jpg`}s alt="img2" className="strengths-image"/>
            </a>
            <figcaption>Wildlife off the coast of Barcelona</figcaption>
            </figure>

        </div>


        <p>Serbia's Secret tourist spots</p>

        <div className = "strengths-image-container">

        <figure>
            <a href="http://google.com">
            <img src = {`${process.env.PUBLIC_URL}/img3.jpg`} alt="img3" className = "strengths-image-big"/>
            </a>
            <figcaption>Which fascinating places can be hidden</figcaption>
            </figure>

        </div>

        <p>Slovenia Research</p>

        <div className = "strengths-image-container">
             
             <figure>
             <a href="http://google.com"> <img src = {`${process.env.PUBLIC_URL}/img4.jpg`} alt="img4" className="strengths-image"/></a>
             <figcaption>Lake Bled</figcaption>
             </figure>
            
            <figure>
                <a href = "http://google.com">  <img src = {`${process.env.PUBLIC_URL}/img5.jpg`} alt="img5" className="strengths-image"/></a>
            <figcaption>Urban space of Ljubljana</figcaption>
            </figure>
        
        </div>

        <div class = "whyThisProfession" >
            <img src = {`${process.env.PUBLIC_URL}/whyThisProfessionBackground.jpg`} alt="whyThisProfessionImg"></img>

            <div class = "whyThisProfessionView" id="why-this-profession">

            <div class = "whyThisProfessionText" > I love my profession and strive to gain useful experience. <br></br>
                I work with various tasks for writing.
                It takes some effort and optional approach to bring something to life in creativity. <br></br><br></br>
                That's why I'm open to new suggestions. 
                I may consider signing contracts or field trips for creating publications.<br></br><br></br>
                Let's do our favorite things together!  
                 </div>
                 <button>Request for consultation</button>
                 </div>
                 
        </div>

        </div>


    );
}

export default StrengthsPage; 
