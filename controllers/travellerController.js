const express = require('express');
const router = express.Router();
const { Traveller, Trip, Location } = require('../models');


router.get("/", (req, res) => {
    Traveller.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "An error occurred.",
            err: err
        })
    })
});


router.get("/:id", (req, res) => {
    Traveller.findByPk(req.params.id, {
        include: [{
            model: Trip,
            include: [Player]
        },
        {
            model: Location,
            include: [name]
        }]
    }).then(data => {
        if (data) {
            return res.json(data);
        } else {
            res.status(404).json({
                msg: "Record not found."
            })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "An error occurred.",
            err: err
        })
    })
})


router.post("/", (req, res) => {
    Traveller.create({
        name: req.body.name,
        email: req.body.email
    }).then(data => {
        res.status(201).json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "An error occurred.",
            err: err
        })
    })
});


router.delete("/:id", (req, res) => {
    Traveller.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (data) {
            return res.json(data)
        } else {
            return res.status(404).json({ msg: "Record not found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "An error occurred",
            err: err
        })
    })
})


module.exports = router;