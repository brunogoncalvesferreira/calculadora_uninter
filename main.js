const result = document.querySelector('.result')
const notaEnem = document.querySelector('input')
const form = document.querySelector('form')

form.addEventListener('submit', handleEnem)

function handleCodi() {
  result.innerHTML = `
    <p>Você teve um desconto de 10% na sua inscrição.</p>
  `
}

function handleUninter() {
  result.innerHTML = `
    <p>Seu desconto foi de R$ 229,00 para R$ 189,00</p>
  `
}

function handleEnem(event) {
  event.preventDefault()

  let notaValue = Number(notaEnem.value);
  let discountText = '';
  
  switch(true) {
    case notaValue === 550:
      discountText = 'Seu desconto foi de R$ 597,00 para R$ 213,00';
      break;
    case notaValue > 550 && notaValue <= 600:
      discountText = 'Seu desconto foi de R$ 597,00 para R$ 202,00';
      break;
    case notaValue > 600 && notaValue <= 650:
      discountText = 'Seu desconto foi de R$ 597,00 para R$ 191,00';
      break;
    case notaValue > 650 && notaValue <= 900:
      discountText = 'Seu desconto foi de R$ 597,00 para R$ 181,00';
      break;
    case notaValue > 900 && notaValue <= 1000:
      discountText = 'Seu desconto foi de 100%';
      break;
    default:
      discountText = 'Infelizmente você ainda não tem desconto';
  }
  result.innerHTML = `<p>${discountText}</p>`;

  notaEnem.value = '';
  notaEnem.focus();
}

