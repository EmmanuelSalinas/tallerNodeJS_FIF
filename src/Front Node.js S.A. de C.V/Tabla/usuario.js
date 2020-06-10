
window.onload = init;
var headers ={};
var url = "http://localhost:3000";

function init(){
    if(localStorage.getItem("token")){ 
        headers ={
            headers:{
               'Authorization': "bearer " + localStorage.getItem("token") 
            }
        }
        loadUser();

    }
    else{
        window.location.href ="login.html"
    }
}

function loadUser(){
    axios.get(url + "/user/all" , headers).then(function(res){
        displayUser(res.data.message);
        

    }).catch(function(err){
        console.log(err);
    })
}

function displayUser(user){
    var tbody = document.querySelector("tbody");
    for(var i = 0; i < user.length; i++){
            tbody.innerHTML += ` <tr>
                                    <td class="user_id">${user[i].user_id}</td>
                                    <td class="user_name">'${user[i].user_name}'</td>
                                    <td class="user_lastName">'${user[i].user_lastName}'</td>
                                    <td class="user_mail">'${user[i].user_mail}'</td>
                                    <td class="user_position">'${user[i].user_position}'</td>
                                    <td class="user_dateJoin">'${user[i].user_dateJoin}'</td>
                                    <td class="user_password">'${user[i].user_password}'</td>
                                    <td class="user_accion">
                                        <input type="button" value="Modificar" class = "modificar">
                                        <input type="button" value="Eliminar" class= "eliminar">
                                    </td>
                                </tr>`;
    }
    console.log("hola" + tbody);
}

