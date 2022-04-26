import React, {useState, useEffect} from "react";

const App = () => {
  const[quote, setQuote] = useState("");  
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNumb = Math.floor(Math.random() * data.length); //generates random number 
        setQuote(data[randomNumb]); //get the random quote   
      });
  }

  useEffect(() => {  //when you refresh gets new quote
    getQuote();
  }, []);

  return (
    
    <div className="App">
      <div className = "intro">
        <h1> Random Quote Generator</h1>
        <p><b> Press the 'Get Quote' Button to get a new quote. </b></p>
      </div>
      <div className = "quote">
        <p>"{quote.text}"</p>  
        <br></br>
      <div className = "author">
        <p>Author: {quote.author} </p>
      <div className = "buttons">
        <br></br>
          <button onClick = {getQuote} className = "button">Get Quote</button>
          <a href = {`https://twitter.com/intent/tweet?text=${quote.text}`} 
          target="_blank"
          className = "button"> 
          Tweet </a>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
