import React from 'react'

function Time () {
    const styles = {
        color: "black",
    }
    const date = new Date().toLocaleDateString();
    const showhours = new Date().toLocaleTimeString();
    const hours = new Date().getHours();
    let timeOfDay;

    if(hours < 12){
        timeOfDay = "Morning!";
        styles.color = "yellow";
    }  else if(hours > 12 && hours <= 17) {
        timeOfDay = "Afternoon!";
        styles.color = "orange";
    } else {
        timeOfDay = "Evening!";
        styles.color = "gray";
    } 

        return (
            <div>
                <p style={styles}>{`Good ${timeOfDay}`}</p>
                <p>
                   {`Today is ${date}. It's now ${showhours} ` }
                </p>
               
            </div>
        )
        
}


export default Time