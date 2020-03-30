import React, { Component } from 'react'

export class DropDown extends Component {
    constructor(props){
        super(props)
        
    }
    
    render() {
        return (
        <div>
        <p>Label <input type="text" onChange={this.props.changeLabel} /></p>
        
            <select >
                    {this.props.option.map((e)=>{
                        return <option contentEditable="true" value={e}> {e}</option>
                    })}
            </select>       
            </div>
       )
    }
}

export default DropDown
