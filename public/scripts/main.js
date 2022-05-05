const input = document.querySelector('#search')
const datalist = document.querySelector('#suggestions')

let pesquisa = []

input.addEventListener('keydown', ({ key }) => {
  datalist.innerHTML = ''
  if (key == 'Backspace') {
    pesquisa.pop()
  } else if (key == 'Shift' || key == 'CapsLock') {
  } else {
    pesquisa.push(key)
  }
  const url = `/dados/${pesquisa.join('')}`

  if(pesquisa.length != 0) {
    fetch(url)
      .then(resp => resp.json())
      .then(content =>
        content.forEach(element => {
          const option = document.createElement('option')
          option.innerHTML = element.nome
          datalist.appendChild(option)
        })
      )
      .catch(console.log)
  }
})

// Grafico

const labels = ['January', 'February', 'March', 'April', 'May', 'June']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Vendas no semestre 2020',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 10, 20, 25, 20, 30, 50]
    },
    {
      label: 'Vendas no semestre 2021',
      backgroundColor: 'rgb(99, 255, 132)',
      borderColor: 'rgb(99, 255, 132)',
      data: [15, 10, 5, 45, 24, 30, 50]
    }
  ]
}

const config = {
  type: 'line',
  data: data,
  options: {}
}

const myChart = new Chart(document.getElementById('myChart'), config)
