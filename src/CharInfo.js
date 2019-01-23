import React, { Component } from 'react';

export default class CharInfo extends Component{

constructor(props){
    super(props);
        this.state = {
            expanded: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

open(){
    this.setState({ expanded: !this.state.expanded })
}

close(){
    this.setState({ expanded: !this.state.expanded })
}

render() {
    const info = this.props.CharInfo;

    if(!this.state.expanded) {
        return <p className = "btn btn-info" onClick = {this.open}>Show Info</p>
    }

    return(
        <section className="user-details">
        <p className="btn btn-danger" onClick={this.close}>Hide Info</p>
        <ul>
        <li><h3> Gender: {info.gender} </h3> </li>
        <li><h3> Birth Dates: {info.birth_year} </h3> </li>
        <li><h3> Hair Color: {info.hair_color} </h3> </li>

        </ul>
        </section>
    )
  }
}