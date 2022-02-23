function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data) )
}
// loadPosts();

function displayPosts(posts){
    const postContainer = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}


// api post method

fetch ('https://jsonplaceholder.typicode.com/posts', { 
    method: 'post',
    body: JSON.stringify({
        title: 'My new Post', 
        body: 'This is my Post',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',

    }
})
.then(resp => resp.JSON())
.then(data => console.log(data))


// please practise 


function load(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => loadData(data) )
}

function loadData(data){
    const unorderedList = document.getElementById('ul')
        for(const info of data){
            const li = document.createElement('li');
            li.style.textAlign = 'center' ;
            li.style.margin = '10px' ;
            li.style.padding = '10px' ;
            li.style.border = '2px solid black' ;
            li.style.listStyle = 'none' ;
            li.style.backgroundColor = 'lightblue' ;
            li.innerText = `${info.title}  ${info.body}`;
            unorderedList.appendChild(li);

        }
    
}