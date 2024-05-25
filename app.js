function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}


window.addEventListener('load', async () => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let dependencia = document.getElementById('dependencia').value;
        let numacta = document.getElementById('acta').value;
        let diainiciado = document.getElementById('diainiciado').value;
        let mesiniciado = document.getElementById('mesiniciado').value;
        let articulo = document.getElementById('art').value;
        let hora = document.getElementById('hora').value;
        let lugarhecho = document.getElementById('lugar').value;
        let denunciante = document.getElementById('denunciante').value;
        let damnificado = document.getElementById('damnificado').value;
        let damnificado2 = document.getElementById('damnificado2').value;
        let acusado = document.getElementById('acusado').value;
        let instructor = document.getElementById('instructor').value;
        

        generatePDF(dependencia, numacta, diainiciado, mesiniciado, articulo, hora, lugarhecho, denunciante, damnificado, damnificado2, acusado, instructor);
    })

});

async function generatePDF(dependencia, numacta, diainiciado, mesiniciado, articulo, hora, lugarhecho, denunciante, damnificado, damnificado2, acusado, instructor) {
    
    const image1 = await loadImage("./escalerar.jpg");
    const image2 = await loadImage("./escaleraf.jpg");

    const pdf = new jsPDF('p', 'pt', 'A4'); // tamaño de hoja (cambiar letter x A4)

    //pdf.addImage(image, 'JPEG', 0, 0, 590, 830);//HOJA 1
// Dibujar el rectángulo
    pdf.setLineWidth(6);
    pdf.rect(47, 35, 513, 740);
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(25); // Tamaño de letra
 //numero acta arriba   
    if (numacta==="") {
        pdf.text("ACTA CONTRAVENCIONAL", 96, 78);
        pdf.text("/24", 480, 78);
    }if (numacta >= 1000) {
        pdf.setFontSize(24,95);
        pdf.text(("ACTA CONTRAVENCIONAL ")+numacta+("/24"), 99, 78);
    }else {
        pdf.setFontSize(25);
        pdf.text(("ACTA CONTRAVENCIONAL ")+numacta+("/24"), 96, 78);
    }
    pdf.setLineWidth(2);
    pdf.line(95, 81, 510, 81); // (x1, y1, x2, y2)
//dependencia acargo
    if (dependencia === "") {
        pdf.text("CRIA Nº 4 – VILLA MITRE (DUR-1)", 103, 117);
    }else {
        pdf.text(dependencia, 80, 117);
    }
//Recuadro
pdf.setLineWidth(5);
pdf.rect(59, 137, 470, 63);
pdf.setLineWidth(3);
pdf.line(59, 164, 527, 164); // (x1, y1, x2, y2)
pdf.line(177, 137, 177, 200); // (x1, y1, x2, y2)
pdf.line(294, 137, 294, 200); // (x1, y1, x2, y2)
pdf.line(411, 137, 411, 200); // (x1, y1, x2, y2)
pdf.setFontSize(20); // Tamaño de letra
pdf.text(("INICIADO"),73,158);
pdf.text(("DETENIDO"),184,158);
pdf.text(("FOJAS"),320,158);
pdf.text(("ELEVADO"),422,158);
pdf.setFontSize(25); // Tamaño de letra
pdf.text(("NO"),217 ,189);
//dia iniciado titulo
if (diainiciado === "1" || diainiciado === "01") {
    pdf.text(("01/"), 67, 190);
}if (diainiciado === "2" || diainiciado === "02") {
    pdf.text(("02/"), 67, 190);
} if (diainiciado === "3" || diainiciado === "03") {
    pdf.text(("03/"), 67, 190);
} if (diainiciado === "4" || diainiciado === "04") {
    pdf.text(("04/"), 67, 190);
} if (diainiciado === "5" || diainiciado === "05") {
    pdf.text(("05/"), 67, 190);
} if (diainiciado === "6" || diainiciado === "06") {
    pdf.text(("06/"), 67, 190);
} if (diainiciado === "7" || diainiciado === "07") {
    pdf.text(("07/"), 67, 190);
} if (diainiciado === "8" || diainiciado === "08") {
    pdf.text(("08/"), 67, 190);
} if (diainiciado === "9" || diainiciado === "09") {
    pdf.text(("09/"), 67, 190);
    } if (diainiciado >= 10 && diainiciado <= 31) {
        pdf.text(diainiciado+("/"), 67, 190);
    } if (diainiciado==="") {
        pdf.text("/", 97, 190);
    }
// mes iniciado titulo
    if (mesiniciado === "1" || mesiniciado === "01") {
        pdf.text(("01/24"), 103, 190);
    }if (mesiniciado === "2" || mesiniciado === "02") {
        pdf.text(("02/24"), 103, 190);
    } if (mesiniciado === "3" || mesiniciado === "03") {
        pdf.text(("03/24"), 103, 190);
    } if (mesiniciado === "4" || mesiniciado === "04") {
        pdf.text(("04/24"), 103, 190);
    } if (mesiniciado === "5" || mesiniciado === "05") {
        pdf.text(("05/24"), 103, 190);
    } if (mesiniciado === "6" || mesiniciado === "06") {
        pdf.text(("06/24"), 103, 190);
    } if (mesiniciado === "7" || mesiniciado === "07") {
        pdf.text(("07/24"), 103, 190);
    } if (mesiniciado === "8" || mesiniciado === "08") {
        pdf.text(("08/24"), 103, 190);
    } if (mesiniciado === "9" || mesiniciado === "09") {
        pdf.text(("09/24"), 103, 190);
    } if (mesiniciado >= 10 && mesiniciado <= 12) {
        pdf.text(mesiniciado+("/24"), 103, 190);
    } if (mesiniciado==="") {
        pdf.text("/", 133, 190);
    }
//dia elevacion
    const date = new Date();
    var dia = date.getUTCDate().toString();
if (dia >= 1 && dia <= 9) {  
    pdf.text(("0") + (dia) + ("/"), 420, 190);
}if (dia >= 10 && dia <= 31) {
    pdf.text((dia) + ("/"), 420, 190);
}
//mes elevado
var mes = (date.getUTCMonth() + 1).toString();
if (mes >= 1 && mes <= 9) {  
    pdf.text("0" + mes + "/24", 456, 190);
}if (mes >= 10 && mes <= 12) {
    pdf.text(mes + "/24", 456, 190);
}
//dependencia instructora
    pdf.setFontSize(15);
    pdf.text(("DEPENDENCIA INSTRUCTORA:"), 56, 243);
    pdf.setLineWidth(2);
    pdf.line(56, 246, 284, 246); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    pdf.text(("División Sumarios Contravencionales -"), 292, 243);
    pdf.text(("Sector 7 (DUR-1)"), 292, 263);
//articulo
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("HECHO:", 56, 293);
    pdf.line(56, 296, 113, 296); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    pdf.text(("S/Infracción Art. ")+articulo+(" de la Ley Provincial N° 7.135/01"), 120, 293);
//dia iniciado
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("FECHA:", 56, 343.1);
    pdf.line(56, 346, 111, 346); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
if (diainiciado === "1" || diainiciado === "01") {
    pdf.text(("01 de"), 118, 343.1);
}if (diainiciado === "2" || diainiciado === "02") {
    pdf.text(("02 de"), 118, 343.1);
} if (diainiciado === "3" || diainiciado === "03") {
    pdf.text(("03 de"), 118, 343.1);
} if (diainiciado === "4" || diainiciado === "04") {
    pdf.text(("04 de"), 118, 343.1);
} if (diainiciado === "5" || diainiciado === "05") {
    pdf.text(("05 de"), 118, 343.1);
} if (diainiciado === "6" || diainiciado === "06") {
    pdf.text(("06 de"), 118, 343.1);
} if (diainiciado === "7" || diainiciado === "07") {
    pdf.text(("07 de"), 118, 343.1);
} if (diainiciado === "8" || diainiciado === "08") {
    pdf.text(("08 de"), 118, 343.1);
} if (diainiciado === "9" || diainiciado === "09") {
    pdf.text(("09 de"), 118, 343.1);
} if (diainiciado >= 10 && diainiciado <= 31) {
    pdf.text(diainiciado+(" de"), 118, 343.1);
} else {
    pdf.text("", 118, 343.1);
}
//mes iniciado
    if (mesiniciado==="01" || mesiniciado==="1") {  
        pdf.text("enero de 2.024", 157, 343.1);
    } if (mesiniciado==="02" || mesiniciado==="2") {  
        pdf.text("febrero de 2.024", 157, 343.1);
    } if (mesiniciado==="03" || mesiniciado==="3") {  
        pdf.text("marzo de 2.024", 157, 343.1);
    } if (mesiniciado==="04" || mesiniciado==="4") {  
        pdf.text("abril de 2.024", 157, 343.1);
    } if (mesiniciado==="05" || mesiniciado==="5") {  
        pdf.text("mayo de 2.024", 157, 343.1);
    } if (mesiniciado==="06" || mesiniciado==="6") {  
        pdf.text("junio de 2.024", 157, 343.1);
    } if (mesiniciado==="07" || mesiniciado==="7") {  
        pdf.text("julio de 2.024", 157, 343.1);
    } if (mesiniciado==="08" || mesiniciado==="8") {  
        pdf.text("agosto de 2.024", 157, 343.1);
    } if (mesiniciado==="09" || mesiniciado==="9") {  
        pdf.text("septiembre de 2.024", 157, 343.1);
    } if (mesiniciado==="10") {  
        pdf.text("octubre de 2.024", 157, 343.1);
    } if (mesiniciado==="11") { 
        pdf.text("noviembre de 2.024", 157, 343.1);
    } if (mesiniciado==="12") { 
        pdf.text("diciembre de 2.024", 157, 343.1);
    } else {
        pdf.text("", 157, 343.1);
    }
//hora
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("HORAS:", 363, 343.1);
    pdf.line(363, 346, 420, 346); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    pdf.text(hora, 428, 343.1);
//lugar
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("LUGAR DEL HECHO:", 56, 393);
    pdf.line(56, 396, 205, 396); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    function justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight) {
        var palabras = texto.split(' ');
        var linea = '';
        
        palabras.forEach(function(palabra, indice) {
            var medida = pdf.getStringUnitWidth(palabra) * pdf.internal.getFontSize();
            
            if (pdf.getStringUnitWidth(linea + palabra) > anchoMaximo || indice === palabras.length - 1) {
                var espaciosRestantes = anchoMaximo - pdf.getStringUnitWidth(linea.trim());
                var espaciosTotales = indice < palabras.length - 1 ? Math.floor(espaciosRestantes / (linea.trim().split(" ").length - 1)) : 0;
                var espaciosEntrePalabras = indice < palabras.length - 1 ? espaciosRestantes / Math.max(2, linea.trim().split(" ").length - 1) : 0;
                
                var lineaJustificada = linea.trim().split(" ").map(function(palabra, indice, arreglo) {
                    return palabra + (indice < arreglo.length - 1 ? ' '.repeat(espaciosEntrePalabras) : '');
                }).join(' ');
                
                pdf.text(lineaJustificada, x, y, { align: 'justify' });
                y += lineHeight;
                linea = '';
            }
            
            linea += palabra + ' ';
        });
    }
    
    // Ejemplo de uso:
    var texto = ((".      .    .        .        .       .    ")+lugarhecho.toUpperCase()+(" (VÍA PÚBLICA)")+(" a"));
    var anchoMaximo = 38; // ajusta este valor según tu diseño
    var lineHeight = 20; // ajusta este valor según tu diseño
    var x = 56; // ajusta esta coordenada según tu diseño
    var y = 393; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);
