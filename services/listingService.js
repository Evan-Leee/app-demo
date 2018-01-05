import listings from '../dao/listings';
import { getLogger } from 'log4js';
const logger = getLogger('Listing Service');

export const getListings = async (id) => {
  const result = await listings.search(id);
  const status = result.responseHeader.status;
  if (status !== 0) {
    throw new Error('Solr search error!');
  }
  return {
    number: result.response.numFound,
    listings: result.response.docs
  }
}