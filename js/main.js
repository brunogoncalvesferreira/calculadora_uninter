const checkbox = document.querySelector(".codi")
const result = document.querySelector(".result")
const notaEnem = document.querySelector(".input-enem")
const buttonActiveEnem = document.querySelector(".button-generate-enem")
const toggleSwitch = document.getElementById("toggleSwitch")
const buttonActiveVestibular = document.querySelector(
  ".button-generate-vestibular"
)
const notaVestibular = document.querySelector(".input-vestibular")
const btnGraduAndTransf1 = document.querySelector(".btn-gradu-transf1")
const btnGraduAndTransf2 = document.querySelector(".btn-gradu-transf2")

const online = 50
const presencial = 123
let value

const priceFixSite = 597
const vestibularUninter = 189
const graduationAndTransfer = 205
const discountCodi = 0.1

const formmatPriceBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})

document
  .querySelector(".wrapper-vestibular")
  .addEventListener("submit", (event) => {
    event.preventDefault()
  })

document.querySelector(".wrapper-form").addEventListener("submit", (event) => {
  event.preventDefault()
})

buttonActiveVestibular.addEventListener("click", () => {
  document.querySelector(".wrapper-vestibular").classList.toggle("active")
  document.querySelector(".wrapper-form").classList.remove("isActive")
})

btnGraduAndTransf1.addEventListener("click", () => {
  btnGraduAndTransf1.classList.add("isBtn")
})

btnGraduAndTransf2.addEventListener("click", () => {
  btnGraduAndTransf2.classList.add("isBtn")
})

buttonActiveEnem.addEventListener("click", () => {
  document.querySelector(".wrapper-form").classList.toggle("isActive")
  document.querySelector(".wrapper-vestibular").classList.remove("active")
})

toggleSwitch.addEventListener("change", handleChangeToggle)

toggleSwitch.addEventListener("change", () => {
  handleChangeToggle()
  calculateDiscountButtonToggle()
})

function handleChangeToggle() {
  value = toggleSwitch.checked ? online : presencial
  return value
}

function calculateDiscountButtonToggle() {
  if (document.querySelector(".wrapper-form").classList.contains("isActive")) {
    handleEnem()
  } else if (
    document.querySelector(".wrapper-vestibular").classList.contains("active")
  ) {
    handleUninter()
  } else if (
    btnGraduAndTransf1.classList.contains("isBtn") ||
    btnGraduAndTransf2.classList.contains("isBtn")
  ) {
    handleDipTransf()
  }
}

function handleUninter() {
  const notaValue = Number(notaVestibular.value)

  function handleCalculeDiscountVestibular(priceFixVestibular) {
    const isChecked = checkbox.checked
    const discount = priceFixVestibular * discountCodi
    const descontedPrice = priceFixVestibular - discount + handleChangeToggle()

    if (isChecked) {
      result.innerHTML = `
    <h1>Sua mensalidade foi de ${formmatPriceBRL.format(
      priceFixSite
    )} para ${formmatPriceBRL.format(descontedPrice)}.</h1>
  `
    } else {
      result.innerHTML = `
    <h1>Sua mensalidade foi de ${formmatPriceBRL.format(
      priceFixSite
    )} para ${formmatPriceBRL.format(
        vestibularUninter + handleChangeToggle()
      )}.</h1>
  `
    }
    notaVestibular.focus()
  }

  if (notaValue >= 30) {
    handleCalculeDiscountVestibular(vestibularUninter)
  } else {
    result.innerHTML = `<h1>Sua mensalidade é ${formmatPriceBRL.format(
      priceFixSite
    )}</h1>`
  }
}

function handleDipTransf() {
  const discount = graduationAndTransfer * discountCodi
  const descontedPrice = graduationAndTransfer - discount + handleChangeToggle()
  const isChecked = checkbox.checked

  if (isChecked) {
    result.innerHTML = `
    <h1>Sua mensalidade foi de ${formmatPriceBRL.format(
      priceFixSite
    )} para ${formmatPriceBRL.format(descontedPrice)}.</h1>
  `
  } else {
    result.innerHTML = `
    <h1>Sua mensalidade foi de ${formmatPriceBRL.format(
      priceFixSite
    )} para ${formmatPriceBRL.format(
      graduationAndTransfer + handleChangeToggle()
    )}.</h1>
  `
  }

  document.querySelector(".wrapper-vestibular").classList.remove("active")
  document.querySelector(".wrapper-form").classList.remove("isActive")
}

function handleEnem() {
  let notaValue = Number(notaEnem.value)
  let discountText = ""

  const priceNote550 = 213
  const priceNote550And600 = 202
  const priceNote600And650 = 191
  const priceNote650And900 = 181
  const priceNote900And1000 = "100%"

  function handleCalculeDiscountEnem(priceFixEnem) {
    const isChecked = checkbox.checked
    const discount = priceFixEnem * discountCodi
    const descontedPrice = priceFixEnem - discount + handleChangeToggle()

    if (isChecked) {
      discountText = `
      Sua mensalidade foi de ${formmatPriceBRL.format(priceFixSite)} 
        para ${formmatPriceBRL.format(descontedPrice)}.`
    } else {
      discountText = `
      Sua mensalidade foi de ${formmatPriceBRL.format(priceFixSite)} 
        para ${formmatPriceBRL.format(priceFixEnem + handleChangeToggle())}.`
    }

    return descontedPrice
  }

  if (notaValue === 550) {
    handleCalculeDiscountEnem(priceNote550)
  } else if (notaValue > 550 && notaValue <= 600) {
    handleCalculeDiscountEnem(priceNote550And600)
  } else if (notaValue > 600 && notaValue <= 650) {
    handleCalculeDiscountEnem(priceNote600And650)
  } else if (notaValue > 650 && notaValue <= 900) {
    handleCalculeDiscountEnem(priceNote650And900)
  } else if (notaValue > 900 && notaValue <= 1000) {
    discountText = `Seu desconto foi de ${priceNote900And1000}.`
  } else {
    discountText = `Desculpa você informou uma nota inválida!`
  }
  result.innerHTML = `<h1>${discountText}</h1>.`

  notaEnem.focus()
}
