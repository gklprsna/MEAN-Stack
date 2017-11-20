var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://gklprsna:thirunagar@ds161194.mlab.com:61194/eng_gokul', ['engineers']);

//Get All Engineer
router.get('/engineers', function(req, res, next)
{
    
    db.engineers.find(function(err, data)
    {
        if(err)
        {
            res.send(err);
            console.log('Cannot fetch data from Database');
        }

        res.json(data);
    });
});

//Get One Engineer
router.get('/engineer/:id', function(req, res, next)
{
    
    db.engineers.findOne({_id : mongojs.ObjectId(req.params.id)},function(err, data)
    {
        if(err)
        {
            res.send(err);
            console.log('Cannot fetch data from Database');
        }

        res.json(data);
    });
});

//Update Engineer
router.put('/engineer/:id', function(req, res, next)
{
    var engData = req.body;
    delete engData._id;
    if(engData)
    {
             db.engineers.update({_id : mongojs.ObjectId(req.params.id)},engData,{},function(err, data)
             {
                  if(err)
                  {
                      res.send(err);
                      console.log('Cannot update data into Database');
                  }         

                  res.json(data);
             });
    }

    else
        {
            res.status(400);
            res.json({"error" : "Bad Data"});
        }
});

//Delete Engineer
router.delete('/engineer/:id', function(req, res, next)
{
    
    db.engineers.remove({_id : mongojs.ObjectId(req.params.id)},function(err, data)
    {
        if(err)
        {
            res.send(err);
            console.log('Cannot delete data from Database');
        }

        res.json(data);
    });
});

//Create new Engineer
router.post('/engineer', function(req, res, next)
{
    var engData = req.body;
    if(engData)
    {
       db.engineers.save(engData,function(err, data)
       {
           if(err)
           {
            res.send(err);
            console.log('Cannot save data to Database');
           }

           res.json(data);
       });
    }

    else
        {
            res.status(400);
            res.json({"error" : "Bad Data"});
        }
});

module.exports = router;