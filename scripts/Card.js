import Modal from './Modal.js'
export default class Kortele {
    constructor(logo, title, area, date, description, images, link, unique_value) {
        this.logo = logo;
        this.title = title;
        this.area = area;
        this.date = date;
        this.description = description
        this.images = images
        this.link = link
        this.unique_value = unique_value
        return this.render();
    }
    render() {
        this.cardDiv = document.createElement('div');
        this.cardDiv.classList.add('card');

        this.cardDiv.addEventListener('click', () => this.openModal())

        this.parkLogo = document.createElement('img');
        this.parkLogo.setAttribute('src', this.logo);
        this.parkLogo.setAttribute('alt', 'Logo');
        this.cardDiv.appendChild(this.parkLogo);

        this.titleEl = document.createElement('h2');
        this.titleEl.textContent = this.title;
        this.cardDiv.appendChild(this.titleEl);

        this.infoDiv = document.createElement('div');
        this.infoDiv.classList.add('info');

        this.areaEl = document.createElement('p');
        this.areaEl.textContent = `Plotas: ${this.area} ha`;
        this.infoDiv.appendChild(this.areaEl);

        this.dateEl = document.createElement('p');
        this.dateEl.textContent = `Įkurtas: ${this.date}`;
        this.infoDiv.appendChild(this.dateEl);

        this.cardDiv.appendChild(this.infoDiv);

        return this.cardDiv
    }

    openModal() {
        const modal = new Modal({
            pavadinimas: this.title,
            nuotraukos: this.images,
            aprasymas: this.description,
            isskirtine_verte: this.unique_value,
            plotas: this.area,
            ikurimo_data: this.date,
            nuoroda: this.link,

        })

        document.body.appendChild(modal)

    }
}