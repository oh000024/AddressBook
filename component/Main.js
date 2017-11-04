
import React, {Component} from "react";
import PropTypes from "prop-types";
import Title from "../component/Title"
import ProfileList from "../component/profilelist"
import ProfileDetail from "../component/detailprofile"
export default class Main extends Component{
    render(){
        return (
            <div className="row">
                <Title/>
                <div>
                    <ProfileList contacts={this.props.contactList} selectContact={this.props.selectContact}/>
                    <ProfileDetail contact={this.props.contact}/>
                </div>
            </div>
        );
    }
} 

Main.protoTypes = {
    contactList: PropTypes.array.isRequired,
    selectContact:PropTypes.func.isRequired,
    contact: PropTypes.object  
}