
import './OffersPage.css';


const OffersPage = () => {

   
    const handleScroll = () => {
        const duration = 2000; 
        const start = window.scrollY;
        const startTime = performance.now();
      
        const scrollStep = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1); 
          const easeInOutQuad = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;
      
          window.scrollTo(0, start * (1 - easeInOutQuad));
      
          if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
          }
        };
      
        requestAnimationFrame(scrollStep);
      };

    return (
     
     
        <div class="offers" id="services-and-products">
        
           <div class="offer">
            <div class="offer-header">
            <div class="offer-title">Standard article writing</div>
            <div class="offer-price">50-100$</div>
            </div>
           <div class ="offer-description">A topic article with author's text and customer's content</div>
           </div>
        

           <div class="offer">
           <div class="offer-header">
             <div class ="offer-title">Article with exclusive material</div>
             <div class="offer-price">100-120$</div>
            </div>
            <div class ="offer-description">Publication with content gathered by author</div>
            </div>

           <div class="offer">
           <div class="offer-header">
           <div class ="offer-title">Research article</div>
           <div class="offer-price">200-300$</div>
           </div>
           <div class="offer-description">Official publication based on unique learned information</div>
           </div>

           <div class="offer">
            <div class="offer-header">
            <div class="offer-title">Big release about journey or event </div>
            <div class="offer-price">from 1000$</div>
            </div>
           <div class="offer-description">Large event report with possibility of a business trip</div>
           </div>


           <div class="offer">
            <div class="offer-header">
            <div class="offer-title">Local event publication </div>
            <div class="offer-price">from 300$</div>
            </div>
           <div class="offer-description">Conducting reportage followed by an official publication</div>
           </div>


           <div class="offer">
            <div class="offer-header">
            <div class="offer-title">Publication proofreading </div>
            <div class="offer-price">100-200$</div>
            </div>
           <div class="offer-description">Text analysis and editing if required</div>
           </div>

           <div class="offer">
            <div class="offer-header">
            <div class="offer-title">Cooperative travel material </div>
            <div class="offer-price">from 3000$</div>
            </div>
           <div class="offer-description">Participation in trips as a mandatory journalist</div>
           </div>
          
           <h1 class = "products-title">Products</h1>

           
           <div class="products">

            <div class = "card">
             <img src = {`${process.env.PUBLIC_URL}/product1.png`}></img>
             <h3>Author's content</h3>
             <p>10$ per exploited article</p>
             <button class = "card-button">Purchase</button>
            </div>

            <div class = "card">
             <img src = {`${process.env.PUBLIC_URL}/product2.png`}></img>
             <h3>Professional photos</h3>
             <p>20$ per exploited digital photo</p>
             <button class = "card-button">Purchase</button>
            </div>

            <div class = "card">
             <img src = {`${process.env.PUBLIC_URL}/book.png`}></img>
             <h3>Book</h3>
             <p>28$</p>
             <button class = "card-button">Purchase</button>
            </div>

           </div>
           <div class ="hr-lines">
           <hr size="3" color = "#333" width = "100%"/>
           </div>
           
           <div class = "finishing-block" id ="conclusion">
           <img src ={`${process.env.PUBLIC_URL}/finishingImg.jpg`} alt="finishingImg" class="finishingImg"></img>
           <p>I will be waiting for your orders and ideas in submitted form</p>
           <button onClick = {handleScroll}> Back to top</button>
           <a href="/">Subscribe to information updates</a>
           </div>
          </div>


    );
}


export default OffersPage; 
