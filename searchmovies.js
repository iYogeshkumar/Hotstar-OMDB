function schmov(){
    let search = document.querySelector("#search").value;

    let url = `https://www.omdbapi.com/?t=${search}&apikey=25f97e9a`;

    async function moviessearch() {

        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log("data:", data);

            if (data.Response == "True") {
                console.log("mov")
                display(data);
            }
            else {
                document.querySelector("#searchmov").innerHTML = "";
                let img = document.createElement("img");
                img.setAttribute("id", "error")
                img.src = "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1";
                document.querySelector("#searchmov").append(img);
            }
        } catch (error) {
            console.log("error:", error);
        }

    }
    moviessearch();
}
function display(data){
    console.log("mov",data)
    document.querySelector("#searchmov").innerHTML = "";
    let movie =  document.querySelector("#searchmov");

    let div = document.createElement("div");
    div.setAttribute("class", "mdiv");

    let recom = document.createElement("div");
    recom.setAttribute("id", "recom");

    let img = document.createElement("img")
    
    img.src = data.Poster;
    div.append(img);

    let name = document.createElement("h2");
    name.innerHTML = `Title : ${data.Title}`;
    console.log(data.Title)

    let release = document.createElement("p");
    release.innerHTML = `Release : ${data.Released}`;

    let actors = document.createElement("p");
    actors.innerHTML = `Actors : ${data.Actors}`;

    let directors = document.createElement("p");
    directors.innerHTML = `Director : ${data.Director}`;

    let genre = document.createElement("p");
    genre.innerHTML = `Gnere : ${data.Genre}`

    let country = document.createElement("p");
    country.innerHTML = `Country : ${data.Country}`

    let lang = document.createElement("p");
    lang.innerHTML = `Langauge : ${data.Language}`;

    let type = document.createElement("p");
    type.innerHTML = `Type : ${data.Type}`

    let run = document.createElement("p");
    run.innerHTML = `Runtime : ${data.Runtime}`

    let boxof = document.createElement("p");
    boxof.innerHTML = `Box Office : ${data.BoxOffice}`

    let imdb = document.createElement("p");
    imdb.innerHTML = `IMDB Rating : ⭐${data.imdbRating}`

    if(data.imdbRating>8.5){
        let re = document.createElement("h1");
        re.setAttribute("id", "re");
        re.innerHTML = "Recommended"
        recom.append(re);
    }
    recom.append(name,release,actors,directors,genre,country,lang,type,run,boxof,imdb);
movie.append(div,recom);



}