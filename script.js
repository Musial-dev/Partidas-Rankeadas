function partidasRankeadas(vitorias, derrotas) {
	return vitorias - derrotas;
}

var saldoVitorias = partidasRankeadas(90, 3)
var nivel;

if (saldoVitorias < 0) {
    nivel = "não classificado";
} else {
    switch (true) {
        case saldoVitorias < 10:
            nivel = "Ferro";
            break;
        case saldoVitorias <= 20:
            nivel = "Bronze";
            break;
        case saldoVitorias <= 50:
            nivel = "Prata";
            break;
        case saldoVitorias <= 80:
            nivel = "Ouro";
            break;
        case saldoVitorias <= 90:
            nivel = "Diamante";
            break;
        case saldoVitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
            break;
    }
}
 
 console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`)