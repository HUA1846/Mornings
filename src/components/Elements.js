import React, {useState} from 'react'
import warmupData from '../data/warmup'



 function Elements(props) {
    const [index, setIndex] = useState(0);
    const current = warmupData[index];

    function showNext(){
        if(index < warmupData.length-1){
            setIndex(prevIdx => prevIdx + 1);
        }
        else {
            setIndex(prevIdx => prevIdx = 0);
        }
    }
    return (   
        props.name === "warmup"? 
        <div className="exercise">
            <h1>{current.name}</h1>
            <img src={current.image}></img> <br/>
            <button onClick={showNext}>Next</button>
        </div>: "" 
                
              
            
        )
    
}

export default Elements