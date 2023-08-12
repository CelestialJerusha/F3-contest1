let API_KEY = "b8160c72";
let baseUrl = `https://www.omdbapi.com`;

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
                            <img src="${result.Poster}" alt="img">
                        </div>
                        <div class="bottom">
                            <span class="left">
                                <p>Matilda</p>
                                <p>year:1997</p>
                            </span>
                            <span class="right">
                                <p>Id:1254</p>
                                <p>type:comedy</p>
                            </span>
                        </div>`

    container.appendChild(div);
}

