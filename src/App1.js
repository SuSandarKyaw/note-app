import React, { useState } from 'react';
import './App1.css';

import { createElement } from 'react';
import { Card } from './components/card';
import HomeLayout from './layout/HomeLayout';

export default function App1(){
    const courses =[
        {
            name : "React Course",
            time : "6pm-8pm",
            attend :true
        },
        {
            name : "Python Course",
            time : "7pm-8pm",
            attend: false
        },
        {
            name : "PHP Course",
            time : "8pm-10pm",
            attend :true

        },
        {
            name : "Java Course",
            time : "9am-11am",
            attend : false

        },
        {
            name : "Laravel Course",
            time : "7am-9am",
            attend :true

        },
        
    ]

    // const [loading, setloading]= useState(true)
    const [currentIndex, setCurrentIndex]=useState(0);
    let course = courses[currentIndex];
    
// setTimeout(()=>{
// setloading(false)
// },3000)

// if(loading){
//     return <h1>Loading...</h1>
// }



const handleNext =() =>{
    setCurrentIndex ((prevIndex) => prevIndex+1) //setCurrent(currentIndex+1)
    
}

const handleBack =() =>{
    setCurrentIndex ((prevIndex) => prevIndex-1)

}
    return (

            <HomeLayout>
           <Card name={course.name} time={course.time} attend={course.attend}/>
           <div>
           {
                currentIndex !=0 &&  <button className='btn btn-danger me-3' onClick={handleBack}>Back</button>
           }

           {
               currentIndex !== courses.length -1 && <button className='btn btn-info' onClick={handleNext}>Next</button>
            }
           </div>
            </HomeLayout>
            
     
            

        //   {/* {
        //     courses.map((course,index) => (
        //         <Card name={course.name} time={course.time} attend={course.attend}/>
        //      ))
        //   } */}
    
    )
    }
