import { useState } from 'react'

function Button({ children} ) {
    const [isActive, setIsActive] = useState(false)
    const [emoji, showEmoji] = useState(false)

    return (
        <div className="button-container">
            <h1 className="title">Result of the Votes!</h1>

            <h1>The Winner is!</h1>

            {isActive ? (
                children
            ) : (
                <button onClick={() => {
                    setIsActive(true)
                    showEmoji(true)
                }} className="button">
                    Show Results
                </button>
            )}
        </div>
    )
}

export default Button