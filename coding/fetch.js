//fetch the data
//show asdrop down

import React, { Component } from 'react';

const url = "some url";
class Fetch extends Component {
    state = {  }

    getData = async (e) =>{
        e.preventDefault();
        const api_call = await fetch(url);
        const data = await api_call.json();
        console.log(data);
    }

    render() { 
        return (
            <div>
                <form>
                    <select></select>
                </form>
            </div>
         );
    }
}
 
export default Fetch;