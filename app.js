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
        //let instructor = document.getElementById('instructor').value;
        let diaconsulta = document.getElementById('diaconsulta').value;
        let mesconsulta = document.getElementById('mesconsulta').value;
        let hs = document.getElementById('hs').value;
        let consulta = document.getElementById('consulta').value;
        let druficon = document.getElementById('druficon').value;
        let decomiso = document.getElementById('decomiso').value;
        let testigoacto1 = document.getElementById('testigoacto1').value;
        let testigoacto2 = document.getElementById('testigoacto2').value;
        

        generatePDF(dependencia, numacta, diainiciado, mesiniciado, articulo, hora, lugarhecho, denunciante, damnificado, damnificado2, acusado, /*instructor,*/ diaconsulta, mesconsulta, hs, consulta, druficon, decomiso, testigoacto1, testigoacto2);
    })

});

async function generatePDF(dependencia, numacta, diainiciado, mesiniciado, articulo, hora, lugarhecho, denunciante, damnificado, damnificado2, acusado, /*instructor,*/ diaconsulta, mesconsulta, hs, consulta, druficon, decomiso, testigoacto1, testigoacto2) {
    
    //const image1 = await loadImage("./escalerar.jpg");
    const image2 = await loadImage("./escaleraf.jpg");

    const pdf = new jsPDF('p', 'pt', 'A4'); // tamaño de hoja (cambiar letter x A4)

//pdf.addImage(image, 'JPEG', 0, 0, 590, 830);//HOJA 1c
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
        pdf.text(("ACTA CONTRAVENCIONAL ")+numacta+("/25"), 99, 78);
    }else {
        pdf.setFontSize(25);
        pdf.text(("ACTA CONTRAVENCIONAL ")+numacta+("/25"), 96, 78);
    }
    pdf.setLineWidth(2);
    pdf.line(95, 81, 510, 81); // (x1, y1, x2, y2)
//dependencia acargo
    if (dependencia === "") {
        pdf.text("CRIA Nº 4 – VILLA MITRE (DDP-1)", 103, 117);
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
        pdf.text(("01/25"), 103, 190);
    }if (mesiniciado === "2" || mesiniciado === "02") {
        pdf.text(("02/25"), 103, 190);
    } if (mesiniciado === "3" || mesiniciado === "03") {
        pdf.text(("03/25"), 103, 190);
    } if (mesiniciado === "4" || mesiniciado === "04") {
        pdf.text(("04/25"), 103, 190);
    } if (mesiniciado === "5" || mesiniciado === "05") {
        pdf.text(("05/25"), 103, 190);
    } if (mesiniciado === "6" || mesiniciado === "06") {
        pdf.text(("06/25"), 103, 190);
    } if (mesiniciado === "7" || mesiniciado === "07") {
        pdf.text(("07/25"), 103, 190);
    } if (mesiniciado === "8" || mesiniciado === "08") {
        pdf.text(("08/25"), 103, 190);
    } if (mesiniciado === "9" || mesiniciado === "09") {
        pdf.text(("09/25"), 103, 190);
    } if (mesiniciado >= 10 && mesiniciado <= 12) {
        pdf.text(mesiniciado+("/25"), 103, 190);
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
        pdf.text("0" + mes + "/25", 456, 190);
    }if (mes >= 10 && mes <= 12) {
        pdf.text(mes + "/25", 456, 190);
    }
//dependencia instructora
    pdf.setFontSize(15);
    pdf.text(("DEPENDENCIA INSTRUCTORA:"), 56, 243);
    pdf.setLineWidth(2);
    pdf.line(56, 246, 284, 246); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(13);
    pdf.text(("División Sumarios Contravencionales -"), 292, 243);
    pdf.text(("Sector 7 (DDP-1)"), 292, 263);
//articulo
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("HECHO:", 56, 293);
    pdf.line(56, 296, 113, 296); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(13);
    pdf.text(("S/Infracción Art. ")+articulo+(" de la Ley Provincial N° 7.135/01"), 120, 293);
