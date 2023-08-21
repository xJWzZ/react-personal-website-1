import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <>
        <li className="cards__item">
            <Link className='cards__item__link' to={props.path}>
                <figure className="cards__item__pic-wrap">
                    <img src={props.src} alt={props.label} className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__header">{props.header}</h5>
                    <p className='cards__item__text'>{props.text}</p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default Card