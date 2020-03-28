import React, {useContext} from 'react';

import { GlobalContext  } from '../App';
import covid from '../utils/covid.jpeg'

const TestResult = () => {
    const {state} = useContext(GlobalContext);
    console.log(state);

    const score = state.points;
    

    
    let remark;
        if (score > 0 && score <= 2 ){
            remark ='Perhaps maybe you are just stressed';
        }
        else if (score > 2 && score <= 5){
            remark = 'Hydrate properly and pratice proper personal hygiene. Obeserve and revaluate after 2days';
        } else if(score > 5 && score <= 12 ){
            remark = 'Seek consultation with a medical Doctor';
        }
        else if(score > 12 && score <= 24){
            remark = 'Please call the NCDC toll-free Number 0800-9700-0010, or whatsapp 07087110839';
        }
        else{
            remark = 'Perhaps you should retake the test. stay safe!';
        }
    
    return (
        <div>
                <div className="max-w-sm rounded my-4 overflow-hidden shadow-lg">
  <img className="w-full" src={covid} alt="result"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Your Points: {state.points} out of 24 points possible </div>
    <p className="text-gray-700 text-base"> Recommendations: {remark}
      
    </p>
  </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Adapted from DOH Guidelines</span>
   <a href="https://www.doh.gov.ph" > <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">www.doh.gov.ph</span>
   </a>    
  </div>
</div>
        </div>
    )
}

export default TestResult;
