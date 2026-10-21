const blessed = require('blessed')
const figlet = require('figlet')
const rotas = []

// 1. A tela principal (o "canvas" do terminal)
const screen = blessed.screen({ smartCSR: true, title: 'sourceCODE' })

// 2. Título centralizado, em ASCII art
blessed.box({
  parent: screen,
  top: 2,
  width: '100%',
  height: 7,
  align: 'center',
  content: figlet.textSync('sourceCODE'),
  style: { fg: 'cyan', bold: true },
})

// 3. Subtítulo
blessed.box({
  parent: screen,
  top: 9,
  width: '100%',
  height: 1,
  align: 'center',
  content: 'sua ferramenta de comunicação',
  style: { fg: 'gray' },
})

// 4. Menu
const menu = blessed.list({
  parent: screen,
  top: 12,
  left: 'center',
  width: 30,
  height: 4,
  border: 'line',
  keys: true,
  items: ['chat - live', 'repositorio - local'],
  style: {
    border: { fg: 'cyan' },
    selected: { bg: 'cyan', fg: 'black' },
  },
})

// 5. Mensagem de como sair
blessed.box({
  parent: screen,
  top: 18,
  width: '100%',
  height: 1,
  align: 'center',
  content: 'Saia no Ctrl + C',
  style: { fg: 'red' },
})

menu.on('select', (item, index) => {
  rotas[index]()
  screen.render()
})

// 6. Sair com q ou Ctrl+C
screen.key(['q', 'C-c'], () => process.exit(0))

menu.focus()
screen.render()