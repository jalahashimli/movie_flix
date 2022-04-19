// let myPromise = fetch("http://www.omdbapi.com/?t=interstellar&apikey=d831ee16")
// console.log(myPromise)

let moviePoster = document.querySelector("#moviePoster"),
    movieName = document.querySelector("#movieName"),
    movieAwards = document.querySelector("#movieAwards"),
    movieYear = document.querySelector("#movieYear"),
    movieRating = document.querySelector("#movieRating");
// let movieData = null;

// myPromise.then((res)=>{
//     let mySecondPromise = res.json()
//     console.log(mySecondPromise);
//     return mySecondPromise
// }).then((data)=> {
//     console.log("data",data)
//     movieData = data;
// }).catch((err)=>{
//     console.log(err)
// })


// function getMovieName(title) {
//     fetch(`http://www.omdbapi.com/?t=${title}&apikey=d831ee16`)
//     .then((res) => {
//         let mySecondPromise = res.json()
//         console.log(mySecondPromise);
//         return mySecondPromise
//     }).then((data) => {
//         console.log("data", data)
//         movieData = data;
//     }).catch((err) => {
//         console.log(err)
//     })
// }



async function getMovieName(title) {
    try {
        let res = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=d831ee16`)
        let data = await res.json()
        renderMovie(data)
    } catch (err) {
        console.log(err)
        alert(err)
    } finally {
        console.log("Data downloaded");
    }
}


document.querySelector("#searchMovie").addEventListener("click", () => {
    let movieTitle = document.querySelector("#movieTitle")
    console.log(movieTitle.value);
    getMovieName(movieTitle.value)

    movieTitle.value = "";
});

function renderMovie(movie) {
    moviePoster.src = movie.Poster
    movieName.innerHTML = movie.Title
    movieAwards.innerHTML = movie.Awards === "N/A" ? "Yoxdur" : movie.Awards
    movieYear.innerHTML = movie.Year
    movieRating.innerHTML = movie.Actors
    console.log("movie: ", movie)
}