//denunciante
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("DENUNCIANTE:", 56, 443);
    pdf.line(56, 446, 168, 446); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    pdf.text(denunciante.toUpperCase(), 176, 443);
//damnificado
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("DAMNIFICADO:", 56, 493);
    pdf.line(56, 496, 166, 496); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    pdf.text(damnificado.toUpperCase(), 173, 493);
    pdf.text(damnificado2.toUpperCase(), 173, 493);
//acusado
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text(("ACUSADO/A:"), 56, 543);
    pdf.line(56, 546, 152, 546); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    function justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight) {
        var palabras = texto.split(' ');
        var linea = '';
        
        palabras.forEach(function(palabra, indice) {
            var medida = pdf.getStringUnitWidth(palabra) * pdf.internal.getFontSize();
            
            if (pdf.getStringUnitWidth(linea + palabra) > anchoMaximo || indice === palabras.length - 1) {
                var espaciosRestantes = anchoMaximo - pdf.getStringUnitWidth(linea.trim());
                var espaciosTotales = indice < palabras.length - 1 ? Math.floor(espaciosRestantes / (linea.trim().split(" ").length - 1)) : 0;
                var espaciosEntrePalabras = indice < palabras.length - 1 ? espaciosRestantes / Math.max(2, linea.trim().split(" ").length - 1) : 0;
                
                var lineaJustificada = linea.trim().split(" ").map(function(palabra, indice, arreglo) {
                    return palabra + (indice < arreglo.length - 1 ? ' '.repeat(espaciosEntrePalabras) : '');
                }).join(' ');
                
                pdf.text(lineaJustificada, x, y, { align: 'justify' });
                y += lineHeight;
                linea = '';
            }
            
            linea += palabra + ' ';
        });
    }
    
    // Ejemplo de uso:
    var texto = ((".      .        .       .  ")+acusado.toUpperCase()+(" a"));
    var anchoMaximo = 38; // ajusta este valor según tu diseño
    var lineHeight = 20; // ajusta este valor según tu diseño
    var x = 56; // ajusta esta coordenada según tu diseño
    var y = 543; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);
