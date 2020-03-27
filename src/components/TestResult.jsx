import React, {useContext} from 'react';
import { GlobalContext  } from '../App';
import covid from '../utils/covid.jpeg'

export const TestResult = () => {
    const {state} = useContext(GlobalContext);
    console.log(state);

    const score = state.points;
    

    
    let stat, remark;
        if (score > 0 && score <= 2 ){
            remark ='Perhaps maybe you are just stressed';
        }
        else if (score > 2 && score <= 5){
            remark = 'Hydrate properly and pratice proper personal hygiene and revaluate after 2days';
        } else if(score > 5 && score <= 12 ){
            remark = 'Seek consultation with a medical Doctor';
        }
        else if(score > 12 && score <= 24){
            remark = 'Please call the DOH HOTLINE here 02-8-651-7800';
        }
        else{
            remark = 'Perhaps you should retake the test. stay safe!';
        }
    
    return (
        <div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={covid} alt="result"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Your Score: {state.points} </div>
    <p class="text-gray-700 text-base"> Recommendations: {remark}
      
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Adapted from DOH Guidelines</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">www.doh.gov.ph</span>
    
  </div>
</div>
        </div>
    )
}
