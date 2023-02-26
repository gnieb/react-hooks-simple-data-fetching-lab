import React, {useState, useEffect} from "react";


function App () {
const [dogImage, setDogImage] = useState([])
const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoaded(true)
      });
  }, []);

  if (!isLoaded) return <p>"Loading..."</p>
    
return (

    <div>
        <h1>Happy Pups</h1>
        <div>
            <img src={dogImage} alt="A Random Dog"/>
        </div>

    </div>
)

}

export default App