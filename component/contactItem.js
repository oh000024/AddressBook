
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ContactItem extends Component{
    render(){
        let liid = "contact-"+this.props.id;
        return (
            <li className="contact" onClick={this.props.onClick} id={liid}>
                <div className="row">
                   <div className="column pic">
                       <img src= {this.props.picture.thumbnail}/>
                   </div>
                        <div className="column data">{this.props.name.first+" "+this.props.name.last}
                            <br/>
                            <p>{this.props.dob.split(" ")[0]}</p>
                        </div>
                </div>
            </li>
        )
    }
}
ContactItem.protoTypes = {
        id: PropTypes.number,
        picture:PropTypes.object.isRequired,
        name: PropTypes.object.isRequired,
        dob: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }