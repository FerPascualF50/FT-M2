// Boton ver amigos  Jquery
/*let url = "http://localhost:5000/amigos";

let showFriends = function(){
    $("#lista").empty();
    $.get(`${url}`, function (friends){
        friends.forEach(f => {
            $('#lista').append(`<li id = ${f.id}> ${f.name} X </li>`)
        })
    });
}
$('#boton').click(showFriends);*/

///////////////////////////////////////////////
// Boton ver amigos  Ajax
// Ver lista amigos Ajax
const btnAmigos = document.getElementById('boton')
const ul = document.getElementById('lista')

btnAmigos.addEventListener('click', showFriends)

function showFriends() {
    ul.innerText = ''
        fetch('http://localhost:5000/amigos')
        .then(res => res.json())
        .then(amigos => {
        for (let i = 0; i < amigos.length; i++) {
            let li = `<li>${amigos[i].name}<button onClick='deleteFriends(${amigos[i].id})'>X</button></li>`
            ul.innerHTML = ul.innerHTML + li
        }
        })
}


function deleteFriends(idAmigo) {
    console.log(idAmigo)
}
//////////////////////////////////////////////


//Buscar amigos Jquery
/*$('#search').click(function (){
    let id = $('#input').val();
    $.get(`${url}/${id}`, function (friend){
        $('#amigo').text(`${friend.name} ${friend.age} ${friend.email}`)
        $('#input').val("");
    
    })
});*/
//////////////////////////////////////////////
// Buscar amigo Ajax
const inputAmigo = document.querySelector('#input')
const btnAmigo = document.querySelector('#search')
const spanAmigo = document.getElementById('amigo')

console.log(inputAmigo.value)
btnAmigo.addEventListener('click', function() {
    let idAmigo = inputAmigo.value
   fetch(`http://localhost:5000/amigos/${idAmigo}`)
    .then(res => res.json())
    .then(amigo => {
        inputAmigo.value = ''
        spanAmigo.innerText = amigo.name;
    })
})


//////////////////////////////////////////////

//Delete Amigos Jquery
/*$('#delete').click(function (){
    let id = $('#inputDelete').val();
    if(id){
        let friend;
        $.get(`${url}/${id}`, function(data){
            friend = data;
        });
        $.ajax(
            {url: `${url}/${id}`,
                type: "DELETE",
                success: function(){
                    $('#sucess').text(`Tu amigo ${friend.name} fue borrado con exito`);
                    $('#inputDelete').val("");
                    showFriends();
            }
        });

    }
});*/


//////////////////////////////////////////////
// DELETE amigo AJAX
const inputDelete = document.querySelector('#inputDelete')
const btnDelete = document.querySelector('#delete')
const spanSuccess = document.querySelector('#success')

function deleteFriends(idAmigo) {
    if(typeof idAmigo !== 'number'){
        idAmigo = inputDelete.value
    }
    /* let idAmigo = inputDelete.value */
    fetch(`http://localhost:5000/amigos/${idAmigo}`,{
    method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        inputDelete.value = ''
        spanSuccess.innerText = 'Borrado!!!!'
        showFriends()
    })
}
btnDelete.addEventListener('click', deleteFriends)

//////////////////////////////////////////////

    