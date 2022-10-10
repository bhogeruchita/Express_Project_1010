const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.get('/', (req, res) => {
//     const data = fs.readFileSync('./dev_data/data/data.json', 'utf-8');
//     const results = JSON.parse(data);
//     console.log(results)
//     res.render('form.ejs', {results});
// })

// app.get('/subscribe', (req,res) =>{
//     res.sendFile(path.join(__dirname+'/dev_data'+'/templates'+'/contact_us.html'))
// })

// app.post('/createSubscribe', (req,res) =>{
//     console.log(req.body)
//     res.send("Thank you for subscribing");
// })

// app.get('/tours', getTours);
// app.get('/tours/:id', getTour);
// app.post('/tours', createTour);
// app.patch('/tours/:id', updateTour);
// app.delete('/tours/:id', deleteTour);

const tourRouter = require('./routes/tourRoutes');
app.use('/tours', tourRouter);

const subscribe = require('./routes/subscribeRoute');
app.use('/subscribe', subscribe);

module.exports = app;
