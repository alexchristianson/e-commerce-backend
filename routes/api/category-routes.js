const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  }).then(response => res.json(response))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.post('/', (req, res) => {
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where: {
      id: req.params.id
    },
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;
