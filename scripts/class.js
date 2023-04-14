import Modal from './modaloGeneravimas.js'

export default class Kortele {
    constructor(logo, title, area, date, nuotraukos, aprasymas, isskirtine_verte, nuoroda) {
        this.logo = logo;
        this.title = title;
        this.area = area;
        this.date = date;
        this.nuotraukos = nuotraukos
        this.aprasymas = aprasymas
        this.isskirtine_verte = isskirtine_verte
        this.nuoroda = nuoroda
        return this.render();
    }
    render() {
        this.cardDiv = document.createElement('div');
        this.cardDiv.classList.add('card');

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
        this.cardDiv.addEventListener('click', () => {
            this.modal = new Modal({
                pavadinimas: this.title,
                nuotraukos: this.nuotraukos,
                aprasymas: this.aprasymas,
                isskirtine_verte: this.isskirtine_verte,
                plotas: this.area,
                ikurimo_data: this.date,
                nuoroda: this.nuoroda
            })
            document.body.appendChild(this.modal)
        })

        return this.cardDiv
    }
}