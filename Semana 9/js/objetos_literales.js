const persona1={
    nombre: "Diego",
    apellido: "Morales",
    edad: 19,
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

const persona2={
    nombre:"Silvana",
    apellido:"Umanzor",
    edad:21,
    saludar(){
        console.log(`Hola mi nombre es ${nombre}`)
    }
}

persona1.saludar();
persona2.saludar();
console.log(persona1);
console.log(persona2);