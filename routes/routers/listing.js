const express = require('express');
const router = express.Router();
import Listing from '../../controllers/Listing';

router.get('/', (req, res, next) => {
  new Listing(req, res).findAllListing()
});

router.get('/:id', (req, res, next) => {
  new Listing(req, res).findListingById()
});

module.exports = router;
