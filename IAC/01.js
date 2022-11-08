var a = 3;
console.log("var a = " +a);
console.log("tipo: " +typeof a);
console.log(" ")

var b = "name";
console.log("var b = " +b);
console.log("tipo: " +typeof b);
console.log(" ")

var c = true;
console.log("var c = " +c);
console.log("tipo: " +typeof c);
console.log(" ")

var d = null;
console.log("var d = " +d);
console.log("tipo: " +typeof d);
console.log(" ");

var e;
console.log("var e = " +e);
console.log("tipo: " +typeof e);
console.log(" ")


//-------------------------------------------------------//

const resultado = document.querySelector('#resultado');
const num = parseFloat(document.getElementById("num").value);
const num2 = parseFloat(document.getElementById("num2").value);
const num3 = parseFloat(document.getElementById("num3").value);

const calcMedia = () => {


  const media = ((num + num2 + num3)/3).toFixed(2);


    resultado.innerHTML = `A média é: ${media}`

}

//------------------------------------------------------//

const resultado1 = document.querySelector('#resultado1');
const nota = parseFloat(document.getElementById("nota").value);
const nota2 = parseFloat(document.getElementById("nota2").value);
const nota3 = parseFloat(document.getElementById("nota3").value);

const calcNota = () => {
 const media1 = (nota + nota2 + nota3).toFixed(2);
  let mediaNota = ''
  if (media1< 6) {
    mediaNota = 'Deverá fazer AF...'
  } else if (media1 >= 6) {
    mediaNota= 'Parabéns, você passou!!'
  }


    resultado1.innerHTML = `A nota é: ${media1}, portanto: ${mediaNota}`

}

//-------------------------------------------------------//

const resultado2 = document.querySelector('#resultado2');
const nome =  document.getElementById("nome").value;
const idade = parseFloat(document.getElementById("idade").value);

const calcIdade = () => {
let idade2 = ''
  if (idade < 18) {
    idade2 = 'Menor de idade!'
  } else if (idade >= 18) {
    idade2 = 'Maior de idade!'
  }


    resultado2.innerHTML = ` ${nome} você é ${idade2}`

}

//-------------------------------------------------------//

const resultado3 = document.querySelector('#resultado3');
const primeiro = parseFloat(document.getElementById("primeiro").value);
const segundo = parseFloat(document.getElementById("segundo").value);
const terceiro = parseFloat(document.getElementById("terceiro").value);

const calcMaior = () => {

  if (primeiro > segundo & primeiro > terceiro ) {
    resultado3.innerHTML = `O maior número é o ${primeiro}`
  } else if (segundo > primeiro & segundo > terceiro) {
    resultado3.innerHTML = `O maior número é o ${segundo}`
  } else {
    resultado3.innerHTML = `O maior número é o ${terceiro}`
}

}