//dia iniciado
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("FECHA:", 56, 343.1);
    pdf.line(56, 346, 111, 346); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
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
        pdf.text("enero de 2.025", 157, 343.1);
    } if (mesiniciado==="02" || mesiniciado==="2") {  
        pdf.text("febrero de 2.025", 157, 343.1);
    } if (mesiniciado==="03" || mesiniciado==="3") {  
        pdf.text("marzo de 2.025", 157, 343.1);
    } if (mesiniciado==="04" || mesiniciado==="4") {  
        pdf.text("abril de 2.025", 157, 343.1);
    } if (mesiniciado==="05" || mesiniciado==="5") {  
        pdf.text("mayo de 2.025", 157, 343.1);
    } if (mesiniciado==="06" || mesiniciado==="6") {  
        pdf.text("junio de 2.025", 157, 343.1);
    } if (mesiniciado==="07" || mesiniciado==="7") {  
        pdf.text("julio de 2.025", 157, 343.1);
    } if (mesiniciado==="08" || mesiniciado==="8") {  
        pdf.text("agosto de 2.025", 157, 343.1);
    } if (mesiniciado==="09" || mesiniciado==="9") {  
        pdf.text("septiembre de 2.025", 157, 343.1);
    } if (mesiniciado==="10") {  
        pdf.text("octubre de 2.025", 157, 343.1);
    } if (mesiniciado==="11") { 
        pdf.text("noviembre de 2.025", 157, 343.1);
    } if (mesiniciado==="12") { 
        pdf.text("diciembre de 2.025", 157, 343.1);
    } else {
        pdf.text("", 157, 343.1);
    }
//hora
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("HORAS:", 363, 343.1);
    pdf.line(363, 346, 420, 346); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(13);
    pdf.text(hora, 428, 343.1);
//lugar
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("LUGAR DEL HECHO:", 56, 393);
    pdf.line(56, 396, 205, 396); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
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
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(13);
    pdf.text(denunciante.toUpperCase(), 176, 443);
//damnificado
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("DAMNIFICADO:", 56, 493);
    pdf.line(56, 496, 166, 496); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(13);
    pdf.text(damnificado.toUpperCase(), 173, 493);
    pdf.text(damnificado2.toUpperCase(), 173, 493);
    if (damnificado === "" && damnificado2 === "") {
        pdf.text("ORDEN PÚBLICO", 173, 493);
    }
//acusado
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text(("ACUSADO/A:"), 56, 543);
    pdf.line(56, 546, 152, 546); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
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
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(13);
    pdf.text(("UNIDAD FISCAL CONTRAVENCIONAL"), 157, 593);
//instructor 
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(15);
    pdf.text("INSTRUCTOR DE SUMARIO:", 56, 643);
    pdf.line(56, 646, 258, 646); // (x1, y1, x2, y2)
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(13);
    pdf.text(("CABO FLORENCIA VILTE"),268, 643);

/*if (instructor==="") {
    pdf.text(("CABO FLORENCIA VILTE"),268, 643);
} else {
    pdf.text(instructor, 268, 643);
}*/
//año
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(32);
    pdf.text("AÑO 2.025", 230, 715);
//HOJA 2 CONSTANCIA DE INSTRUCCION-------------------------------------------------------------------------------

    pdf.addPage();
    //pdf.addImage(image2, 'JPEG', 0, 0, 600, 830); // HOJA 3 CONST INSTRUCCION
