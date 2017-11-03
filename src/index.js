

var Title = require("./Title.js");
var ProfileDetail = require("./detailprofile.js");
var ProfileList = require("./profilelist.js")

require("./main.scss"); 

const _contacts = require("../data/contacts").contacts;

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