import parse from 'html-react-parser';

function getStyle(type) {
    if(type === 1) {
        return {
            border: "none",
            backgroundColor: "#D6DBF5"
        };
    } else if(type === 2) {
        return {
            border: "none",
            backgroundColor: "#94D7A2",
            color: "#293264"
        };
    }  else if(type === 3) {
        return {
            border: "none",
            backgroundColor: "#F8BCBC"
        }
    } else {
        return {};
    }
}

function QuestionBlock(props) {
    const q = props.question
    const c = q.choices
    const isResultPage = props.isResultPage || false;

    let style = []

    if(c !== undefined) {
        for(let i = 0; i < 4; i++) {
            if(!isResultPage && q.current_choice === i) {
                style.push(1)
            } else if(isResultPage && i === q.correct_answer) {
                style.push(2)
            } else if(isResultPage && q.current_choice === i && i !== q.correct_answer) {
                style.push(3)
            } else {
                style.push(0)
            }
        }
    }

    return (
        <div className="question-block">
            <h6 className="question-title">{parse(q.question || "Question")}</h6>
            <div className="answer-block">
                <button style={getStyle(style[0])}
                        className="answer" disabled={isResultPage}
                        onClick={(e) => {props.handleAnswerClick(e, 0, q)}}>
                    {parse(c === undefined ? "Answer 1" : c[0])}
                </button>
                <button style={getStyle(style[1])}
                        className="answer" disabled={isResultPage}
                        onClick={(e) => {props.handleAnswerClick(e, 1, q)}}>
                    {parse(c === undefined ? "Answer 1" : c[1])}
                </button>
                <button style={getStyle(style[2])}
                        className="answer" disabled={isResultPage}
                        onClick={(e) => {props.handleAnswerClick(e, 2, q)}}>
                    {parse(c === undefined ? "Answer 1" : c[2])}
                </button>
                <button style={getStyle(style[3])}
                        className="answer" disabled={isResultPage}
                        onClick={(e) => {props.handleAnswerClick(e, 3, q)}}>
                    {parse(c === undefined ? "Answer 1" : c[3])}
                </button>
            </div>
            <hr/>
        </div>
    );
}

export default QuestionBlock;