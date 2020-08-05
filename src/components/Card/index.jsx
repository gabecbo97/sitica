import React from 'react'
import "./style.card.scss"

function Card(props) {
    return (

        <div class="card" >
            <img class="card-img-top" src={props.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a href={props.page} class="btn-primary">Details</a>
            </div>
        </div>



    )
}

export default Card