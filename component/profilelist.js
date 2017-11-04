
import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactItem from "./contactItem"

export default class ProfileList extends Component{

    render(){

        return(

            <div className="column list">
                <ul> {
                    this.props.contacts.map(i =>
                    < ContactItem 
					key = {i.key}
                    id = {i.id} 
                    picture = {i.picture} 
                    name = {i.name} 
                    dob = {i.dob} 
                    onClick = {this.props.selectContact}/>) 
                    }
                </ul>
                </div>
        );

    }
}
ProfileList.propTypes = {
    contacts: PropTypes.array,
    selectContact: PropTypes.func
};