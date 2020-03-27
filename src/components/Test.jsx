import React from 'react';
import  '../utils/button-sound.mp3';
import Questions from './Questions';
import { Link} from 'react-router-dom';
import button from '../utils/button-sound.mp3'




export const Test = () => {
    return (
        <div>
           
            <Questions title={"Do you have cough?"} />
            <Questions title={"Do you have cold?"} />
            <Questions title={"Do you having Diarhea?"  }  />
            <Questions title={ "Do you have sore throat?" }  />
            <Questions title={ "Are you experiencing MYALGIA or Body Aches?" }  />
            <Questions title={"Do you have Headache?"  }  />
            <Questions title={"Do you have fever (Temperature 37.8C and above?"  }  />
            <Questions title={"Are you having difficulty breathing?"  }  />
            <Questions title={"Are you experiencing Fatigue?" }  />
            <Questions title={ "Have you travelled recently during the past 14days?" }  />
            <Questions title={ "Do you have a travel history to a COVID-19 INFESTED AREA?" }  />
            <Questions title={"Do you have direct contact or is taking care of a postive C0VID-19 PATIENT?"  }  />

            <div className="flex items-center justify-between">
         <Link to="/result" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
           Proceed to Result
         </Link>
         
       </div>
        </div>
    )
}
