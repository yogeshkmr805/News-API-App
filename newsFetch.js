console.log("News Fetch Api is woirking!!!");

let container = document.getElementById("container");
let btn = document.getElementById("btn");
let q = document.getElementById("q");

let apiKey = 'ea42548d3560435baa2b806e6ef87897';

// OnClick on Submit Button
btn.addEventListener("click", () => {

    async function shownews() {

        const url = `https://newsapi.org/v2/everything?q=${q.value}&apiKey=${apiKey}`;

        const headers = new Headers();
        headers.append('Accept', 'application/json');

        // A Request to Fetch API to be send
        const request = new Request(url, {
            method: 'GET',
            cache: 'reload',
            headers: headers
        });

        let fetchResult = await fetch(request);
        console.log(request);

        let response = await fetchResult;

        let json = await response.json();

        //Array of articles in json object
        let articles = json['articles']

        let html = ``;
        articles.forEach((element, index) => {

            let news = `<h2>${index+1}. ${element['title']}</h2>
                     <p>${element['content']} <br> <a href ="${element['url']}" target="_blank"> Read more...</a></p>`;

            html += news;
        });


        container.innerHTML = html;

    }

    shownews();

});