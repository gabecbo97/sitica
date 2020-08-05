import React from "react"
import "./Banner.scss"

export default function Banner() {
    return (
        
            <div className="row">
                <div className="col">
                    <div className="row">
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
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"/>
                                    </div>
                                    
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                    
                                </div>
                            </form>



                </div>








                <div className="col">
                    2 of 2
    </div>
            </div>
        
    )
}