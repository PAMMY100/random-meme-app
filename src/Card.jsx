// import meme from './assets/Group 1.png'
// import  data from "./data"
import { useEffect, useState } from "react";

const Card = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  })

const [allMeme, setAllMeme] = useState([])


useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMeme(data.data.memes))
}, [])
  
const getRandomUrl = () => {
  const memeUrl = allMeme.map(meme => meme.url)
  const Urlindex = Math.floor(Math.random() * memeUrl.length) + 1
  const url = memeUrl[Urlindex]
  setMeme(prevState => ({
    ... prevState,
    randomImage : url
  }));
}

  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme(preVal => ({
      ...preVal,
      [name] : value
    }))
  }

  return (
    <main>
      <div className='form'>
      <input 
        type="text" 
        placeholder='Top text'
        className='form--input'
        name="topText"
        value={meme.topText}
        onChange={handleChange}
        />
      <input 
        type='text'
        placeholder='Bottom text'
        className='form-input'
        name="bottomText"
        value={meme.bottomText}
        onChange={handleChange}
        />
      <button className='form--button' onClick={getRandomUrl}>Get a new meme image🖼️</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Card