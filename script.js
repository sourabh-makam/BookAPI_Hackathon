var head = document.createElement("div");
head.setAttribute("class", "container-fluid")


var logo = document.createElement("div");
logo.setAttribute("class", "d-inline logo-container col-md-4 col-sm-3 col-xs-2");
var logoImg = document.createElement("img");
logoImg.setAttribute("class", "site-logo")
logoImg.setAttribute("src", "Bookopedia_logo_1.JPG")
logo.append(logoImg);
var footerContainer = document.createElement("div");
var anchors = document.createElement("a");
anchors.setAttribute("href", "#about");
anchors.setAttribute("class", "links")
anchors.innerHTML = "About"
head.append(logo);
head.append(anchors)


document.body.append(head);

var url = "https://www.anapioficeandfire.com/api/books"

let mainSection = document.createElement("div")
mainSection.setAttribute("class", "main-section")



async function getBookDetails() {
    try {
        let bookDetailsFromAPI = await fetch(url);
        let bookDetailsJSON = await bookDetailsFromAPI.json();

        bookDetailsJSON.forEach(element => {
            let bookDetailsContainer = document.createElement("div");
            bookDetailsContainer.setAttribute("class", "bookDetailsContainer")
            let charDetailsContainer = document.createElement("div");
            bookDetailsContainer.innerHTML = `<span>Name: </span>${element.name}<br>
        <span>ISBN: </span>${element.isbn}<br><span>Number Of Pages: </span>${element.numberOfPages}<br><span>Authors: </span>${element.authors[0]}<br>
        <span>Publisher: </span>${element.publisher}<br><span>ReleaseDate: </span>${new Date(element.released).toDateString()}<br>`;
            fetch(element.characters[0]).then(data => data.json()).then(value => {

                charDetailsContainer.innerHTML = `<span>Character: </span>${value.name}`;
                bookDetailsContainer.append(charDetailsContainer)
            });
            mainSection.append(bookDetailsContainer);
        });
    }
    catch (err) {
        alert(err);
    }



}


getBookDetails();

document.body.append(mainSection);

var aboutContainer = document.createElement("div");
aboutContainer.setAttribute("id", "about")
var aboutText = document.createElement("p");
aboutText.innerHTML = `The world's greatest source for quantified and structured data from the universe of <strong><em>Ice and Fire</em></strong> (and the HBO series Game of Thrones)`;
aboutContainer.append(aboutText)

document.body.append(aboutContainer)











