/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */ 
   console.log("Boas vindas ao jogo de Blackjack!") 

   if(confirm("Quer iniciar uma rodada? Se sim, clique em ok, caso contrário cancelar.")) { 
      const carta = comprarCarta(); 
 
   console.log(carta.texto) 

   console.log(carta.valor) 

   const cartasDoJogador = [comprarCarta(), comprarCarta()]; 
   const cartasDoComputador = [comprarCarta(), comprarCarta()]; 
   
   console.log(cartasDoComputador, cartasDoComputador)  

  const somaCartasJogador = cartasDoJogador[0].valor + cartasDoComputador[1].valor; 
  const somaCartasComputador = cartasDoComputador[0].valor + cartasDoJogador[1].valor;
  
   if(somaCartasJogador === somaCartasComputador) {
      console.log("Deu empate!")
   } else if(somaCartasJogador > somaCartasComputador) {
      console.log("O usuário ganhou dessa vez!")
   } else if(somaCartasComputador > somaCartasJogador) {
      console.log("O computador ganhou dessa vez!")
   }
   } else {
   console.log("O jogo acabou.")
   } 