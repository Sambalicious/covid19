import React from 'react';
import questions from '../testQuestions.json'
import { Button } from './Button';
import  '../utils/button-sound.mp3';




export const Test = () => {
    return (
        <div>
        
            <ul>
                {questions.map(item=><li>{item.question} 
                    <Button  />
                 </li>
                 )}
            </ul>
        </div>
    )
}
