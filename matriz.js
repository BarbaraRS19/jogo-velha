let button,quebraLinha, jogada = 1, vencedor = 0
let tabuleiro = new Array(3)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}




for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
    button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('id','bt' + i + "" + j)
    button.setAttribute('class', 'btJogo' + i)
    button.setAttribute('onclick', 'marca(' + i + "," + j +")")
    button.append(document.createTextNode(""))
    document.body.append(button)
    }
}




function marca(linha, coluna){
    marcaCasa("bt" + linha + "" + coluna)
}




function marcaCasa(nomeBotao){
if(jogada % 2 == 0){
    document.getElementById(nomeBotao).innerText = "O"
    document.getElementById(nomeBotao).style.color =  "blue"
    tabuleiro[nomeBotao[2]][nomeBotao[3]] = "O"
}else{
    document.getElementById(nomeBotao).innerText = "X"
    document.getElementById(nomeBotao).style.color =  "red"
    tabuleiro[nomeBotao[2]][nomeBotao[3]] = "X"
}
console.log(tabuleiro)
document.getElementById(nomeBotao).disabled = true
let line = nomeBotao.charAt(2)
let column = nomeBotao.charAt(3)
jogada++
if(jogada >= 5){
    verificaLxC()
    verificaDiagonais()
}
if(jogada >= 9){
alert("Jogo Empatado!")
}


}


function verificaLxC() {
    for( var i = 0; i < 3; i += 3) {
        if ( tabuleiro[i][0] == 'X' && tabuleiro[i][1] == 'X' && tabuleiro[i][2] == 'X' ) {
            alert ("Jogo Encerrado")
            vencedor ++
        }
        if ( tabuleiro[i][0] == 'O' && tabuleiro[i][1] == 'O' && tabuleiro[i][2] == 'O' ) {
            alert ("Jogo Encerrado")
            vencedor ++
        }
    }
    for( var i = 0; i < 3; i++) {
        if ( tabuleiro[0][i] == 'X' && tabuleiro[1][i] == 'X' && tabuleiro[2][i] == 'X' ) {
            alert ("Jogo Encerrado")
            vencedor ++
        }
        if ( tabuleiro[0][i] == 'O' && tabuleiro[1][i] == 'O' && tabuleiro[2][i] == 'O' ) {
            alert ("Jogo Encerrado")
            vencedor ++
        }
    }


}


function verificaDiagonais() {
    console.log(tabuleiro)
    if ( (tabuleiro[0][0] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][2] == 'X') ||
        (tabuleiro[0][2] == 'X' && tabuleiro[1][1] == 'X' && tabuleiro[2][0] == 'X')) {
        alert ("Jogo Encerrado")
        vencedor ++
    } else if ( (tabuleiro[0][0] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][2] == 'O') ||
                (tabuleiro[0][2] == 'O' && tabuleiro[1][1] == 'O' && tabuleiro[2][0] == 'O') ) {
        alert ("Jogo Encerrado")
        vencedor ++
    }


}
