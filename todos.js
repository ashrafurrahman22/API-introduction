function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => getTodos(data) )
}

function getTodos(todos){
    const container = document.getElementById('container');
    container.style.textAlign ='center';
    for(const todo of todos){
        
        const p = document.createElement('p');
        p.style.backgroundColor = 'lightblue'
        p.innerText = todo.id;

        const heading = document.createElement('h3');
        heading.innerText = todo.title;
      
        
        container.appendChild(p);
        container.appendChild(heading);
    }
}