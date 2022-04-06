import QuestionBlock from "./QuestionBlock";

function Result(props) {
    let score = 0

    props.questions.forEach((q) => {
        if(q.current_choice === q.correct_answer) {
            score++
        }
    })

    return (
        <div className="result">
            <QuestionBlock question={props.questions[0]} isResultPage={true}/>
            <QuestionBlock question={props.questions[1]} isResultPage={true}/>
            <QuestionBlock question={props.questions[2]} isResultPage={true}/>
            <QuestionBlock question={props.questions[3]} isResultPage={true}/>
            <QuestionBlock question={props.questions[4]} isResultPage={true}/>
            <div className="result-score">
                <h6 className="result-title">You scored {score}/5 correct answers</h6>
                <button className="result-button" onClick={() => window.location.reload()}>Play Again</button>
            </div>
        </div>
    );
}

export default Result;