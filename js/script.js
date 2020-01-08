var cognomiLista = ['Alighieri', 'Petrarca', 'Manzoni', 'Leopardi', 'Carducci', 'Montale', 'Buonarroti' , 'Ungaretti', 'Pasolini'];

var cognomeUser = prompt('Inserisci il tuo cognome:');
cognomiLista.push(cognomeUser);
cognomiLista.sort();

for (var i = 0; i < cognomiLista.length; i++) {
    document.getElementById('listaHtml').innerHTML += '<li>' + cognomiLista[i] + ' | ' + (i+1) + '</li>';
}
