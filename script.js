let btn = document.querySelector("button");
let key = "XJJ4OI0EpKohVzuEW7PPgXzv9h1eug12XDUBUaB6odg";
let res = document.getElementById("images");

async function searchImages() {

    let query = document.querySelector("input").value;

    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=15&client_id=${key}`;

    const response = await fetch(url);
    const result = await response.json();

    res.innerHTML = "";

    for (let i = 0; i < result.results.length; i++) {
        let div = document.createElement("div");
        div.classList.add("image-card");

        let img = document.createElement("img");
        img.src = result.results[i].urls.small;

        div.append(img);
        res.append(div);
    }
}

btn.addEventListener("click", searchImages);