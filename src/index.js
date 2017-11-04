
require("./main.scss"); 
import ReactDOM from "react-dom";
import React from "react";
import Main from "../component/Main";
import {contacts} from "../data/contacts";

var state={};
function onSelected(e){
    var id = e.target.closest("li").id.split("-")[1];
    location.hash = "#/contact/" + id;
    contact = contacts.find(function (i) {
        return i.id == id;
    });
}

function setState(changes) {
    state = Object.assign({}, state, changes);
    state.selectContact = onSelected;
    ReactDOM.render(<Main contactList={state.contactList} selectContact={onSelected} contact = {state.contact}/>, document.getElementById("react-app"));
    contact=undefined;
}
    
var contact=undefined;
if (location.hash.split("/").includes("contact")) {
    var id = location.hash.split("/");
    id = id[id.length - 1];
    contact = contacts.find(function (i) {
        return i.id == id;
    });
}

window.addEventListener("hashchange", ()=>{

    if (location.hash.split("/").includes("contact")) {
        var id = location.hash.split("/");
        id = id[id.length - 1];
        contact = contacts.find(function (i) {
            return i.id == id;
        });
    }
    setState({contact:contact});   
});
    setState({ contactList: contacts, contact: contact });