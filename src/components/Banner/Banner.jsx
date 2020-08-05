import React from "react"
import "./Banner.scss"
import Card from "../Card/index"

export default function Banner() {
    return (
        
            <div className="row">
                <div className="col col-left">
                    <div className="row text-uppercase">
                        <h5>do you ever worry about</h5>
                    </div>
                    <div className="row">
                        <h2>We are going to launch <br/>
                     
                        things thah helps to improve...</h2>
                        
                    </div>
                    <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                    
                                    <div className="col" style={{borderColor:"transparent"}} >
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Your email address"/>
                                    </div>
                                    
                                    <div className="col-auto">
                                        <button className="btn btn-lg " type="submit">Notify</button>
                                    </div>
                                    
                                </div>
                            </form>
                </div>

                <div className="col col-right">
                    <Card 
                    image ={require('../../images/logo.png')}
                    title="Card title"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
    </div>
            </div>
        
    )
}