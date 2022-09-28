function calcular(){
    var altura = document.getElementById('alt')
    var peso = document.getElementById('pes')
    var idade = document.getElementById('ida')  
    var gen = document.getElementsByName('genero')
    var res = document.querySelector('div#res')
    


        var Npes = Number(peso.value)
        var Nida = Number(idade.value)
        var Nalt = Number(altura.value)

        var mulher = 66 + (13,7 * Npes) + (5 * Nalt) - (6,8 * Nida)
        var homem = 665 + (9,6 * Npes) + (1,8 * Nalt) - (4,7 * Nida)

    if(gen[0].checked) {
        res.innerHTML = "Seu gasto calórico é " + homem + " Kcal/Dia"
    } else {
        res.innerHTML = "Seu gasto calórico é " +  mulher + "Kcal/Dia"
    }
}
    