//interviene fijo
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("INTERVIENE:", 56, 593);
    pdf.line(56, 596, 149, 596); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
    pdf.text(("UNIDAD FISCAL CONTRAVENCIONAL"), 157, 593);
//instructor 
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("INSTRUCTOR DE SUMARIO:", 56, 643);
    pdf.line(56, 646, 258, 646); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(13);
if (instructor==="") {
    pdf.text(("CABO FLORENCIA VILTE"),268, 643)
} else {
    pdf.text(instructor, 268, 643);
}
//año
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(32);
    pdf.text("AÑO 2.024", 230, 715);
//HOJA 2 CONSTANCIA DE INSTRUCCION-------------------------------------------------------------------------------

    pdf.addPage();
    //pdf.addImage(image2, 'JPEG', 0, 0, 600, 830); // HOJA 3 CONST INSTRUCCION
//TITULO
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("CONSTANCIA DE LA INSTRUCCIÓN"), 217, 82);
//1ra oracion..............................
pdf.setFont("Arial", "");
pdf.setFont("Arial");
pdf.setFontSize(12);
var año = date.getUTCFullYear().toString();
pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
var dia = date.getUTCDate().toString();
if (dia >= 1 && dia <= 9) {  
    pdf.text("0" + dia, 329, 118);
}if (dia >= 10 && dia <= 31) {
    pdf.text(dia, 329, 118);
}
pdf.text(("días  del  mes de"), 345, 118);
if ((date.getUTCMonth() + 1).toString() === "1") {  
    pdf.text(("enero"), 494, 118);
}if ((date.getUTCMonth() + 1).toString() === "2") {  
    pdf.text(("febrero"), 490, 118);
}if ((date.getUTCMonth() + 1).toString() === "3") {  
    pdf.text(("marzo"), 494, 118);
}if ((date.getUTCMonth() + 1).toString() === "4") {  
    pdf.text(("abril"), 494, 118);
}if ((date.getUTCMonth() + 1).toString() === "5") {  
    pdf.text(("mayo"), 445, 118);
}if ((date.getUTCMonth() + 1).toString() === "6") {  
    pdf.text(("junio"), 494, 118);
}if ((date.getUTCMonth() + 1).toString() === "7") {  
    pdf.text(("julio"), 494, 118);
}if ((date.getUTCMonth() + 1).toString() === "8") {  
    pdf.text(("agosto"), 493, 118);
}if ((date.getUTCMonth() + 1).toString() === "9") {  
    pdf.text(("septiembre"), 479, 118);
}if ((date.getUTCMonth() + 1).toString() === "10") {  
    pdf.text(("octubre"), 490, 118);
}if ((date.getUTCMonth() + 1).toString() === "11") {  
    pdf.text(("noviembre"), 481, 118);
}if ((date.getUTCMonth() + 1).toString() === "12") {  
    pdf.text(("diciembre"), 481, 118);
}
pdf.text(("del  año  2024,"), 481, 118);
//2da oracion..............................
pdf.text(("se   deja    debidamente    documentado   al"), 86, 133);
pdf.text(("diligenciamiento    de    la    presente    Acta"), 328, 133);
//3ra oracion..............................
pdf.text(("Contravencional por Infracción al Art.  "), 86, 148);
if (articulo >= 100) {
pdf.text(articulo, 286, 148);
} else {
    pdf.text(articulo, 290, 148);
}
pdf.text((" de  la  Ley  Provincial  N° 7135/01  seguida  en"), 307, 148);
//4ta oracion..............................
function justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight) {
    var palabras = texto.split(' ');
    var linea = '';
    
    palabras.forEach(function(palabra, indice) {
        var medida = pdf.getStringUnitWidth(palabra) * pdf.internal.getFontSize();
        
        if (pdf.getStringUnitWidth(linea + palabra) > anchoMaximo || indice === palabras.length - 1) {
            var espaciosRestantes = anchoMaximo - pdf.getStringUnitWidth(linea.trim());
            var espaciosTotales = indice < palabras.length - 1 ? Math.floor(espaciosRestantes / (linea.trim().split(" ").length - 1)) : 0;
            var espaciosEntrePalabras = indice < palabras.length - 1 ? espaciosRestantes / Math.max(2, linea.trim().split(" ").length - 1) : 0;
            
            var lineaJustificada = linea.trim().split(" ").map(function(palabra, indice, arreglo) {
                return palabra + (indice < arreglo.length - 1 ? ' '.repeat(espaciosEntrePalabras) : '');
            }).join(' ');
            
            pdf.text(lineaJustificada, x, y, { align: 'justify' });
            y += lineHeight;
            linea = '';
        }
        
        linea += palabra + ' ';
    });
}

