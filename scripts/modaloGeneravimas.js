class modaloGeneravimas {
    constructor(props) {
        this.props = props;
        return this.render();
    }
    render() {
        this.modalDiv = document.createElement('div');
        this.modalDiv.classList.add('modal');

        this.backdropDiv = document.createElement('div');
        this.backdropDiv.classList.add('modal_backdrop');

        this.contentDiv = document.createElement('div');
        this.contentDiv.classList.add('modal_content');
        
        this.modalDiv.append(this.backdropDiv, this.contentDiv);

        this.button = document.createElement('button');
        this.buttonText = document.createTextNode('x');
        this.button.appendChild(this.buttonText);

        this.h2 = document.createElement('h2');
        this.h2Text = document.createTextNode(this.props.pavadinimas);
        this.h2.appendChild(this.h2Text);

        this.cardDiv = document.createElement('div')

        this.img = document.createElement('img');
        this.img.setAttribute('src', this.props.nuotraukos[0]);
        this.img.setAttribute('alt', `${this.props.pavadinimas} foto`);

        this.modalTextDiv = document.createElement('div');
        this.modalTextDiv.classList.add('modal_text');

        this.props.aprasymas.forEach(paragrafas => {
            this.p1 = document.createElement('p');
            this.p1Text = document.createTextNode(paragrafas);
            this.p1.appendChild(this.p1Text);
            this.modalTextDiv.appendChild(this.p1);
        });

        this.p2 = document.createElement('p');
        this.p2Text = document.createTextNode(this.props.isskirtine_verte);
        this.p2.appendChild(this.p2Text);
        this.modalTextDiv.appendChild(this.p2);
        
        this.cardDiv.append(this.img, this.modalTextDiv);

        this.lastP1 = document.createElement('p');
        this.lastP1Text = document.createTextNode(`${this.props.plotas} ha`);

        this.span1 = document.createElement('span');
        this.span1.classList.add('green');
        this.span1Text = document.createTextNode('Plotas: ')
        this.span1.appendChild(this.span1Text);

        this.lastP1.append(this.span1, this.lastP1Text);

        this.lastP2 = document.createElement('p');
        this.lastP2Text = document.createTextNode(this.props.ikurimo_data);

        this.span2 = document.createElement('span');
        this.span2.classList.add('green');
        this.span2Text = document.createTextNode('Įkūrimo data: ')
        this.span2.appendChild(this.span2Text);

        this.lastP2.append(this.span2, this.lastP2Text);

        this.lastP3 = document.createElement('p');
        this.link = document.createElement('a');
        this.link.setAttribute('href', this.props.nuoroda);
        this.link.setAttribute('target', '_blank');
        this.linkText = document.createTextNode(this.props.pavadinimas);
        this.link.appendChild(this.linkText);

        this.span3 = document.createElement('span');
        this.span3.classList.add('green');
        this.span3Text = document.createTextNode('Nuoroda: ')
        this.span3.appendChild(this.span3Text);

        this.lastP3.append(this.span3, this.link);

        this.contentDiv.append(this.button, this.h2, this.cardDiv, this.lastP1, this.lastP2, this.lastP3);

        return this.modalDiv;
    }
}