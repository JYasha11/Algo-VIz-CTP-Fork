import React from 'react';
import Question from "../components/Question";
import data from "../data";
import NavBar from '../components/NavBar';

const questions = data.map(question =>{
    return <Question
                name = {question.name}
                url = {question.url}
                difficulty = {question.difficulty}
                comment = {question.comment}
                //isComplete ={question.isComplete}
                />
})

export default function QuestionsPage(props) {
    return(
        <>
            <div>
                <NavBar/>
                {questions}
            </div>
        </>
    );
}

