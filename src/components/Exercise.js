import React from 'react'
import Elements from './Elements'
function Exercise(props) {

        return (
            <div >
            <section className="exercise">
            <h1>{props.name.toUpperCase()}</h1>
                
            </section>    
            </div>
        )
    
}

export default Exercise