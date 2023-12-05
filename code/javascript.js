    const checkbox = document.querySelector('input')
    const button = document.querySelector('button')
    const result = document.querySelector('p')
    const price = document.querySelector('h1')

    const discountCodi = 0.10 // 10% de desconto
    const coursePrice = 500 // Valor do curso

    const formmatPriceBRL = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    price.innerText = `${formmatPriceBRL.format(coursePrice)}`

    button.addEventListener('click', (e) => {
      e.preventDefault()

      const isChecked = checkbox.checked
      if(isChecked) {
        const discount = coursePrice * discountCodi
        const descontedPrice = coursePrice - discount
        result.innerText = `
          Seu desconto foi de ${formmatPriceBRL.format(coursePrice)} para 
          ${formmatPriceBRL.format(descontedPrice)}.
        `
      } else {
        result.innerText = 'Selecione o checkbox'
      }
    })