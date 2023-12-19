function calculadora(vitoria, derrota)
{
	let qtd_vitoria = vitoria - derrota
    let nivel 
    
    if(qtd_vitoria <= 10)
    {
    	nivel = "Ferro"
    }
    else if (qtd_vitoria >= 11 && qtd_vitoria <= 20)
    {
    	nivel = "Bronze"
    }
    else if (qtd_vitoria >= 21 && qtd_vitoria <= 50)
    {
    	nivel = "Prata"
    }
    else if (qtd_vitoria >= 51 && qtd_vitoria <= 80)
    {
    	nivel = "Ouro"
    }
    else if (qtd_vitoria >= 81 && qtd_vitoria <= 90)
    {
    	nivel = "Diamante"
    }
    else if (qtd_vitoria >= 91 && qtd_vitoria <= 100)
    {
    	nivel = "Lendario"
    }
    else if (qtd_vitoria >= 101)
    {
    	nivel = "Imortal"
    }
    
	return nivel
}

let vitoria = 20
let derrota = 4
let saldo_vitoria = vitoria - derrota

let nivel = calculadora(vitoria, derrota);

console.log("O Herói tem de saldo de " + saldo_vitoria + " está no nível de " + nivel)