/**
  * @file Inicializa apenas apos o carregamento do DOM
  * {@link https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onload}
  */

/** inicializa o game apos o carregamento completo da window */
function bootGame() {
    game();
  }
  
  /** @desc inicializa o game apos o carregamento completo da window */
  window.onload = () => {
    bootGame();
  }