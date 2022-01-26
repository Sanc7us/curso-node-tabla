const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    describe: "Escribe la tabla de multiplicar",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe: "Muestra la tabla de multiplicar",
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    if (typeof argv.l !== "boolean") {
      throw "El argumento debe ser 'true' o 'false'";
    }
    return true;
  }).argv;

module.exports = argv;
