class Kortele {
    constructor(logo, title, area, date) {
        this.logo = logo;
        this.title = title;
        this.area = area;
        this.date = date;
        return this.render();
    }
    render() {
        this.cardDiv = document.createElement('div');
        this.cardDiv.classList.add('card');

        this.parkLogo = document.createElement('img');
        this.parkLogo.setAttribute('src', this.logo);
        this.parkLogo.setAttribute('alt', 'Logo');
        this.cardDiv.appendChild(this.parkLogo);

        this.title = document.createElement('h2');
        this.title.textContent = this.title;
        this.cardDiv.appendChild(this.title);

        this.infoDiv = document.createElement('div');
        this.infoDiv.classList.add('info');

        this.area = document.createElement('p');
        this.area.textContent = `Plotas: ${this.area}`;
        this.infoDiv.appendChild(this.area);

        this.date = document.createElement('p');
        this.date.textContent = `Įkurtas: ${this.date}`;
        this.infoDiv.appendChild(this.date);

        this.cardDiv.appendChild(this.infoDiv);

        return this.cardDiv
    }
}