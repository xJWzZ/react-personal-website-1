import React from 'react'
import Card from './Card'
import './Cards.css'
import guidewire from "../images/guidewire.jpg"
import overc from "../images/over-c.png"
import background from "../images/Ballybunion_Castle_5.jpg"

function Cards() {
  return (
    <div className='cards' style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",  
  }}>
        <h1>Work Experience</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <Card src={guidewire} header="Guidewire" text="(November 2020 - March 2023)" label="Guidewire" path="/work/guidewire"/>
                    <Card src={overc} header="Over-C" text="(March 2018 - September 2018)" label="Over-C" path="/work/overc"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards