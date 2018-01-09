import { findAllListing, findListingById } from '../../controllers/Listing';
const express = require('express');
const router = express.Router();

router.get('/', findAllListing);

router.get('/:id', findListingById);

export default router;
