function Persona(_nombre, _apellido, _edad){
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.edad = _edad;
    this.saludar = function(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

const persona1= new Persona("Diego", "Morales", 19);
const persona2= new Persona("Silvana", "Umanzor", 21);
persona1.saludar();
persona2.saludar();
console.log(persona1);
console.log(persona2);