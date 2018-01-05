const express = require('express');
const router = express.Router();
import { findAllListing, findListingById} from '../../controllers/Listing';

router.get('/', findAllListing);

router.get('/:id', findListingById);

export default router;