//Examinando el DOM

// console.dir(document);

// document.title = 'Prueba';

//Seleccionar Elementos segun su ID getElementById

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// headerTitle.textContent = 'Hola';
// headerTitle.innerText = 'Hola a Todos';
// headerTitle.innerHTML = '<H2>Hola a Todos</h2>';



// console.log(header);


//Seleccionar Elementos segun su Clase getElementByClassName

// var items = document.getElementsByClassName ('list-group-item');

// console.log(items[0]);

//Seleccionar Elementos segun su Etiqueta getElementByTagName

// var items = document.getElementsByTagName('li');

// items[2].textContent = 'Prueba01';


//Uso de querySelector y querySelectorAll

// var header = document.querySelector('#main-header');

// header.style.border = 'solid 4px #000';

// var input = document.querySelector('input');
// input.value = 'Hola Mundo';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Enviar';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'black';

// var items = document.querySelectorAll('.list-group-item');
// items[2].style.color = 'blue';


// var titulos = document.querySelectorAll('.title');
// console.log(titulos);
// titulos[0].textContent = 'Prueba';


// var par = document.querySelectorAll('li:nth-child(even)');
// var impar = document.querySelectorAll('li:nth-child(odd)');
// for (var i=0; i<impar.length; i++){
//     impar[i].style.backgroundColor = 'red';
//     par[i].style.backgroundColor = 'green';
// }


// parentNode

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// var main = itemList.parentNode;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentNode.parentNode);


// parentElement

// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);

// var main = itemList.parentElement;
// main.style.backgroundColor = '#f2f4f6';
// console.log(main.parentElement.parentElement);

//Hacen lo mismo



//childNodes
// var itemList1 = document.querySelector('#items');

// console.log(itemList1.childNodes);

//children

// console.log(itemList1.children);

//firstChild firstElementChild

// console.log(itemList1.firstChild);
// console.log(itemList1.firstElementChild);
// itemList1.firstElementChild.textContent = 'Prueba de hijo';

//lastChild lastElementChild

// console.log(itemList1.lastChild);
// console.log(itemList1.lastElementChild);
// itemList1.lastElementChild.textContent = 'Prueba de hijo final';

//Elementos y Nodos Hermanos

// var itemBro = document.querySelector('#items');

//previousSibling

// console.log(itemBro.previousSibling);

//previousElementSibling

// console.log(itemBro.previousElementSibling);

//nextSibling

// console.log(itemBro.nextSibling);

//nextElementSibling

// console.log(itemBro.nextElementSibling);

//Crear Elementos en el Sitio

//createElement
//tagName

// var nuevoDiv = document.createElement('div');

// nuevoDiv.className = 'hola';
// nuevoDiv.id = 'div-hola';
// nuevoDiv.setAttribute('title', 'Hola Mundo');


//createTextNode

// var nuevoNodoText = document.createTextNode('Hola Mundo');
// nuevoDiv.appendChild(nuevoNodoText);


// console.log(nuevoDiv);

// var contenedor = document.querySelector('.container');
// console.log(contenedor);

// var h1 = document.querySelector('h1');
// console.log(h1);


// contenedor.insertBefore(nuevoDiv,h1);

//**************************************************************** */

//Agregar Eventos


// document.getElementById('boton').addEventListener('click', function(){
//     console.log('Click2');
// });


// document.getElementById('boton').addEventListener('click', hacerClick);    

// function hacerClick(){
//     console.log('Usted hizo Click..');
//     document.getElementById('header-title').textContent = 'Buscar Items';
// }


//Actualizar el Diseño del Sitio

//Agregar items a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

form.addEventListener('submit', agregarItem);
lista.addEventListener('click', eliminarItem);
filtro.addEventListener('keyup', filtrarItems);

function agregarItem(e){
    e.preventDefault();
    var nuevoItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(nuevoItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);

    lista.appendChild(li);
    
}

//Eliminar Items de la Lista

function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar el elemento?')){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
      
    }
}

//Buscar elementos de la Lista

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






