

var buttonGenera = document.getElementById("genera");
buttonGenera.addEventListener('click',
function() {
  // variabili form
  var nomeCognome = document.getElementById('nome').value;
  // console.log(nomeCognome);
  var chilometri = document.getElementById('km').value;
  // console.log(chilometri);
  var fasciaEta = document.getElementById('eta').value;
  // console.log(fasciaEta);

  var prezzoBiglietto = 0.21 * chilometri;
  var sconto = prezzoBiglietto * 20 / 100;
  var prezzoScontato = prezzoBiglietto - sconto;
  var scontoOver = prezzoBiglietto * 40 / 100;
  var prezzoScontatoOver = prezzoBiglietto - scontoOver;
  var tipoTariffa = 'Tariffa standard';
  var min = 90000;
  var max = 100000;
  var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;

  // calcolo
  if (eta == 'minorenne'){
    prezzoBiglietto = prezzoScontato;
    tipoTariffa = 'Sconto minorenne';
  } else if (eta == 'over'){
    prezzoBiglietto = prezzoScontatoOver;
    tipoTariffa = 'Sconto silver';
  }

  // inserimento informazioni del biglietto del passeggero
  document.getElementById('nome-passeggero').innerHTML = nomeCognome;
  document.getElementById('offerta').innerHTML = tipoTariffa;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;
  document.getElementById('codice').innerHTML = numeroRandom;
  document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2) + ' ' + '€';

  document.getElementById('biglietto').className = 'visibile';
});

var buttonAnnulla = document.getElementById("annulla");
buttonAnnulla.addEventListener('click',
function() {
  document.getElementById('nome').value = '';
  document.getElementById('km').value = '';
  document.getElementById('eta').value = '';

  // inserimento informazioni del biglietto del passeggero
  document.getElementById('nome-passeggero').innerHTML = '';
  document.getElementById('offerta').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice').innerHTML = '';
  document.getElementById('costo').innerHTML = '';

  document.getElementById('biglietto').className = 'non-visibile';
});
