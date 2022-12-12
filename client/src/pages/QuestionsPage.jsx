import React from 'react';
import "./QuestionsPage.css";



export const QuestionsPage = () => {
  return (
    <div>
        <table>
            <tr>
                <th class = "first-th">Progress</th>
                <th>Problem</th>
                <th>Difficulty</th>
                <th>Video Solution</th>
                <th class = "last-th">Language</th>
            </tr>
            <tr>
                <td><input type = "radio"></input></td>
                <td>Contains Duplicate</td>
                <td>Easy</td>
                <td><button class = "sol">Solution</button></td>
                <td>Java</td>
            </tr>
            <tr>
                <td><input type = "radio"></input></td>
                <td>Valid Anagram</td>
                <td>Easy</td>
                <td><button class = "sol">Solution</button></td>
                <td>Java</td>
            </tr>
            <tr>
                <td><input type = "radio"></input></td>
                <td>Two Sum</td>
                <td>Easy</td>
                <td><button class = "sol">Solution</button></td>
                <td>Python</td>
            </tr>
            <tr>
                <td><input type = "radio"></input></td>
                <td>Group Anagrams</td>
                <td>Moderate</td>
                <td><button class = "sol">Solution</button></td>
                <td>Java</td>
            </tr>
        </table>
    </div>
  )
}

