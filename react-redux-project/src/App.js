import React from 'react';
import './App.css';
import CTA from './components/CTA'
import InfoCallout from "./components/InfoCallout"
import ImageCallout from "./components/ImageCallOt"
import EmailCallout from "./components/EmailCallout"
import Callout from './components/Callout';

function App() {

  const handleChange = (e) => {
   alert("Clicked");
    window.location = '/Menu';
  }
  
  return (
    <main>
            <h1>Welcome!</h1>
            <Callout>
            <h2>Don't miss out!</h2>
            <p>"Unless you don't suffer from FOMO, you better make sure you fill out the email form below! </p>
            </Callout>
            
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
            
            <Callout>
                <img src="https://picsum.photos/id/102/4320/3240"/>
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout> 
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            
            <Callout>
                <h2>Give us your email. We definitely won't sell it to anyone.</h2>
                <button  onClick={handleChange}> Menu </button> 
            </Callout>       
          </main>
  )
}

export default App;
