function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => displayComments(data) )
}

function displayComments(comments){
    const section =  document.getElementById('comment-section')
    for (const comment of comments){
        const div = document.createElement('div');
        div.style.borderRadius = '15px';
        div.style.border = '2px solid black';
        div.style.margin = '10px';
        div.style.padding = '10px';
        div.style.backgroundColor = 'lime';
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
        `;
        section.appendChild(div);
    }
}