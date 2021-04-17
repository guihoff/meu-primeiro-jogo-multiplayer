/** {@link https://codebeautify.org/jsviewer} */

const debug = true
window.debug = debug

/** Logica do jogo */
function game() {
    if (debug) console.log("Funcao game() chamada");

    const screen = document.getElementById('screen')
    const context = screen.getContext('2d')
    const currentPlayerId = 'player1'
  
    const state = {
      players: {
        'player1': {
          x: 1,
          y: 1
        },
        'player2': {
          x: 9,
          y: 9
        },
      },
  
      fruits: {
        'fruit1': {
          x: 3,
          y: 1
        },
      },
    }
  
    function createGame() {
    if (debug) console.log("Funcao createGame() chamada");

      function movePlayer(command) {
        if (debug) console.log(`Moving ${command.PlayerId} with ${command.keyPressed}`);
      }
      return {
        movePlayer
      }
    }
  
    const game = createGame()
    const keyboardListener = createKeyboardListener()
    keyboardListener.subscribe(game.movePlayer)
  
    function createKeyboardListener() {
      const state = {
          /** Recebe funcoes que observam eventos e executa elas no loop principal */
        observers: []
      }
  
      /** inscreve o evento para ser executado no loop principal */
      function subscribe(observerFunction) {
        state.observers.push(observerFunction)
      }
  
      /** Executa o Loop principal */
      function notifyAll(command) {
        if (debug) console.log(`Notifying ${state.observers.length} observers`);
  
        // Loop principal
        for (const observerFunction of state.observers) {
          // Executa funcoes observadoras que estao dentro do state.observers
          observerFunction(command)
  
        }
      }

      document.addEventListener('keydown', handleKeydown)
  
      function handleKeydown(event) {
        const keyPressed = event.key
  
        const command = {
          playerId: 'player1',
          keyPressed
        }
        notifyAll(command)
      }
  
      return {
        subscribe
      }
    }
  
  
  
    renderScreen()
  
    function renderScreen() {
      context.fillStyle = 'white'
      context.clearRect(0, 0, 10, 10)
  
  
      for (const playerId in game.players) {
        const player = game.players[playerId]
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, 1, 1)
  
      }
  
      for (const fruitId in game.fruits) {
        const fruit = game.fruits[fruitId]
        context.fillStyle = 'green'
        context.fillRect(fruit.x, fruit.y, 1, 1)
      }
      requestAnimationFrame(renderScreen)
    }
  }