
require("./main.scss"); 
const _contacts = require("../data/contacts").contacts;

function changeName(fullname) {
    return fullname.split(" ").map(function (i) {
        return (i.substr(0, 1).toUpperCase() + i.substr(1).toLowerCase());
    }).join(" ");
}

function getAge(dob) {
    var birthday = new Date(dob);
    var diff = Date.now() - birthday.getTime();
    var ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
}
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


let ContactItem = React.createClass({
    propTypes:{
        id: React.PropTypes.number,
        picture:React.PropTypes.object.isRequired,
        name: React.PropTypes.object.isRequired,
        dob: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired
    },
    render: function(){
        return (
            React.createElement("li",{className:"contact",onClick:this.props.onClick,id:"contact-"+this.props.id},
                React.createElement("div",{className:"row"},
                   React.createElement("div",{className:"column pic"},
                       React.createElement("img",{src: this.props.picture.thumbnail})),
                    React.createElement("div",{className:"column data"},this.props.name.first+" "+this.props.name.last,
                    React.createElement("br"),
                    React.createElement("p",{},this.props.dob.split(" ")[0]))
                )
            )
        )
    }
});


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

let Title = React.createClass({
    
        render:function(){
            return(
                React.createElement("div",{className:"column title"},"Contact List")
            )
        }
    });


let Main  = React.createClass({
    propTypes:{
        contactList: React.PropTypes.array.isRequired,
        selectContact:React.PropTypes.func.isRequired,
        contact: React.PropTypes.object
    },
    render: function(){
        return (
            React.createElement("div",{className:"row"},
                React.createElement(Title,{}),
                React.createElement("div",{},
                    React.createElement(ProfileList,{contacts: this.props.contactList,selectContact:this.props.selectContact}),
                    React.createElement(ProfileDetail,{contact: this.props.contact})
                )
            )
        );
    }
})  
var state={};
var contactList = _contacts;
var isSelect=true;
function setState(changes) {
    state = Object.assign({}, state, changes);
    state.selectContact = onSelected;
    ReactDOM.render(React.createElement(Main, state), document.getElementById("react-app"));
    contact=undefined;
}
function onSelected(e){
    var id = e.target.closest("li").id.split("-")[1];
    location.hash = "#/contact/" + id;
    contact = contactList.find(function (i) {
        return i.id == id;
    });
}
var contact=undefined;
if (location.hash.split("/").includes("contact")) {
    var id = location.hash.split("/");
    id = id[id.length - 1];
    contact = contactList.find(function (i) {
        return i.id == id;
    });
}


window.addEventListener("hashchange", ()=>{

    if(isSelect==false){
    if (location.hash.split("/").includes("contact")) {
        var id = location.hash.split("/");
        id = id[id.length - 1];
        contact = contactList.find(function (i) {
            return i.id == id;
        });
    }
    }
    isSelect=false;
    setState({contact:contact});   
});
setState({ contactList: contactList, contact: contact });