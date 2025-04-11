console.log("Hola Mundo!");

const colores = ["azul","rojo","verde"];
console.log(colores[0]);
colores[2] = 22;
colores.forEach((color)=>console.log(color));

// let es como var
const alumnos = {name: "Luis"};
alumnos.edad = 20;
console.log(alumnos.edad);

alumno = [];

const saludo = ()=> {
    console.log("Hola++")
};

saludo();

function msg() {
    console.log("Halalalala");
};

function msg(name) {
    console.log("Hola " + name);
};

msg();
msg("Diego");