// Ejemplo de uso:
var texto = (("contra de ")+(acusado.toUpperCase())+(", los cuales constan de Formularios A, B y tomas fotográficas. Es todo cuanto se hace constar. a"));
var anchoMaximo = 39; // ajusta este valor según tu diseño
var lineHeight = 15; // ajusta este valor según tu diseño
var x = 86; // ajusta esta coordenada según tu diseño
var y = 163; // ajusta esta coordenada según tu diseño
justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

//HOJA 3 ELEVACION------------------------------------------------------------------------------------------

    pdf.addPage();
    if (instructor === "CABO ANGELA RODRIGUEZ") {
        pdf.addImage(image1, 'JPEG', 82, 250, 50, 70); 
    } else {
        pdf.addImage(image2, 'JPEG', 82, 250, 53, 80); 

    }
//SECTOR
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("SECTOR N° 7 (DUR-1)"), 84, 85);
    pdf.setLineWidth(1,4);
    pdf.line (84, 88, 205, 88);
//Espacio en blanco
    pdf.setTextColor(255);
    pdf.text(("I       I          I         I           I         I        I      I"), 212, 85);
    pdf.text(("I"), 400, 85);
//fecha
    pdf.setTextColor(0);
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(12);
//salta
// dia mes año
    if ((date.getUTCMonth() + 1).toString()==="1") {  //listo
        pdf.text(("SALTA,"), 402, 85);
        pdf.text("enero de 2.024", 483, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 446, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 446, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="2") {  //listo
        pdf.text(("SALTA,"), 393, 85);
        pdf.text("febrero de 2.024", 474, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 437, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 437, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="3") { //listo 
        pdf.text(("SALTA,"), 401, 85);
        pdf.text("marzo de 2.024", 482, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 445, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 445, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="4") {  //listo
        pdf.text(("SALTA,"), 407, 85);
        pdf.text("abril de 2.024", 488, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 451, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 451, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="5") {  //listo
        pdf.text(("SALTA,"), 404, 85);
        pdf.text("mayo de 2.024", 485, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 448, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 448, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="6") {  //listo
        pdf.text(("SALTA,"), 406, 85);
        pdf.text("junio de 2.024", 487, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 450, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 450, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="7") {  //listo
        pdf.text(("SALTA,"), 407, 85);
        pdf.text("julio de 2.024", 488, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 451, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 451, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="8") {   //listo
        pdf.text(("SALTA,"), 398, 85);
        pdf.text("agosto de 2.024", 479, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 442, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 442, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="9") {  //listo
        pdf.text(("SALTA,"), 376, 85);
        pdf.text("septiembre de 2.024", 457, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 420, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 420, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="10") {  //listo
        pdf.text(("SALTA,"), 392, 85);
        pdf.text("octubre de 2.024", 473, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 436, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 436, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="11") { //listo
        pdf.text(("SALTA,"), 380, 85);
        pdf.text("noviembre de 2.024", 461, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 424, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 424, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="12") { //listo
        pdf.text(("SALTA,"), 380, 85);
        pdf.text("diciembre de 2.024", 461, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 424, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 424, 85);
        }
    } else {
        pdf.text("", 486, 81);
    }
//1ra oracion .......................................................
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("VISTO"), 141, 130);//124
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(12);
    pdf.text(("la presente"), 181, 130);
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("Acta Contravencional"), 243, 130);
//dependencia a cargo
if (dependencia==="   CRIA Nº 4 – VILLA MITRE (DUR-1)" || dependencia===""){
        pdf.text(("CC"), 372, 130);
    } else {
        pdf.text(("SCA"), 368, 130);
    }
//num acta
    pdf.text(("(S-7) N°"), 395, 130);
    if (numacta >= 1000) {
        pdf.text(numacta, 438, 130);
    } else {
        pdf.text(numacta, 440, 130);
    }
    pdf.text(("/24" ), 459, 130);
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");
    pdf.setFontSize(12);
    pdf.text(("correspondiente" ), 480, 130);
//2da oracion........................................................
//denunciante
    pdf.setFont("Arial", "");
    pdf.setFont("Arial");   
    pdf.setFontSize(12);
    pdf.text(("al registro de esta División por S/Inf. Art."), 84, 145);
    if (articulo >= 100) {
        pdf.text(articulo, 301, 145);
    } else {
        pdf.text(articulo, 305, 145);
    }
    if (articulo === "45" || articulo === "58" || articulo === "66") {
        pdf.text(("de la Ley Provincial N° 7.135 en perjuicio de"), 327, 145);
    } else {
        pdf.text(("de la Ley Provincial N° 7.135 en perjuicio del"), 325, 145);
    }
//3ra oracion........................................................
    if (articulo === "45" || articulo === "58" || articulo === "66") {
            function justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight) {
               var palabras = texto.split(' ');
               var linea = '';
               
               palabras.forEach(function(palabra, indice) {
                   var medida = pdf.getStringUnitWidth(palabra) * pdf.internal.getFontSize();
                   
                   if (pdf.getStringUnitWidth(linea + palabra) > anchoMaximo || indice === palabras.length - 1) {
                       var espaciosRestantes = anchoMaximo - pdf.getStringUnitWidth(linea.trim());
                       var espaciosTotales = indice < palabras.length - 1 ? Math.floor(espaciosRestantes / (linea.trim().split(" ").length - 1)) : 0;
                       var espaciosEntrePalabras = indice < palabras.length - 1 ? espaciosRestantes / Math.max(2, linea.trim().split(" ").length - 1) : 0;
                       
                       var lineaJustificada = linea.trim().split(" ").map(function(palabra, indice, arreglo) {
                           return palabra + (indice < arreglo.length - 1 ? ' '.repeat(espaciosEntrePalabras) : '');
                       }).join(' ');
                       
                       pdf.text(lineaJustificada, x, y, { align: 'justify' });
                       y += lineHeight;
                       linea = '';
                   }
                   
                   linea += palabra + ' ';
               });
           }
           
           // Ejemplo de uso:
           var texto = ((denunciante.toUpperCase())+(", seguida en contra de ")+(acusado.toUpperCase())+(", por hecho ocurrido en esta ciudad y en merito a su contenido, ELEVESE a la UNIDAD FISCAL CONTRAVENCIONAL, a los fines pertinentes. Consta de (      ) fojas.- a"));
           var anchoMaximo = 39; // ajusta este valor según tu diseño
           var lineHeight = 15; // ajusta este valor según tu diseño
           var x = 84; // ajusta esta coordenada según tu diseño
           var y = 160; // ajusta esta coordenada según tu diseño
           justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);
           
           
           } else {
            function justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight) {
               var palabras = texto.split(' ');
               var linea = '';
               
               palabras.forEach(function(palabra, indice) {
                   var medida = pdf.getStringUnitWidth(palabra) * pdf.internal.getFontSize();
                   
                   if (pdf.getStringUnitWidth(linea + palabra) > anchoMaximo || indice === palabras.length - 1) {
                       var espaciosRestantes = anchoMaximo - pdf.getStringUnitWidth(linea.trim());
                       var espaciosTotales = indice < palabras.length - 1 ? Math.floor(espaciosRestantes / (linea.trim().split(" ").length - 1)) : 0;
                       var espaciosEntrePalabras = indice < palabras.length - 1 ? espaciosRestantes / Math.max(2, linea.trim().split(" ").length - 1) : 0;
                       
                       var lineaJustificada = linea.trim().split(" ").map(function(palabra, indice, arreglo) {
                           return palabra + (indice < arreglo.length - 1 ? ' '.repeat(espaciosEntrePalabras) : '');
                       }).join(' ');
                       
                       pdf.text(lineaJustificada, x, y, { align: 'justify' });
                       y += lineHeight;
                       linea = '';
                   }
                   
                   linea += palabra + ' ';
               });
           }
           
           // Ejemplo de uso:
           var texto = (("Orden Publico, seguida en contra de ")+(acusado.toUpperCase())+(", por hecho ocurrido en esta ciudad y en merito a su contenido, ELEVESE a la UNIDAD FISCAL CONTRAVENCIONAL, a los fines pertinentes. Consta de (      ) fojas.- a"));
           var anchoMaximo = 39; // ajusta este valor según tu diseño
           var lineHeight = 15; // ajusta este valor según tu diseño
           var x = 84; // ajusta esta coordenada según tu diseño
           var y = 160; // ajusta esta coordenada según tu diseño
           justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

           } 
    
        /*pdf.setLineWidth(1);
        pdf.rect (84, 251, 34, 58);
        pdf.text (("S-7"), 91, 263);
        pdf.line (84, 266, 118, 266);
        pdf.text (("DSC"), 88, 278);
        pdf.line (84, 281, 118, 281);
        pdf.text (("AVF"), 89, 292);
        pdf.line (84, 295, 118, 295);
        if (instructor === "CABO ANGELA RODRIGUEZ") {
            pdf.text (("AR"), 89, 306);
        } else {
            pdf.text (("FVV"), 89, 306);
        }*/

    pdf.save(("Acta N° ")+numacta);
}
