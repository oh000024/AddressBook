
import React, {Component} from "react";
import PropTypes from "prop-types";
import {capitalize, getAge} from "./util.js";

export default class ProfileDetail extends Component{

    render(){
        
        if(!this.props.contact){
            return(
            <div className="detail-profile"> Click one of Contacts List</div>
            )
        } else {
            return (
            <div className = "details">
                <h1> {capitalize(this.props.contact.name.first+ " " + this.props.contact.name.last)}</h1> 
                <div>
                    <div>Gender: {capitalize(this.props.contact.gender)}</div>
                    <div>DOB: {this.props.contact.dob}  ({getAge(this.props.contact.dob )} years old)</div>
                </div>
                 <hr/>
                 <div> {capitalize(this.props.contact.location.street)} <br/> {capitalize(this.props.contact.location.city)}, {capitalize(this.props.contact.location.state)}<br/>{this.props.contact.location.postcode}</div>
                 <hr/>
                 <div>
                      <div>Email:<a href= {"mailto:" + this.props.contact.email}> {this.props.contact.email} </a></div>
                      <div>Phone: {this.props.contact.cell}</div>
                </div>
                <img src = {this.props.contact.picture.large}/>
            </div>
            )
            }
        }
    }

    ProfileDetail.propTypes = {
        contact: PropTypes.object 
    }