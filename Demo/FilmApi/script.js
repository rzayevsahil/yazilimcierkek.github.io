const API_URl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=15005c48f2625def09dacd3d0fc01762&page=1';

const IMG_Path = 'https://image.tmdb.org/t/p/w1280';

const Search_Url = 'https://api.themoviedb.org/3/search/movie?api_key=15005c48f2625def09dacd3d0fc01762&query="';

const main =document.getElementById('main');
const form =document.getElementById('form');
const search =document.getElementById('search');


getMovies(API_URl);

async function getMovies(url){
    const res =await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}
 function showMovies(movies){

    main.innerHTML ='';
    movies.forEach((movie)=>{
        const {title, poster_path, vote_average,overview } =movie;
        const movieEl =document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
       
            <img src="${IMG_Path + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
            <div class="overview">
              ${overview}
            </div>
        
        `

        main.appendChild(movieEl);
    });

 }
function getClassByRate(vote){
    if(vote >=8){
        return 'green'
    }else if(vote >=5){
        return 'orange'
    }else{
        return 'red';
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !==''){
        getMovies(Search_Url + searchTerm)
        search.value = '';
    }else{
        window.location.reload()
    }
});