
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

export { changeName, getAge };