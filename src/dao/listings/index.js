import SolrClient from '../helper/SolrClient';
const LISTING_CORE = 'listings';
const { client: listingClient } = new SolrClient(LISTING_CORE);

export default {
  search: async (id) => {
    const conditionQ = id ? `documentid:${id}`: '*:*'
    const queryListingById = listingClient.createQuery().q(conditionQ).start(0).rows(10);
    return await listingClient.searchAsync(queryListingById);
  }
}