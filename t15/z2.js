let user = {
name: "Petro",
lastname: "Ivanova",
age: "14",
email: "petro007@gmail.com",
city: "KhmelCity"
}

function showUser(){
    document.getElementById("tbody").innerHTML = `
    <tr>
            <td>${user.name}</td>
            <td>${user.lastname}</td>
            <td>${user.age}</td>
            <td>${user.emale}</td>
            <td>${user.city}</td>
        </tr>
    `
}
showUser();

function changeName(imya){
user.name = imya;
showUser();

}
showUser();
function changeLastName(Last){
    user.lastname = Last;
    showUser();
}

showUser();
function changeAge(kill){
    user.age = kill;
    showUser();
}

showUser();
function changeEmail(kil){
    user.emale = kil;
    showUser();
}
