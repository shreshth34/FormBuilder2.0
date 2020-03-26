import React, { Component } from 'react'

export class DropDown extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
        <div contentEditable="true">
        <label>{this.props.label}</label> 
            <select>
                    {this.props.option.map((e)=>{
                        return <option value={e}> {e}</option>
                    })}
            </select>       
            </div>
       )
    }
}

export default DropDown
