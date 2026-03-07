import  Title from './Components/Title.jsx'
import Emoji  from './Components/Emoji.jsx'
import Button from './Components/Button.jsx'
import './App.css'
import {useState} from "react";
import moneyFaceEmoji from './assets/Money Face Emoji.png'
import omgFaceEmoji from './assets/OMG Face Emoji.png'
import sunglassesEmoji from './assets/Sunglasses Emoji.png'
import thinkingEmoji from './assets/Thinking Emoji.png'
import winkEmoji from './assets/Wink Emoji.png'

function App() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const [count5, setCount5] = useState(0)

    const largest = [
        {emoji: moneyFaceEmoji, votes: count1},
        {emoji: omgFaceEmoji, votes: count2},
        {emoji: sunglassesEmoji, votes: count3},
        {emoji: thinkingEmoji, votes: count4},
        {emoji: winkEmoji, votes: count5},
    ]

    const maxCounterObject = largest.reduce((winner, nextCounter) => {
        return (winner.votes > nextCounter.votes) ? winner : nextCounter;
    });

    const props = {count1, count2, count3, count4, count5, setCount1, setCount2, setCount3, setCount4, setCount5, moneyFaceEmoji, omgFaceEmoji, sunglassesEmoji, thinkingEmoji, winkEmoji}

    return (
        <>
            <Title />
            <Emoji {...props}/>
            <Button>
                <img src={maxCounterObject.emoji} />
                <h1 className='winners-votes'>Winners Votes: {maxCounterObject.votes}</h1>
            </Button>
        </>
    )
}

export default App