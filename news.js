// ea42548d3560435baa2b806e6ef87897

console.log(" this is working fine!!")
let html;
let container = document.getElementById("container");
let btn = document.getElementById("btn");

let q = document.getElementById("q");
let apiKey = 'ea42548d3560435baa2b806e6ef87897';

btn.addEventListener("click", ()=>{

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/everything?q=${q.value}&apiKey=${apiKey}`, true);
xhr.getResponseHeader('content-type', 'application/json');

// xhr.onprogress = ()=>
// {
//     console.log("onprogress...");
//     container.innerHTML = `<h1>LOADING......</h1>`;
// }

xhr.onload = function () {
    if (this.status === 200) {
        console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        console.log(articles);
        html = ``;
        articles.forEach((element, index) => {

            let news = `<h2>${index+1}. ${element['title']}</h2>
                     <p>${element['content']} <br> <a href ="${element['url']}" target="_blank"> Read more...</a></p>`;

                     html += news;
        });


        container.innerHTML = html;


    } else {
        console.log("error");
    }
}


xhr.send();

});