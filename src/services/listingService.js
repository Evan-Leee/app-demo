import listingCore from '../dao/listings';

export class ListingService {
  constructor(listingCollection) {
    this.listingCollection = listingCollection;
  }

  async getListings(id) {
    const result = await this.listingCollection.search(id);
    const status = result.responseHeader.status;
    if (status !== 0) {
      throw new Error('Solr search error!');
    }
    return {
      number: result.response.numFound,
      listings: result.response.docs
    };
  }
}

export default new ListingService(listingCore);
