import React from 'react';
import Question from "../components/Question";
import data from "../data";

const questions = data.map(question =>{
    return <Question
                name = {question.name}
                url = {question.url}
                difficulty = {question.difficulty}
                comment = {question.comment}
                //isComplete ={question.isComplete}
                />
})

export function QuestionsPage(props) {
    return(
        <>
            <div>
                {questions}
            </div>
        </>
    );
}

