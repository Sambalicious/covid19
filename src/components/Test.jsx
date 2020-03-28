import React from 'react';
import  '../utils/button-sound.mp3';
import Questions from './Questions';
import { Link} from 'react-router-dom';


import cold from '../utils/images/cold.jpeg';
import cough from '../utils/images/cough.jpeg';
import breathing from '../utils/images/breathing.jpeg';
import contact from '../utils/images/contact.jpeg';
import diarrhea from '../utils/images/diarrhea.jpeg';
import disease from '../utils/images/disease.jpeg';
import fever from '../utils/images/fever.jpeg';
import headache from '../utils/images/headache.jpeg';
import travel from '../utils/images/travel.jpeg';
import ache from '../utils/images/ache.jpeg';
import fatigue from '../utils/images/fatigue.png';
import throat from '../utils/images/throat.jpeg';









const Test = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
           
            <Questions title={"Do you have cough?"} pics={cough} score={1} />
            <Questions title={"Do you have cold?"} pics={cold } score={1}/>
            
            <Questions title={"Do you having Diarhea?"  } pics={ diarrhea} score={1} />
            <Questions title={ "Do you have sore throat?" } pics={ throat} score={1} />
            <Questions title={ "Are you experiencing MYALGIA or Body Aches?" } pics={ ache} score={1} />
            <Questions title={"Do you have Headache?"  }  pics={headache } score={1} />
            <Questions title={"Do you have fever (Temperature 37.8C and above?"  } pics={fever } score={1} />
            <Questions title={"Are you having difficulty breathing?"  } pics={ breathing} score={2} />
            <Questions title={"Are you experiencing Fatigue?" }  pics={ fatigue} score={2}/>
            <Questions title={ "Have you travelled recently during the past 14days?"} pics={ disease}  score={3}  />
            <Questions title={ "Do you have a travel history to a COVID-19 INFESTED AREA?" } pics={travel } score={3} />
            <Questions title={"Do you have direct contact or is taking care of a postive C0VID-19 PATIENT?"} score={3} pics={contact} />

           
       </div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
         <Link to="/result" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
           Proceed to Result
         </Link>
         </div>
        </div>
    )
}

export default Test;
