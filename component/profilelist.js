
import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactItem from "./contactItem"

export default class ProfileList extends Component{

    render(){
		let basicinfo = this.props.contacts.map((item) => (
		< ContactItem 
					key = {item.key}
                    id = {item.id} 
                    picture = {item.picture} 
                    name = {item.name} 
                    dob = {item.dob} 
                    onClick = {this.props.selectContact}/>
		));
        return(
            <div className="column list">
                <ul> {basicinfo}</ul>
            </div>
        );

    }
}
ProfileList.propTypes = {
    contacts: PropTypes.array,
    selectContact: PropTypes.func
};