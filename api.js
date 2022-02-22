/* function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}; */

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
// loadPost();


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    // calling the last function
    .then(data => displayUsers(data))
}


// another function for load users
function displayUsers(data){
    const ul = document.getElementById('users')
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `user Name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}


// my practise 
function userInfo(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => displayUserInfo(data))
};

function displayUserInfo(data){
    const unList = document.getElementById('users');
    for(const info of data){
        console.log(info.email);
        const listItem = document.createElement('li');
        listItem.innerText =`user Name: ${info.name}, User Email: ${info.email}, userName: ${info.username}, user Address: ${info.address} `;
        unList.appendChild(listItem);
    }
}