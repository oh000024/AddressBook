
//import Title from "./Title";
var Title = require("./Title.js");

var ProfileDetail = require("./detailprofile.js");

// var ContactItem = require("./contactItem.js");

var ProfileList = require("./profilelist.js")

require("./main.scss"); 

const _contacts = require("../data/contacts").contacts;


// let ContactItem = React.createClass({
//     propTypes:{
//         id: React.PropTypes.number,
//         picture:React.PropTypes.object.isRequired,
//         name: React.PropTypes.object.isRequired,
//         dob: React.PropTypes.string.isRequired,
//         onClick: React.PropTypes.func.isRequired
//     },
//     render: function(){
//         return (
//             React.createElement("li",{className:"contact",onClick:this.props.onClick,id:"contact-"+this.props.id},
//                 React.createElement("div",{className:"row"},
//                    React.createElement("div",{className:"column pic"},
//                        React.createElement("img",{src: this.props.picture.thumbnail})),
//                     React.createElement("div",{className:"column data"},this.props.name.first+" "+this.props.name.last,
//                     React.createElement("br"),
//                     React.createElement("p",{},this.props.dob.split(" ")[0]))
//                 )
//             )
//         )
//     }
// });




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