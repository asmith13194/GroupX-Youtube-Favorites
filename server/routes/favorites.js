'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
  knex('favorites')
  .select('*')
  .then(favorites => res.send({ favorites }))
})

router.post('/', (req, res) => {
  knex('favorites')
  .insert(req.body)
  .then(() => {
    knex('favorites')
    .select('*')
    .then(favorites => res.send({ favorites }))
  })
  .catch(err => {
    knex('favorites')
    .select('*')
    .then(favorites => res.send({ favorites }))
  })
})

router.delete('/:id', (req, res) => {
  knex('favorites')
  .where('videoId', req.params.id)
  .del()
  .then(() => {
    knex('favorites')
    .select('*')
    .then(favorites => res.send({ favorites }))
  })
})

module.exports = router;
