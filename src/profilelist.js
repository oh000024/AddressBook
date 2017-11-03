//import ContactItem from "./contactitem.js"
var ContactItem = require("./contactitem.js")
let ProfileList=React.createClass({
    propTypes:{
    contacts: React.PropTypes.array.isRequired,
    selectContact: React.PropTypes.func.isRequired
    },
    render:function(){
        var contactItems = [];
        for( var i = 0; i< this.props.contacts.length; i++){
            contactItems.push( React.createElement(ContactItem,{id: this.props.contacts[i].id,picture:this.props.contacts[i].picture,name: this.props.contacts[i].name,dob:this.props.contacts[i].dob,onClick: this.props.selectContact}));
        }
        return(
            React.createElement("div",{className:"column list"}, 
                React.createElement("ul",{},contactItems))
        );
    }
});

module.exports = ProfileList;