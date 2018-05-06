// Esse codigo em Javascript orientado a objeto ja ta valendo como extra :P

var update = document.getElementById('update')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Squirtle',
     'quote': 'SQUIIIIIRTLEEE!!!!'
   })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
})

var del = document.getElementById('delete')

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Pikachu'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
})

var add= document.getElementById('add')

add.addEventListener('click', function () {
  fetch('quotes', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Mewtwo',
      'quote': 'As circunstâncias do nascimento de alguém são irrelevantes; é o que você faz com o dom da vida que determina quem você é.'
   })
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
})