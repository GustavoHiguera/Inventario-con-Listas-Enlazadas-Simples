import Product from './product.js';
import Inventory from './inventory.js';

let inventory= new Inventory();

let btnAdd=document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
    let code= Number(document.getElementById('txtCode').value);
    let name= document.getElementById('txtName').value;
    let amount= Number(document.getElementById('txtAmount').value);
    let cost= Number(document.getElementById('txtCost').value);

    if(!code || !name || !amount || !cost){
        document.getElementById('details').innerHTML=
        `<p>Se requieren todos los datos</p>`;
        return;
    }

    let product= new Product(code, name, amount, cost);
    inventory.add(product);
    document.getElementById('details').innerHTML=
    `<p>El producto ${product.getName()} ha sido registrado correctamente`;
})

let btnDelete=document.getElementById('btnDelete');
btnDelete.addEventListener('click', () => {
    let code= Number(document.getElementById('txtCode').value);

    let del= inventory.delete(code);
    if(del==null){
        document.getElementById('details').innerHTML=
        `<p>El código es invalido</p>`;

    }else{
        document.getElementById('details').innerHTML=
        `<p>Se ha eliminado correctamente el producto ${del.getName()}</p>`;
    }
})

let btnSearch=document.getElementById('btnSearch');
btnSearch.addEventListener('click', () => {
    let code= Number(document.getElementById('txtCode').value);

    let searched=inventory.search(code);
    if(searched==null){
        document.getElementById('details').innerHTML=
        `<p>Producto no encontrado</p>`;
    }else{
        document.getElementById('details').innerHTML=
        `<p>Producto encontrado: </p> <p>${searched.getInfo()}`;
    }
})

let btnList=document.getElementById('btnList');
btnList.addEventListener('click', () => {
    document.getElementById('details').innerHTML=
    `${inventory.list()}`;
})

let btnInverseList=document.getElementById('btnInverseList');
btnInverseList.addEventListener('click', () => {
    document.getElementById('details').innerHTML=
    `${inventory.InverseList()}`;
})

let btnInsert=document.getElementById('btnInsert');
btnInsert.addEventListener('click', () => {
    let pos= Number(document.getElementById('txtInsert').value);

    let code= Number(document.getElementById('txtCode').value);
    let name= document.getElementById('txtName').value;
    let amount= Number(document.getElementById('txtAmount').value);
    let cost= Number(document.getElementById('txtCost').value);

    if(!code || !name || !amount || !cost){
        document.getElementById('details').innerHTML=
        `<p>Se requieren todos los datos</p>`;
        return;
    }

    let product= new Product(code, name, amount, cost);

    let ins= inventory.insert(product, pos);
    
    if(!ins){
        document.getElementById('details').innerHTML=
        `<p> La posición es inválida</p>`;
    }else{
        document.getElementById('details').innerHTML=
        `<p>El producto ${ins.getName()} fue insertado en la posición ${pos}`;
    }
})