export default class modaloGeneravimas {
    constructor(props) {
        this.props = props;
        this.currentImage=0;
        return this.render();
    }
    render() {
        this.modalDiv = document.createElement('div');
        this.modalDiv.classList.add('modal');

        this.backdropDiv = document.createElement('div');
        this.backdropDiv.classList.add('modal_backdrop');
        this.backdropDiv.addEventListener('click', () => this.closeModal())

        this.contentDiv = document.createElement('div');
        this.contentDiv.classList.add('modal_content');

        this.modalDiv.append(this.backdropDiv, this.contentDiv);

        this.button = document.createElement('button');
        this.buttonText = document.createTextNode('x');
        this.button.appendChild(this.buttonText);

        this.button.addEventListener('click', () => this.closeModal())

        this.h2 = document.createElement('h2');
        this.h2Text = document.createTextNode(this.props.pavadinimas);
        this.h2.appendChild(this.h2Text);

        this.cardDiv = document.createElement('div')
        this.cardDiv.classList.add('description');

        this.imageDiv=document.createElement('div');
        this.imageDiv.classList.add('images_container');

        this.img = document.createElement('img');
        this.img.classList.add('sliding_img');
        this.img.setAttribute('src', this.props.nuotraukos[0]);
        this.img.setAttribute('alt', `${this.props.pavadinimas} foto`);

        this.prevImageButton=document.createElement('button');
        this.prevImageButton.classList.add('prev_button');
        this.prevImageButton.textContent="‹";
        this.prevImageButton.addEventListener('click',()=>this.showPrevImg());

        this.nextImageButton=document.createElement('button');
        this.nextImageButton.classList.add('next_button');
        this.nextImageButton.textContent="›";
        this.nextImageButton.addEventListener('click',()=>this.showNextImg());

        this.imageCounter=document.createElement('div');
        this.imageCounter.classList.add('image_counter');

        this.currentPhoto=document.createElement('span');
        this.currentPhoto.textContent=this.currentImage+1;
        this.totalPhotos=document.createElement('span');
        this.totalPhotos.textContent=this.props.nuotraukos.length;
        this.imageCounter.append(this.currentPhoto,' / ',this.totalPhotos);

        this.imageDiv.append(this.img,this.prevImageButton,this.nextImageButton,this.imageCounter);

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

        this.cardDiv.append(this.imageDiv, this.modalTextDiv);

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

    closeModal() {
        this.modalDiv.remove()
    }

    showNextImg(){
        if(this.currentImage<this.props.nuotraukos.length-1){
            this.img.src=this.props.nuotraukos[this.currentImage+1]
            this.currentImage++
        }else{
            this.img.src=this.props.nuotraukos[0]
            this.currentImage=0;
        }
        this.currentPhoto.textContent=this.currentImage+1;
    }
    showPrevImg(){
        if(this.currentImage>0){
            this.img.src=this.props.nuotraukos[this.currentImage-1]
            this.currentImage--
        }else{
            this.img.src=this.props.nuotraukos[this.props.nuotraukos.length-1]
            this.currentImage=this.props.nuotraukos.length-1;
        }
        this.currentPhoto.textContent=this.currentImage+1;
    }

}