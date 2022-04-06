function Start(props) {
    return (
        <div className="start">
            <h2 className="start-title">Quizzical</h2>
            <p className="start-description">A simple trivia app</p>
            <button className="start-button" onClick={props.handleStartClick}>Start Quiz</button>
        </div>
    );
}

export default Start;