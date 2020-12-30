import React, {Component} from 'react'
import Exercise from './Exercise'
import Elements from './Elements'
import warmupData from '../data/warmup'
class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            exercise : "warmup",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render(){
        // const warmupElements = warmupData.map(item => <Elements key={item.id} warmup={item} name={this.state.exercise}/>)
        return (
            <div>
            <form>
            <label>Choose Your Exercise: </label>
            <select 
            name="exercise"
            value={this.state.exercise}
            onChange={this.handleChange}         
            >
                <option value="warmup">warm up</option>
                <option value="strength">strength</option>
                <option value="balance">balance</option>
            </select>
            </form>
            <Exercise 
             name={this.state.exercise}
            />
            <Elements 
             name={this.state.exercise}
            />
            </div>
        )
    }
        
    
}
export default Navbar