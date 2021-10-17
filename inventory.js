export default class Inventory{
    constructor(){
        this.start=null;
        //Es null porque comienza vacío
    }

    //Añadir producto al inventario
    add(product){
        if(this.start==null){
            this.start=product;
        }else{
            let temp= this.start;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=product
        }
    }

    //Borrar producto del inventario mediante el código
    delete(code){
        let deleted= null;

        if(!this.start){
            return null;
            //Si no hay ninguno, no puede borrar nada
        }else if(this.start.getCode()==code){
            deleted=this.start;
            this.start=this.start.next;
            deleted.next=null;
            return deleted;
            //Si el que inicia es el que se va a borrar, entonces se pone el siguiente como el que inicia
            //Además se elimina su siguiente, así borrando cualquier vínculo
        } else{
            //Variables temporales para recorrer la lista
            let an=this.start;
            let ac=this.start.next;

            while(ac!=null){
                if(ac.getCode()==code){
                    an.next=an.next.next;
                    deleted=ac;
                    deleted.next=null;
                    return deleted;
                }else{
                    an=ac;
                    ac=ac.next;
                }
            }
            return null;
        }
    }

    //Busca el producto mediante el código
    search(code){
        if(!this.start){
            return null;
        }else{
            let temp=this.start;
            while(temp!=null){
                if(temp.getCode()==code){
                    return temp;
                }
                temp=temp.next;
            }
            return null;
        }
    }

    //Lista los productos que se encuentran en el inventario
    list(){
        let text='';
        let temp=this.start;
        //Si no hay productos no hay nada que listar
        if(temp == null){
            return text='No hay algún producto registrado';
        }
        while(temp!==null){
            text += `<br>${temp.getInfo()}</br>` ;
            temp=temp.next;
        }
        return text;
    }


    //Método Recursivo para listar de forma inversa los productos que se encuentran en el inventario
    InverseList(){
        if(!this.start){
            return '<p>No hay algún producto registrado</p>';
        }else{
            return this._listarRec(this.start);
            
        }
    }

    //Método auxiliar para lograr la recursividad
    _listarRec(node){
        if(node.next==null){
            return node.getInfo();
        }else{
            return `<br>${this._listarRec(node.next)}</br> <br>${node.getInfo()}`;
        }
    }
    
    //Método auxiliar para obtener el largo de la lista
    _getLength(){
        let count=0;
        if(!this.start){
            return count;
        }else{
            let temp=this.start;
            while(temp!=null){
                count++
                temp=temp.next;
            }
            
            return count;
        }
    }

    //Se inserta el producto en la posición deseada si es que esta es posible y existe
    insert(product, pos){
        let total=this._getLength();
        if(pos<0 || pos>total){
            return null;
        }else if(pos == 0){
            product.next=this.start;
            this.start=product;
            return product;
        }else{
            let count=0;
            let previous=null;
            let current=this.start;

            while(count<pos){
                count++;
                previous=current;
                current=current.next;
            }

            product.next=current;
            previous.next=product;

            return product;
        }
    }
}