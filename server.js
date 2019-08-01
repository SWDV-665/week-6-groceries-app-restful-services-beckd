// Set up
import express from 'express';
var app = express();
import { connect, model } from 'mongoose';
import { urlencoded, json } from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';

// Configuration
connect(process.env.MONGODB_URI || "mongodb://localhost:27017/groceries");

app.use(urlencoded({'extended': 'true'}));
app.use(json());
app.use(json({type: 'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, POST, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Model
var Grocery = model('Grocery', {
    name: String,
    quantity: Number
});


// Get all grocery items
app.get('/api/groceries', function (req, res) {

    console.log("Listing groceries items...");

    //use mongoose to get all groceries in the database
    Grocery.find(function (err, groceries) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        } else {
            res.json(groceries); // return all groceries in JSON format
        }
    });
});

// Create a grocery Item
app.post('/api/groceries', function (req, res) {

    console.log("Creating grocery item...");

    Grocery.create({
        name: req.body.name,
        quantity: req.body.quantity,
        done: false
    }, function (err, grocery) {
        if (err) {
            res.send(err);
        }

        // create and return all the groceries
        Grocery.find(function (err, groceries) {
            if (err) {
                return res.send(err);
            }
            res.json(groceries);
        });
    });

});

// Update a grocery Item
app.put('/api/groceries/:id', function (req, res) {
    const grocery = {
        name: req.body.name,
        quantity: req.body.quantity
    };
    console.log("Updating item - ", req.params.id);
    Grocery.update({_id: req.params.id}, grocery, function (err, raw) {
        if (err) {
            return res.send(err);
        }
        res.send(raw);
    });
});


// Delete a grocery Item
app.delete('/api/groceries/:id', function (req, res) {
    Grocery.remove({
        _id: req.params.id
    }, function (err, grocery) {
        if (err) {
            console.error("Error deleting grocery ", err);
        }
        else {
            Grocery.find(function (err, groceries) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(groceries);
                }
            });
        }
    });
});


// Start app and listen on port 8080  
app.listen(process.env.PORT || 8080, () => console.log("Grocery server listening on port  - ", (process.env.PORT || 8080)));