import QuestionBlock from "./QuestionBlock";
import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function Trivia(props) {
    const [questions, setQuestions] = useState([{}, {}, {}, {}, {}])

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(r => r.json())
            .then(r => {
                const q = r.results;
                setQuestions(() => {
                    return q.map((value) => {
                        let choices = value.incorrect_answers
                        choices.push(value.correct_answer)
                        choices = shuffle(choices)
                        return {
                            uuid: uuidv4(),
                            question: value.question,
                            choices: choices,
                            correct_answer: choices.findIndex((c) => c === value.correct_answer),
                            current_choice: -1
                        }
                    })
                })
            })
    }, [])

    function handleAnswerClick(e, pos, question) {
        setQuestions(prevQuestions => {
            return prevQuestions.map((v) => {
                return v.uuid === question.uuid ? {
                    ...v,
                    current_choice: pos
                } : v
            })
        })
    }

    return (
        <div className="trivia">
            <QuestionBlock question={questions[0]} handleAnswerClick={handleAnswerClick}/>
            <QuestionBlock question={questions[1]} handleAnswerClick={handleAnswerClick}/>
            <QuestionBlock question={questions[2]} handleAnswerClick={handleAnswerClick}/>
            <QuestionBlock question={questions[3]} handleAnswerClick={handleAnswerClick}/>
            <QuestionBlock question={questions[4]} handleAnswerClick={handleAnswerClick}/>
            <button className="trivia-button" onClick={(e) => {props.handleTriviaClick(e, questions)}}>Check Answers</button>
        </div>
    );
}

export default Trivia;