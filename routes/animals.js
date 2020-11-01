const express = require('express');

const AnimalController = require('../controllers/animals');

const checkAuth = require('../middleware/check-auth');
const extractMimeFile = require('../middleware/mime-file');

const router = express.Router();

router.post('', checkAuth, extractMimeFile, function (req, res) {
  AnimalController.createPost;
});

router.put('/:id', checkAuth, extractMimeFile, AnimalController.updateAnimal);

router.get('', AnimalController.getAnimals);

router.get('/:id', AnimalController.deleteAnimal);

router.delete('/:id', checkAuth, AnimalController.deleteAnimal);

module.exports = router;