//TITULO
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("CONSTANCIA DE LA INSTRUCCIÓN"), 217, 82);
//1ra oracion..............................
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(12);
    if ((date.getUTCMonth() + 1).toString() === "1") {  
        pdf.text(("enero  del  año  2025,"), 443, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "2") {  
        pdf.text(("febrero del  año  2025,"), 441, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "3") {  
        pdf.text(("marzo  del  año  2025,"), 443, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "4") {  
        pdf.text(("abril  del  año  2025,"), 443, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "5") {  
        pdf.text(("mayo  del  año  2025,"), 445, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "6") {  
        pdf.text(("junio  del  año  2025,"), 445, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "7") {  
        pdf.text(("julio  del  año  2025,"), 445, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "8") {  
        pdf.text(("agosto del año 2025,"), 442, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "9") {  
        pdf.text(("septiembre del año 2025,"), 421, 118);
        pdf.text(("____: En la Ciudad de Salta Capital, a los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 313, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 313, 118);
    }
    pdf.text(("días del mes de"), 331, 118);

    }if ((date.getUTCMonth() + 1).toString() === "10") {  
        pdf.text(("octubre del año 2025,"), 442, 118);
        pdf.text(("____: En la  Ciudad de  Salta  Capital,  a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 329, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 329, 118);
    }
    pdf.text(("días  del  mes de"), 345, 118);

    }if ((date.getUTCMonth() + 1).toString() === "11") {  
        pdf.text(("noviembre del año 2025,"), 425, 118);
        pdf.text(("____: En la Ciudad de Salta Capital, a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 317, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 317, 118);
    }
    pdf.text(("días del mes de"), 335, 118);

    }if ((date.getUTCMonth() + 1).toString() === "12") {  
        pdf.text(("diciembre del año 2025,"), 425, 118);
        pdf.text(("____: En la Ciudad de Salta Capital, a  los"), 86, 118);
    var dia = date.getUTCDate().toString();
    if (dia >= 1 && dia <= 9) {  
        pdf.text("0" + dia, 317, 118);
    }if (dia >= 10 && dia <= 31) {
        pdf.text(dia, 317, 118);
    }
    pdf.text(("días  del  mes de"), 335, 118);

    }
//2da oracion..............................
    pdf.text(("se   deja    debidamente    documentado   al"), 86, 133);
    pdf.text(("diligenciamiento    de    la    presente    Acta"), 328, 133);

//3ra oracion..............................
    if (String(articulo).includes("103") || String(articulo).includes("54")) {
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
    var texto = (("Contravencional por Infracción al Art. ")+articulo+(" de la Ley Provincial N° 7135/01 seguida en contra de ")+(acusado.toUpperCase())+(", los cuales constan de Formularios A, B, Acta de Consulta Judicial y tomas fotográficas. Es todo cuanto se hace constar. a"));
    var anchoMaximo = 39; // ajusta este valor según tu diseño
    var lineHeight = 15; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 148; // ajusta esta coordenada según tu diseño
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
    var texto = (("Contravencional por Infracción al Art. ")+articulo+(" de la Ley Provincial N° 7135/01 seguida en contra de ")+(acusado.toUpperCase())+(", los cuales constan de Formularios A, B y tomas fotográficas. Es todo cuanto se hace constar. a"));
    var anchoMaximo = 39; // ajusta este valor según tu diseño
    var lineHeight = 15; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 148; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);}

//HOJA 3 ELEVACION------------------------------------------------------------------------------------------

    pdf.addPage();

//SECTOR
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("SECTOR N° 7 (DDP-1)"), 84, 85);
    pdf.setLineWidth(1,4);
    pdf.line (84, 88, 205, 88);
//Espacio en blanco
    pdf.setTextColor(255);
    pdf.text(("I         I          I          I           I   "), 212, 85);
    pdf.text(("I"), 396, 85);
//fecha
    pdf.setTextColor(0);
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(12);
//salta
// dia mes año
    if ((date.getUTCMonth() + 1).toString()==="1") {  //listo
        pdf.text(("SALTA,"), 402, 85);
        pdf.text("enero de 2.025", 483, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 446, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 446, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="2") {  //listo
        pdf.text(("SALTA,"), 393, 85);
        pdf.text("febrero de 2.025", 474, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 437, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 437, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="3") { //listo 
        pdf.text(("SALTA,"), 401, 85);
        pdf.text("marzo de 2.025", 482, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 445, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 445, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="4") {  //listo
        pdf.text(("SALTA,"), 407, 85);
        pdf.text("abril de 2.025", 488, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 451, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 451, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="5") {  //listo
        pdf.text(("SALTA,"), 404, 85);
        pdf.text("mayo de 2.025", 485, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 448, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 448, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="6") {  //listo
        pdf.text(("SALTA,"), 406, 85);
        pdf.text("junio de 2.025", 487, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 450, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 450, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="7") {  //listo
        pdf.text(("SALTA,"), 407, 85);
        pdf.text("julio de 2.025", 488, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 451, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 451, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="8") {   //listo
        pdf.text(("SALTA,"), 398, 85);
        pdf.text("agosto de 2.025", 479, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 442, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 442, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="9") {  //listo
        pdf.text(("SALTA,"), 376, 85);
        pdf.text("septiembre de 2.025", 457, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 420, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 420, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="10") {  //listo
        pdf.text(("SALTA,"), 392, 85);
        pdf.text("octubre de 2.025", 473, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 436, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 436, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="11") { //listo
        pdf.text(("SALTA,"), 380, 85);
        pdf.text("noviembre de 2.025", 461, 85);
        if (date.getUTCDate().toString() >=1 && date.getUTCDate().toString() <=9) {  
            pdf.text(("0") + date.getUTCDate().toString()+(" de"), 424, 85);
        }if (date.getUTCDate().toString() >=10 && date.getUTCDate().toString() <=31) {
            pdf.text(date.getUTCDate().toString()+(" de"), 424, 85);
        }
    } if ((date.getUTCMonth() + 1).toString()==="12") { //listo
        pdf.text(("SALTA,"), 380, 85);
        pdf.text("diciembre de 2.025", 461, 85);
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
    pdf.setTextColor(255);
    pdf.text(("SECTOR N "), 86, 130);
    pdf.setTextColor(0);
    pdf.text(("VISTO"), 157, 130);//124
    pdf.setFont("Arial", "normal");
    pdf.text(("la   presente"), 205, 130);
    pdf.setFont("Arial", "bold");
    pdf.text(("Acta   Contravencional"), 282, 130);
//dependencia a cargo
if (dependencia==="   CRIA Nº 4 – VILLA MITRE (DDP-1)" || dependencia===""){
        pdf.text(("CC"), 425, 130);
    } else {
        pdf.text(("SCA"), 421, 130);
    }
//num acta
    pdf.text(("(S-7)   N°"), 456, 130);
    if (numacta >= 1000) {
        pdf.text(numacta, 513, 130);
    } else {
        pdf.text(numacta, 515, 130);
    }
    pdf.text(("/25" ), 545, 130);
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(12);

//2da oracion........................................................
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
    var texto = (("correspondiente al registro de esta División por S/Inf. Art. ")+articulo+(" de la Ley Provincial N° 7.135 en perjuicio de ")+denunciante.toUpperCase()+(", seguida en contra de ")+(acusado.toUpperCase())+(", por hecho ocurrido en esta ciudad y en merito a su contenido, ELÉVESE a la UNIDAD FISCAL CONTRAVENCIONAL, a los fines pertinentes. Consta de (      ) fojas. a"));
    var anchoMaximo = 39; // ajusta este valor según tu diseño
    var lineHeight = 15; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 145; // ajusta esta coordenada según tu diseño
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
    var texto = ((" correspondiente al registro de esta División por S/Inf. Art. ") + articulo + (" de la Ley Provincial N° 7.135 en perjuicio del Orden Publico, seguida en contra de ") + (acusado.toUpperCase()) + (", por hecho ocurrido en esta ciudad y en merito a su contenido, "));
    var anchoMaximo = 39; // ajusta este valor según tu diseño
    var lineHeight = 15; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 145; // ajusta esta coordenada según tu diseño        
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

   } 

    pdf.setFont("Arial", "bold");
    var negrita = ("ELÉVESE ");
    pdf.text(negrita, 86 + pdf.getTextWidth(""), 205);
    pdf.setFont("Arial", "normal");
    var normal = (" a la ");
    pdf.text(normal, 86 + pdf.getTextWidth("ELÉVESE "), 205);
    pdf.setFont("Arial", "bold");
    var negrita2 = "UNIDAD FISCAL CONTRAVENCIONAL";
    pdf.text(negrita2, 86 + pdf.getTextWidth("ELÉVESE  a la "), 205);
    pdf.setFont("Arial", "normal");
    var ultima = " , a los fines pertinentes. Consta ";
    pdf.text(ultima, 86 + pdf.getTextWidth("ELÉVESE  a la UNIDAD FISCAL CONTRAVENCIONAL "), 205);
    pdf.text("de (      ) fojas.",86 , 220)

//linea blanca
   pdf.setTextColor(255);
   pdf.text(("-"), 86, 235)
   pdf.setTextColor(0);

//sello escalera
   pdf.addImage(image2, 'JPEG', 82, 250, 53, 80); 
   /*if (instructor === "CABO ANGELA RODRIGUEZ") {
       pdf.addImage(image1, 'JPEG', 82, 250, 50, 70); 
   } else {
       pdf.addImage(image2, 'JPEG', 82, 250, 53, 80); 
   }*/

//HOJA 4 CONSULTA JUDICIAL ------------------------------------------------------------------------------------------

    if (String(articulo).includes("103") && diaconsulta !== "") {
        pdf.addPage();
        //pdf.addImage(image3, 'JPEG', 0, 0, 590, 830);//HOJA 4

    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("CONSULTA JUDICIAL"), 233, 86);
//1ra oracion......................................................
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(12);
    pdf.text(("___: En la Ciudad de Salta, Capital de la Provincia del mismo nombre a los"), 86, 125);
    if (diaconsulta === "1" || diaconsulta === "01") {
        pdf.text(("01 días"), 492, 125);
    }if (diaconsulta === "2" || diaconsulta === "02") {
        pdf.text(("02 días"), 492, 125);
    } if (diaconsulta === "3" || diaconsulta === "03") {
        pdf.text(("03 días"), 492, 125);
    } if (diaconsulta === "4" || diaconsulta === "04") {
        pdf.text(("04 días"), 492, 125);
    } if (diaconsulta === "5" || diaconsulta === "05") {
        pdf.text(("05 días"), 492, 125);
    } if (diaconsulta === "6" || diaconsulta === "06") {
        pdf.text(("06 días"), 492, 125);
    } if (diaconsulta === "7" || diaconsulta === "07") {
        pdf.text(("07 días"), 492, 125);
    } if (diaconsulta === "8" || diaconsulta === "08") {
        pdf.text(("08 días"), 492, 125);
    } if (diaconsulta === "9" || diaconsulta === "09") {
        pdf.text(("09 días"), 492, 125);
    } if (diaconsulta >= 10 && diaconsulta <= 31) {
        pdf.text(diaconsulta+(" días"), 492, 125);
    }
// 2da Oracion .............................................................
//mes iniciado  
    if (mesconsulta==="01" || mesconsulta==="1") {  
        pdf.text("del  mes  de   enero   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="02" || mesconsulta==="2") {  
        pdf.text("del  mes  de   febrero  del  año  2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="03" || mesconsulta==="3") {  
        pdf.text("del  mes  de   marzo   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="04" || mesconsulta==="4") {  
        pdf.text("del  mes  de   abril   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="05" || mesconsulta==="5") {  
        pdf.text("del  mes  de   mayo   del  año   2.025,  siendo  horas  " + hs + ",  se  deja   debidamente", 86, 141);
    } if (mesconsulta==="06" || mesconsulta==="6") {  
        pdf.text("del  mes  de   junio   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="07" || mesconsulta==="7") {  
        pdf.text("del  mes  de   julio   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="08" || mesconsulta==="8") {  
        pdf.text("del  mes  de   agosto  del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="09" || mesconsulta==="9") {  
        pdf.text("del  mes  de  septiembre  del  año  2.025, siendo  horas  " + hs + ", se  deja  debidamente", 86, 141);
    } if (mesconsulta==="10") {  
        pdf.text("del  mes  de  octubre   del  año  2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 141);
    } if (mesconsulta==="11") { 
        pdf.text("del  mes  de  noviembre  del  año  2.025,  siendo  horas  " + hs + ", se  deja  debidamente", 86, 141);
    } if (mesconsulta==="12") { 
        pdf.text("del  mes  de  diciembre  del  año  2.025,  siendo  horas  " + hs + ", se  deja  debidamente", 86, 141);
    }
    
// 3ra Oracion .............................................................
    pdf.text("documentado que la suscripta procedió a realizar consulta judicial vía telefónica con", 86, 157)
    
// 4ta Oracion .............................................................
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
    var texto = ("el Juzgado de Garantías 2º Nominación, siendo atendida por el/la Dr/a. " + consulta.toUpperCase() + ", a quien se le hizo saber que el/la Dr./a " + druficon + " de la Unidad a")
    var anchoMaximo = 37; // ajusta este valor según tu diseño
    var lineHeight = 16; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 173; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);
    
// 6ta Oracion .............................................................
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
    var texto = ("Fiscal  Contravencional solicitó el secuestro y decomiso de  los elementos obrantes a")
    var anchoMaximo = 37; // ajusta este valor según tu diseño
    var lineHeight = 16; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 205; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

// 7ma Oracion .............................................................
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
    var texto = ("en Actas Contravencionales labradas por infracción a la Ley Provincial N° 7.135/01, a")
    var anchoMaximo = 37; // ajusta este valor según tu diseño
    var lineHeight = 16; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 221; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

// 8va Oracion .............................................................
    pdf.text(("quien "), 86, 237);
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
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
    var texto = ("DISPUSO que se proceda conforme lo establece el Art. 150 del Código a")
    var anchoMaximo = 37; // ajusta este valor según tu diseño
    var lineHeight = 16; // ajusta este valor según tu diseño
    var x = 126; // ajusta esta coordenada según tu diseño
    var y = 237; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

// 9na Oracion .............................................................
    pdf.text(("Contravencional."), 86, 253);
    pdf.setFont("Arial", "normal");
    pdf.setFontSize(12);
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
    var texto = ("No  siendo  para  más  se  da  por  finalizada  la  presente  acta, a")
    var anchoMaximo = 37; // ajusta este valor según tu diseño
    var lineHeight = 16; // ajusta este valor según tu diseño
    var x = 189; // ajusta esta coordenada según tu diseño
    var y = 253; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

// 10ma Oracion .............................................................
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
    var texto = ("firmando al pie de la presente para constancia. a")
    var anchoMaximo = 37; // ajusta este valor según tu diseño
    var lineHeight = 16; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 269; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);
    
//Espacio en blanco
    pdf.setTextColor(255);
    pdf.text(("-"), 86, 285);
    pdf.text(("-"), 86, 301);
    pdf.text(("-"), 86, 317);
    pdf.text(("-"), 86, 333);
    pdf.text(("-"), 86, 349);
    pdf.text(("-"), 86, 365);
    pdf.text(("-"), 86, 381);
    pdf.text(("-"), 86, 397);
    pdf.setTextColor(0);

//ACTA DE DECOMISO-------------------------------------------------------------------------------------------
    pdf.setFont("Arial", "bold");
    pdf.setFontSize(12);
    pdf.text(("ACTA DE DECOMISO"), 233, 417);

//Espacio en blanco
    pdf.setTextColor(255);
    pdf.text(("-"), 86, 433);
    pdf.text(("-"), 86, 449);
    pdf.setTextColor(0);
    
//1ra oracion......................................................
    pdf.setFont("Arial", "normal");
    pdf.text(("___: En la Ciudad de Salta, Capital de la Provincia del mismo nombre a los"), 86, 465);
    if (diaconsulta === "1" || diaconsulta === "01") {
        pdf.text(("01 días"), 492, 465);
    }if (diaconsulta === "2" || diaconsulta === "02") {
        pdf.text(("02 días"), 492, 465);
    } if (diaconsulta === "3" || diaconsulta === "03") {
        pdf.text(("03 días"), 492, 465);
    } if (diaconsulta === "4" || diaconsulta === "04") {
        pdf.text(("04 días"), 492, 465);
    } if (diaconsulta === "5" || diaconsulta === "05") {
        pdf.text(("05 días"), 492, 465);
    } if (diaconsulta === "6" || diaconsulta === "06") {
        pdf.text(("06 días"), 492, 465);
    } if (diaconsulta === "7" || diaconsulta === "07") {
        pdf.text(("07 días"), 492, 465);
    } if (diaconsulta === "8" || diaconsulta === "08") {
        pdf.text(("08 días"), 492, 465);
    } if (diaconsulta === "9" || diaconsulta === "09") {
        pdf.text(("09 días"), 492, 465);
    } if (diaconsulta >= 10 && diaconsulta <= 31) {
        pdf.text(diaconsulta+(" días"), 492, 465);
    }
// 2da Oracion .............................................................
//mes iniciado 
    if (mesconsulta==="01" || mesconsulta==="1") {  
        pdf.text("del  mes  de   enero   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="02" || mesconsulta==="2") {  
        pdf.text("del  mes  de   febrero  del  año  2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="03" || mesconsulta==="3") {  
        pdf.text("del  mes  de   marzo   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="04" || mesconsulta==="4") {  
        pdf.text("del  mes  de   abril   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="05" || mesconsulta==="5") {  
        pdf.text("del  mes  de   mayo   del  año   2.025,  siendo  horas  " + hs + ",  se  deja   debidamente", 86, 481);
    } if (mesconsulta==="06" || mesconsulta==="6") {  
        pdf.text("del  mes  de   junio   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="07" || mesconsulta==="7") {  
        pdf.text("del  mes  de   julio   del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="08" || mesconsulta==="8") {  
        pdf.text("del  mes  de   agosto  del  año   2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="09" || mesconsulta==="9") {  
        pdf.text("del  mes  de  septiembre  del  año  2.025, siendo  horas  " + hs + ", se  deja  debidamente", 86, 481);
    } if (mesconsulta==="10") {  
        pdf.text("del  mes  de  octubre   del  año  2.025,  siendo  horas  " + hs + ",  se  deja  debidamente", 86, 481);
    } if (mesconsulta==="11") { 
        pdf.text("del  mes  de  noviembre  del  año  2.025,  siendo  horas  " + hs + ", se  deja  debidamente", 86, 481);
    } if (mesconsulta==="12") { 
        pdf.text("del  mes  de  diciembre  del  año  2.025,  siendo  horas  " + hs + ", se  deja  debidamente", 86, 481);
    }
      
// 3ra Oracion .............................................................
    pdf.text(("documentado que se procede al decomiso de: "), 86, 497);

//4ta y 5ta Oracion .............................................................
    pdf.setFont("Arial", "bold");
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
    var texto = (decomiso + ", la cual se encuentra en calidad de resguardo en esta oficina contravencional. a")
    var anchoMaximo = 37; // ajusta este valor según tu diseño
    var lineHeight = 16; // ajusta este valor según tu diseño
    var x = 86; // ajusta esta coordenada según tu diseño
    var y = 513; // ajusta esta coordenada según tu diseño
    justificarTexto(pdf, texto, x, y, anchoMaximo, lineHeight);

// 6ta Oracion .............................................................
    pdf.setFont("Arial", "normal");
    pdf.text(("Es todo cuanto se hace constar, firmando al pie para constancia por ante los testigos"), 86, 561);

// 7ma Oracion .............................................................
    pdf.setFont("Arial", "normal");
    pdf.text(("de acto hábiles Sr/a. " + testigoacto1 + " y " + testigoacto2 + " ambos domiciliados"), 86, 577);

// 8va Oracion .............................................................
    pdf.text(("profesionalmente en esta Preventora, por ante mi funcionario actuante que CERTIFICO."), 86, 593);

//Espacio en blanco
    pdf.setTextColor(255);
    pdf.text(("-"), 86, 609);
    pdf.text(("-"), 86, 625);
    pdf.text(("-"), 86, 641);
    pdf.setTextColor(0);

// 9na y 10ma Oracion .............................................................
    pdf.setFont("Arial", "bold");
    pdf.text(("TESTIGO DE ACTO I"), 86, 657);

//Espacio en blanco
    pdf.setTextColor(255);
    pdf.text(("-"), 86, 673);
    pdf.text(("-"), 86, 689);
    pdf.setTextColor(0);

    pdf.text(("TESTIGO DE ACTO II"), 86, 705);

    } else {
       // No hacer nada si el valor de articulo no contiene "103"
    }



    pdf.save(("Acta N° ")+numacta);
}
