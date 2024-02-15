// 1.1
// const elem = document.getElementById('gender')
// elem.addEventListener('change', () => {
//     const option = elem.options[elem.selectedIndex]
//     console.log(option.value)
//     console.log(option.text)
// })

// elem.value = 'classic'
// 2.1

// const div = document.getElementById('div')


// div.addEventListener('click', () => {
//     const textarea = document.createElement('textarea')

//     textarea.value = div.innerHTML

//     div.replaceWith(textarea)
//     textarea.focus()

//     textarea.addEventListener('keydown', (event) => {

//         if (event.key === 'Enter' && !event.shiftKey) {
//             event.preventDefault()
//             const newDiv = document.createElement('div')
//             newDiv.innerHTML = textarea.value
//             textarea.replaceWith(newDiv)
//         }
//     })


//     textarea.addEventListener('blur', () => {
//         const newDiv = document.createElement('div')
//         newDiv.innerHTML = textarea.value
//         textarea.replaceWith(newDiv)
//     })
// })

// 3.1
const table = document.getElementById('Table')

table.addEventListener('click', (event) => {
    const cell = event.target.closest('td')

    if (cell && !cell.classList.contains('editing')) {
        cell.classList.add('editing')

        const textarea = document.createElement('textarea')
        textarea.value = cell.innerHTML

        const okButton = document.createElement('button')
        okButton.textContent = 'OK'
        const cancelButton = document.createElement('button')
        cancelButton.textContent = 'CANCEL'

        okButton.addEventListener('click', () =>{
            cell.innerHTML = textarea.value
            cell.classList.remove('editing')
        })



        cancelButton.addEventListener('click', () => {
            cell.classList.remove('editing')
        })

        cell.innerHTML = ''
        cell.appendChild(textarea)

        cell.appendChild(okButton)

        cell.appendChild(cancelButton)
    }
})

// 4.1
const calculate = () => {
    const deposit = parseFloat(document.getElementById('deposit').value)
    const rate = parseFloat(document.getElementById('rate').value)
    const nextDeposit = parseFloat(document.getElementById('nextDeposit').value)

    const total = deposit * (1 + rate / 100 * nextDeposit)

    document.getElementById('result').innerHTML = 'Сумма ' + deposit + ' через ' + nextDeposit
     + ' годa станет: '
      + total.toFixed(2)
}