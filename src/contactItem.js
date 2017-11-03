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

module.exports = ContactItem;