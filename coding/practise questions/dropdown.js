
//show the data as drop down
//this one i wrote using reactjs

import React, { Component } from 'react';

class Sample extends Component {
    state = { 
        array : [{name:'edward'},
        {name:'sita'},
        {name:'ram'}]
     };

      handleChange = () => {
        this.setState({value : e.target.value});
      }
      handleSubmit = (e) =>{
        e.preventDefault();
        let copy=this.state.array;
        this.setState({array : copy})
      }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        pick one
                        <select>
                        {this.state.array.map((row, index) => {
                            <option key={index}>{row}</option>
                        })}
                    </select>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
         );
    }
}
 
export default Sample;