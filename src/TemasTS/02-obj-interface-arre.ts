
interface Alumno {
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}

const alumno:Alumno={
    nombre:"mario",
    apellido:"martinez",
    edad:22,
    email:'martinez@gamil.com',

}
console.table(alumno)


let mascotas=['perrito','gato','cotorro']
console.table(mascotas)


mascotas[1]='nuevo gato'
mascotas.push('leon')
console.log(mascotas)

//decalracion con tipos de datos
let tem:(number|string)[]=[]

tem.push(1)
tem.push('once')
console.log(tem)

