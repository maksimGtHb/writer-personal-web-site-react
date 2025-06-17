import './HomePage.css'

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Keeley Evans</h1>
      </header>
        <p>Welcome to my personal web page. Here I will tell you about my job.</p>
        <div class = "greeting-image-block">
        <img src={`${process.env.PUBLIC_URL}/forest.jpg`} alt="Forest image" width="700" />
        <div class = "overlay-text">
          <h2>Writer, journalist for travel sphere</h2>
        </div>
        </div>
    </div>
  );
}

export default HomePage;