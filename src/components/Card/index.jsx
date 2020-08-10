import React from 'react'
import "./style.card.scss"

function Card(props) {
    return (

        <div className="card" >
            <img className="card-img-top" src= {props.image} alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.page} className="btn-primary">Details</a>
            </div>
        </div>



    )
}

export default Card