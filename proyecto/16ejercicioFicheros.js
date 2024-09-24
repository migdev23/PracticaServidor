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
    fs.appendFileSync(`${ruta}`, "");
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
  let stats = "";
  let esArchivo = false;
  let esDirectorio = false;
  let nombreArchivo = '';
  let msg =
    opcion == 2
      ? `Indicame la ruta de la carpeta donde crear el archivo: `
      : `Indicame la ruta del archivo con el archivo: `;

  while (!esArchivo && opcion != 2) {
    ruta = await preguntarUsuario(msg);
    try {
      stats = fs.statSync(ruta);
      esArchivo = stats.isFile();
    } catch (error) {
      esArchivo = false;
    }
  }

  while (!esDirectorio && opcion == 2) {
    ruta = await preguntarUsuario(msg);
    try {
      stats = fs.statSync(ruta);
      esDirectorio = stats.isDirectory();
    } catch (error) {
      esDirectorio = false;
    }

    nombreArchivo = await preguntarUsuario('Indica el nombre con la extension para crear el archivo');
    ruta = `${ruta}/${nombreArchivo}`
  }

  return ruta;
};

const promesaPregunta = () => {
  return new Promise(async (resolve, reject) => {
    interfaz.question(menu, async (respuesta) => {
          
      while (isNaN(respuesta) || parseInt(respuesta) > 5 || parseInt(respuesta) < 1) 
        respuesta = await preguntarUsuario(menu);
  
      respuesta = parseInt(respuesta);

      if (respuesta == 5) {
        interfaz.close();
        return resolve(false);
      }

      let ruta = await pedirArchivo(respuesta);

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

      return resolve(true);
    });
  });
};

let salir = true;

(async () => {
  do {
    salir = await promesaPregunta();
  } while (salir);
})();
