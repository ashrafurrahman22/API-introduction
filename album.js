function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json())
.then(data => displayAlbums(data))
}

loadAlbums();

function displayAlbums(albums){
    const albumContainer =document.getElementById('albums');
     for(const album of albums){
         const p = document.createElement('p');
         p.style.textAlign = 'center';
         p.style.backgroundColor = 'lightblue';
         p.style.border = '2px solid red';

         p.innerText = album.title;
         albumContainer.appendChild(p);
     }
}