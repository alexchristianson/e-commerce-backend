const router = require('express').Router();
const { regexp } = require('sequelize/types/lib/operators');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.post('/', (req, res) => {
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
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
