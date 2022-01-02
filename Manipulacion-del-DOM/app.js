//Examinando el DOM
//console.dir(document);
//console.log(document.title);
//document.title = 'Prueba';
/*console.log(document.title);
console.log(document.head);
console.log(document.body);
//console.log(document.all);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.links);*/

//getElementById()
//console.log(document.getElementById('header-title'));
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(header);
headerTitle.textContent = 'Hola';
headerTitle.innerText = 'Adios';
headerTitle.innerHTML = '<h3>Prueba</h3>';*/

//getElementsByClassName
/*var items = document.getElementsByClassName('list-group-item');
console.log(items[3]);
items[0].textContent = 'Prueba';*/

//getElementsByTagName
//var items = document.getElementsByTagName('li');
//items[2].textContent = 'Prueba 02';

//querySelector
/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hola mundo';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Enviar";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';*/

//querySelectorAll
/*var items = document.querySelectorAll('.list-group-item');
items[2].style.color = 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[0].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i < impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
}*/

//ParentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// var main = itemList.parentNode;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentNode.parentNode);

//ParentElement
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// var main = itemList.parentElement;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);

//firstChild/firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Prueba';

//lastChild/lasttElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Prueba';

//var itemList = document.querySelector('#items');

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);


//createElement
//tagName

// var nuevoDiv = document.createElement('div');
// nuevoDiv.className = 'hola';
// nuevoDiv.id = 'div-hola';
// nuevoDiv.setAttribute('title','Hola mundo');

// //createTextNode
// var nuevoNodoText = document.createTextNode('Hola Mundo');
// nuevoDiv.appendChild(nuevoNodoText);

// console.log(nuevoDiv);

// var contenedor = document.querySelector('.container');
// console.log(contenedor);

// var h1 = document.querySelector('h1');
// console.log(h1);

// contenedor.insertBefore(nuevoDiv,h1);


//Agregar Eventos

// document.getElementById('boton').addEventListener('click', function(){
//     console.log('Click 2');
// });

// document.getElementById('boton').addEventListener('click', hacerClick);

// function hacerClick(){
//     //console.log('Usted hizo click..');
//     document.getElementById('header-title').textContent = 'Texto cambiado';
// }

//Agregar un elemento a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//Evento submit del formulario
form.addEventListener('submit',agregarItem);
//Evento click de la lista
lista.addEventListener('click',eliminarItem);
//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup',filtrarItems);

//Función para agregar un Item a la lista
function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);   

    lista.appendChild(li);
}

//Función para eliminar un Item de la lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }        
    }
}

//Función para filtrar elementos de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}
