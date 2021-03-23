// const express = require('express');
// const fetch = require('node-fetch');

// const app = express();

// app.get('/jobs', async (request, response) => {
//   try {
//     // console.log(request.params);
//     // const desloc = request.params.desloc.split(',');
//     // console.log(desloc);
//     // const des = desloc[0];
//     // const loc = desloc[1];
//     // console.log(des, loc);
//     response.header('Access-Control-Allow-Origin', '*');
//     const apiUrl = `https://jobs.github.com/positions.json?description=&location=`;
//     const data = await fetch(apiUrl);
//     const jsonData = await data.json();
//     response.json(jsonData);
//   } catch (err) {
//     console.log('error!');
//     response.status(400).send(err);
//     console.log(err);
//   }
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Starting server at ${port}`);
// });
