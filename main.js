const form = document.querySelector('form')
const checkbox = document.querySelector('.codi')
const result = document.querySelector('.result')
const notaEnem = document.querySelector('.input-form')
const buttonActiveEnem = document.querySelector('.button-generate-enem')

const priceFixSite = 597
const vestibularUninter = 189
const graduationAndTransfer = 205
const discountCodi = 0.10

const formmatPriceBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
})


function handleUninter() {
  const discount = vestibularUninter * discountCodi
  const descontedPrice = vestibularUninter - discount
  const isChecked = checkbox.checked

  if (isChecked) {
    result.innerHTML = `
    <p>Seu desconto foi de ${formmatPriceBRL.format(priceFixSite)} para ${formmatPriceBRL.format(descontedPrice)}</p>
  `
  } else {
    result.innerHTML = `
    <p>Seu desconto foi de ${formmatPriceBRL.format(priceFixSite)} para ${formmatPriceBRL.format(vestibularUninter)}</p>
  `
  }
}

function handleDipTransf() {
  const discount = graduationAndTransfer * discountCodi
  const descontedPrice = graduationAndTransfer - discount
  const isChecked = checkbox.checked

  if (isChecked) {
    result.innerHTML = `
    <p>Seu desconto foi de ${formmatPriceBRL.format(priceFixSite)} para ${formmatPriceBRL.format(descontedPrice)}</p>
  `
  } else {
    result.innerHTML = `
    <p>Seu desconto foi de ${formmatPriceBRL.format(priceFixSite)} para ${formmatPriceBRL.format(graduationAndTransfer)}</p>
  `
  }
}

buttonActiveEnem.addEventListener('click', () => {
  notaEnem.classList.toggle('isActive')
})

function handleEnem() {
  let notaValue = Number(notaEnem.value);
  let discountText = '';

  const priceNote550 = 213
  const priceNote550And600 = 202
  const priceNote600And650 = 191
  const priceNote650And900 = 181
  const priceNote900And1000 = '100%' 

  function handleCalculeDiscountEnem(priceFixEnem) {
    const isChecked = checkbox.checked
    const discount = priceFixEnem * discountCodi
    const descontedPrice = priceFixEnem - discount

    if(isChecked) {
      discountText = `
        Seu desconto foi de ${formmatPriceBRL.format(priceFixSite)} 
        para ${formmatPriceBRL.format(descontedPrice)}.`;
    } else {
      discountText = `
        Seu desconto foi de ${formmatPriceBRL.format(priceFixSite)} 
        para ${formmatPriceBRL.format(priceFixEnem)}.`;
    }

    return descontedPrice
  }

  if (notaValue === 550) {
    handleCalculeDiscountEnem(priceNote550)
  } 
  else if (notaValue > 550 && notaValue <= 600) {
    handleCalculeDiscountEnem(priceNote550And600)
  } 
  else if (notaValue > 600 && notaValue <= 650) {
    handleCalculeDiscountEnem(priceNote600And650)
  } 
  else if (notaValue > 650 && notaValue <= 900) {
    handleCalculeDiscountEnem(priceNote650And900)
  } 
  else if (notaValue > 900 && notaValue <= 1000) {
    discountText = `Seu desconto foi de ${priceNote900And1000}.`;
  }
  result.innerHTML = `<p>${discountText}</p>`;

  notaEnem.value = '';
  notaEnem.focus();
}


