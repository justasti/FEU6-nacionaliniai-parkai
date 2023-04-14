const forma = document.querySelector('#contactForm')
forma.addEventListener('submit', e => {
  e.preventDefault();
  const h2 = document.createElement('h2');
  const vardas = e.target.elements.name.value;
  const pastas = e.target.elements.email.value;
  const zinute = e.target.elements.message.value;
  let h2Text;
  const egzistuojantiZinute=document.querySelector('form>h2');
  if(egzistuojantiZinute){
    egzistuojantiZinute.remove();
  }
  if (!vardas || !pastas || !zinute) {
    h2Text = document.createTextNode('Užpildykite visus duomenis');
  } else {
    h2Text = document.createTextNode('Užklausa išsiųsta');
    e.target.reset();
  }
  h2.appendChild(h2Text);
  forma.appendChild(h2);
})