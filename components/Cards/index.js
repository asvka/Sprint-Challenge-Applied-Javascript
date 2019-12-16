// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardSelector = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
        .then((res) => {
            const articles = res.data.articles;
            const js = articles.javascript;
            const bs = articles.bootstrap;
            const jq = articles.jquery;
            const node = articles.node;
            const techno = articles.technology;

            js.forEach((x) => {
                cardSelector.appendChild(articleCreator(x))
            });
            bs.forEach((x) => {
                cardSelector.appendChild(articleCreator(x))
            });
            jq.forEach((x) => {
                cardSelector.appendChild(articleCreator(x))
            });
            node.forEach((x) => {
                cardSelector.appendChild(articleCreator(x))
            });
            techno.forEach((x) => {
                cardSelector.appendChild(articleCreator(x))
            });
            // const articleArr = res.data.article;
            // articleArr.forEach(i => {
            //     const articles = articleCreator(res.data);
            //     cardSelector.appendChild(articles);
            // })
            // const articleList = articles.map ((x) => {
            //     return x.data.articles;
            // })
            // return articleList;

            console.log(res);
            // return articleArr;
        });

function articleCreator(x){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = x.headline;
    author.textContent = x.authorName;
    authorImg.src = x.authorPhoto;


    return card;
}

