let API_KEY = "b8160c72";
let baseUrl = `https://www.omdbapi.com/`;

/**
 * @param {String} searchString
 *  */ 

const searchButton = document.getElementById("search");
const searchInput = document.getElementById("search-input");
const container = document.getElementById("container");

searchButton.addEventListener("click",() => {
    let searchString = searchInput.value.trim();
    // console.log(searchString);
    if(searchString ===""){
        return ;
    }
    getSearchResult(searchString);
})

async function getSearchResult(searchString){
    let url = `${baseUrl}/?s=${searchString}&apikey=${API_KEY}`
    // console.log(url);
    const response = await fetch(url, {method:"GET"});
    const result = await response.json();
    console.log(result);
    let div = document.createElement("div");
    div.className="card";
    div.innerHTML = `<div class="top">
                            <img src="${result.Search[0].Poster}" alt="img">
                        </div>
                        <div class="bottom">
                            <span class="left">
                                <p>${result.Search[0].Title}</p>
                                <p>year:${result.Search[0].Year}</p>
                            </span>
                            <span class="right">
                                <p>Id:${result.Search[0].Type}</p>
                                <p>type:${result.Search[0].imdbID}</p>
                            </span>
                        </div>`

    container.appendChild(div);
}

