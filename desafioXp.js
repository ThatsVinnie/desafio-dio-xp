let nome = 'Vinnie'
let xp = 7200
let lvl = undefined


if(xp <= 1000){

    lvl = "Ferro"

}else if(xp <= 2000){

    lvl = "Bronze"

}else if(xp <= 5000){

    lvl = "Prata"

}else if(xp <= 7000){

    lvl = "Ouro"

}else if(xp <= 8000){

    lvl = "Platina"

}else if(xp <= 9000){

    lvl = "Ascendente"

}else if(xp <= 10000){

    lvl = "Imortal"

}else{

    lvl = "Radiante"

}

console.log(`O Herói de nome: **${nome}** está no nível: **${lvl}**`)