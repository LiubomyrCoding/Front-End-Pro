function Emoji(props) {

    return (
        <div className="emoji-container">
            <div className="emoji">
                <img onClick={() => props.setCount1(props.count1 + 1)} src={props.moneyFaceEmoji} alt="Money Face Emoji"/>
                <div>{props.count1}</div>
            </div>

            <div className="emoji">
                <img onClick={() => props.setCount2(props.count2 + 1)} src={props.omgFaceEmoji} alt="OMG Face Emoji"/>
                <div>{props.count2}</div>
            </div>

            <div className="emoji">
                <img onClick={() => props.setCount3(props.count3 + 1)} src={props.sunglassesEmoji} alt="Sunglasses Emoji"/>
                <div>{props.count3}</div>
            </div>

            <div className="emoji">
                <img onClick={() => props.setCount4(props.count4 + 1)} src={props.thinkingEmoji} alt="Thinking Emoji"/>
                <div>{props.count4}</div>
            </div>

            <div className="emoji">
                <img onClick={() => props.setCount5(props.count5 + 1)} src={props.winkEmoji} alt="Wink Emoji"/>
                <div>{props.count5}</div>
            </div>
        </div>
    )
}

export default Emoji