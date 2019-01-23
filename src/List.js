import React, { Component } from 'react';
import CharInfo from './CharInfo'

export default class List extends Component{
render() {
    const people = this.props.people;

    return (
      <div className="">
      {
          people.map((peep)=> {
              console.log(peep);
              return(
                  <section key={peep.url}>
                  <h1 className="charName">{peep.name}</h1>
                  <CharInfo CharInfo={peep} />
                  </section>
              )
          })
      }
      </div>
    );
  }
}