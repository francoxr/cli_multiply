const fs = require('fs');
const colors = require('colors');

// Un async siempre retorna un promise (return new promise {})
const crearArchivo = async (base, listar = false, hasta) => {

    try {
 
        let consola = '';
        let salida = '';
        
        for (let i = 1; i <= hasta; i++) {
            consola += ` ${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += ` ${base} x ${i} = ${base * i}\n`;

        }
        
        if (listar) {
            console.log('================='.green)
            console.log('   Tabla del:', colors.blue(base))
            console.log('================='.green)
            console.log(consola);
        }   
    
        fs.writeFileSync(`./output/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}