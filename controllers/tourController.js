const fs = require('fs');
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(fs.readFileSync('./dev_data/data/tours.json'))

exports.getTours = async (req, res) =>{
    try{
       const results = await Tour.find();
       console.log(results)
        res.render("form.ejs", {results})
    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
    
}
// exports.getTour = (req, res) =>{
//     console.log(req.params)

//     const id = req.params.id * 1;
//     const tour = tours.find(el => el.id === id)
//     if(!tour){
//         return res.status(404).json({
//             status:'fail',
//             message:"Invalid id"
//         })
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             tour
//         }
//     });
// }
exports.createTour = async (req, res) =>{
    try{
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status:'success',
            data:{
                tour: newTour
            }
        });
    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
  
}
// exports.updateTour = (req, res) =>{
//     if(req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status:'fail',
//             message:"Invalid id"
//         })
//     }
//     res.status(200).json({
//         status:'success',
//         data:{
//             tour:"updated tour"
//         }
//     })
// }
// exports.deleteTour = (req, res) =>{
//     if(req.params.id * 1 > tours.length){
//         return res.status(404).json({
//             status:'fail',
//             message:"Invalid id"
//         })
//     }
//     res.status(204).json({
//         status:'success',
//         data: null
//     })
// }