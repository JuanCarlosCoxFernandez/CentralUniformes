// const fs = require('fs').promises;
// const path = require('path');

// const rutaArchivoDatos = 'C:\\Users\\juank\\Proyectos\\Tecnologias\\JsReportApp\\data\\Apps\\apps-data\\dataJson.json';


// async function beforeRender(req, res) {
//     try {
//       a = await fetchApps();
//       apps = a.data;
//       accumulated = await prepareDataSource();
//       console.log(accumulated);
//         req.data.apps = {apps,accumulated};
//         console.log(req.data.apps);
//     } catch (error) {
//         console.error('Error al obtener datos:', error);
//     }
// }


// async function fetchApps() {
//   try {
//     const contenidoArchivo = await fs.readFile(rutaArchivoDatos, 'utf-8');
//     return JSON.parse(contenidoArchivo);
//   } catch (error) {
//     console.error('Error al analizar el archivo JSON:', error);
//     throw error; // Puedes manejar el error de otra manera según tus necesidades
//   }
// }

// async function prepareDataSource() {
//     const a = await fetchApps();
//     const apps = a.data

//     const httpAppsCount = apps.filter(app => app.URL.startsWith('http')).length;
//     const nonHttpAppsCount = apps.length - httpAppsCount;

//     const data = {
//         labels: ['HTTP', 'No HTTP'],
//         datasets: [{
//             data: [httpAppsCount, nonHttpAppsCount],
//             backgroundColor: ['rgba(27,161,226,0.2)', 'rgba(255,0,0,0.2)'],
//             borderColor: ['rgba(27,161,226,1)', 'rgba(255,0,0,1)'],
//             borderWidth: 1,
//         }]
//     };

//     return data;
// }


