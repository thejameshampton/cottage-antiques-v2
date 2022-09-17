class News {
    constructor(title, description) {
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
        
        this.description = document.createElement('p');
        this.description.classList.add('news__description');
        this.description.innerText = description;
        
        this.container.appendChild(this.close);
        this.container.appendChild(this.title);
        this.container.appendChild(this.description);
    }
    
    append() {
        document.getElementById('news-list').append(this.container);
    }
}

const news = new News('Open House', 'Open House Friday, 9/16 to Saturday, 9/17 from 9:00AM-3:00PM.');
news.append();