const fs = require("fs");
const color = require("colors/safe");
const crearArchivo = async (base = 1, list = false) => {
  try {
    let salida = "";

    for (let i = 0; i <= 10; i++) {
      salida += `${base} * ${i} =  ${base * i} \n`;
    }

    //Writing the file
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    if (list) {
      console.log(color.cyan("--------------------"));
      console.log(color.cyan(`Tabla del ${base}`));
      console.log(color.cyan("--------------------"));
      console.log(color.magenta(`${salida}`));
    }

    return `Archivo creado: tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
