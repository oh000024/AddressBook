
import {changeName, getAge} from "./util.js";
let ProfileDetail = React.createClass({
    propTypes:{
        contact:React.PropTypes.object
    },
    render: function(){
        
        if(!this.props.contact){
            return(
            React.createElement("div",{className:"detail-profile"},"Click one of Contacts List")
            )
        } else{
            return (
            React.createElement("div",{ className: "details" },
                React.createElement("h1",{},changeName(this.props.contact.name.first+" "+(this.props.contact.name.last))), 
                React.createElement("div",{},
                    React.createElement("div",{},"Gender: "+this.props.contact.gender),
                    React.createElement("div", {},"DOB: "+this.props.contact.dob+" ("+getAge(this.props.contact.dob)+" years old)")),
                React.createElement("hr", {}),
                    React.createElement("address",{},(this.props.contact.location.street),
                    React.createElement("br"),
										(this.props.contact.location.city)+", "+(this.props.contact.location.state),
										React.createElement("br"),this.props.contact.location.postcode),
                React.createElement("hr", {}),
                React.createElement("div",{},
                    React.createElement("div",{},"Email: ",
                        React.createElement("a",{ href: "mailto:" + this.props.contact.email },this.props.contact.email)
                    ),
                    React.createElement("div",{},"Phone: ",this.props.contact.cell)
                ),
                React.createElement("img", { src: this.props.contact.picture.large }))
            )
            }
        }
    });
module.exports = ProfileDetail;