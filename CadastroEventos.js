let dataEvento = new Date("02/28/2022")
let dataHoje = new Date()

if (dataEvento > dataHoje) {
    console.log("Data de evento válida. Cadastro pode ser realizado!")
} else {
    console.log("Data de evento inválida. Cadastro não pode ser realizado!")
  }

  let idadeParticipante = 25

  if (idadeParticipante >= 18) {
      console.log("Participante maior de idade. Cadastro pode ser realizado!")
      
  } else {
      console.log("Participante menor de idade. Cadastro não pode ser realizado!")
  }

let listaParticipantes = ["Maria", "João", "José", "Ricardo", "Marcelo", "Rita", "Carlos","Daniel", "Deiverson"];
let qtdParticipantes = (listaParticipantes.length);

if (qtdParticipantes < 10) {
        console.log("Será possível cadastrar o novo participante.");
        listaParticipantes.push("Paulo");
        for(let contador = 0; contador < listaParticipantes.length; contador++)
        {
            console.log(listaParticipantes[contador]);
            }
    }
 else {
    console.log("Não será possível cadastrar novo participante.");
}


