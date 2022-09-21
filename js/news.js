//Created a class because I could
class News {
    //constructor creates and initializes a container with a title, a close button, and between 1 and 3 descriptions
    constructor(title, description1, description2, description3) {
        this.container = document.createElement('div');
        this.container.classList.add('news');

        this.close = document.createElement('button');
        this.close.classList.add('news__close');
        this.close.innerText = 'X';
        this.close.onclick = () => {
            this.container.style.display = 'none';
        };

        this.title = document.createElement('h2');
        this.title.classList.add('news__title');
        this.title.innerText = title;
        
        this.description1 = document.createElement('p');
        this.description1.classList.add('news__description');
        this.description1.innerText = description1;
        
        this.container.appendChild(this.close);
        this.container.appendChild(this.title);
        this.container.appendChild(this.description1);
        
        if(description2) {
            this.description2 = document.createElement('p');
            this.description2.classList.add('news__description');
            this.description2.innerText = description2;
            this.container.appendChild(this.description2);
        }

        if(description3) {
            this.description3 = document.createElement('p');
            this.description3.classList.add('news__description');
            this.description3.innerText = description3;
            this.container.appendChild(this.description3);
        }
    }

    //Appends news to header
    append() {
        document.getElementById('news-list').append(this.container);
    }
}

//Imports JSON file and sets up a news alert for each instance in the file
const setNews = async () => {
    const data = await fetch('../news.json');
    const newsResults = await data.json();
    for(let i = 0; i < newsResults.alerts.length; i++) {
        if(newsResults.alerts[i].status === 'on') {
            const news = new News(newsResults.alerts[i].title, newsResults.alerts[i].description1, newsResults.alerts[i].description2, newsResults.alerts[i].description3);
            news.append();
        }
    }
}

setNews();