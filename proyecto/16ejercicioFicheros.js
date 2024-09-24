const fs = require("fs");
const { stdin, stdout } = require("process");
const { createInterface } = require("readline");

const interfaz = createInterface({ input: stdin, output: stdout });

let menu = `
    Elige una opcion (1-5):
    1 - Leer Archivo
    2 - Crear Archivo
    3 - Añadir Archivo
    4 - Borrar Archivo
    5 - Salir
`;

const lanzarMenuRetornarNumero = () => {
  return new Promise((resolve, reject) => {
    interfaz.setPrompt(menu);
    interfaz.prompt();
    interfaz.on("line", (linea) => {
      resolve(linea);
    });
  });
};

const preguntarUsuario = (pregunta) => {
  return new Promise((resolve, reject) => {
    interfaz.setPrompt(pregunta);
    interfaz.prompt();
    interfaz.on("line", (linea) => {
      resolve(linea);
    });
  });
};

const leerArchivo = (ruta) => {
  return new Promise((resolve, reject) => {
    const streamLectura = fs.createReadStream(ruta, "utf8");
    const interfazLectura = createInterface({
      input: streamLectura,
      crlfDelay: Infinity,
    });

    interfazLectura.on("line", (line) => {
      console.log(line);
    });

    interfazLectura.on("close", () => {
      interfazLectura.close();
      resolve();
    });
  });
};

const crearArchivo = (ruta) => {
  return new Promise(async (resolve, reject) => {
    fs.appendFileSync(`${ruta}: `, "");
    resolve();
  });
};

const anadirArchivoTexto = (ruta) => {
  return new Promise(async (resolve, reject) => {
    const streamEscritura = fs.createWriteStream(`${ruta}`);

    interfaz.setPrompt(
      `Escribe el contenido para el archivo de la ruta: ${ruta}, dale a enter para ir añadiendo el contenido al fichero, una vez quieras finalizar dale enter escribe 'exit' y vuelve a darle a enter \n`
    );

    interfaz.prompt();

    interfaz.on("line", (line) => {
      if (line.toLowerCase().trim() == "exit") {
        streamEscritura.close();
        resolve();
      } else {
        streamEscritura.write(line + "\n");
        interfaz.prompt();
      }
    });
  });
};

const pedirArchivo = async (opcion) => {
  let ruta = 0;
  do {
    ruta = await preguntarUsuario(
      "Indicame la ruta del archivo con el archivo:"
    );
  } while (!fs.existsSync(ruta));
  return ruta;
};

const promesaPregunta = () => {
  return new Promise(async (resolve, reject) => {
    interfaz.question(menu, async (respuesta) => {
      while (
        isNaN(respuesta) ||
        parseInt(respuesta) > 5 ||
        parseInt(respuesta) < 1
      ) {
        respuesta = await lanzarMenuRetornarNumero();
      }

      respuesta = parseInt(respuesta);
      if (respuesta == 5) {
        interfaz.close();
        return resolve(false);
      }

  
      let ruta = pedirArchivo(respuesta);

      //   if(ruta[ruta.length-1] === '/'){
      //     ruta.pop()
      //   }

      switch (respuesta) {
        case 1:
        
          await leerArchivo(ruta);
          break;

        case 2:
          await crearArchivo(ruta);
          break;

        case 3:
        
          await anadirArchivoTexto(ruta);
          break;

        case 4:
      
          fs.unlinkSync(`${ruta}`);
          break;
      }
    });
  });
};

let salir = true;
(async () => {
  do {
    salir = await promesaPregunta();
  } while (salir);
})();
