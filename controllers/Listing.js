import { getListings } from '../services/listingService';

export const findAllListing = async (req, res, next) => {
  try {
    const listings = await getListings();
    res.send(listings);
  } catch(e) {
    throw new Error(e)
    res.status(500).send(e);
  }
}

export const findListingById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const listings = await getListings(id);
    res.send(listings);
  } catch(e) {
    throw new Error(e)
    res.status(500).send(e);
  }
}
