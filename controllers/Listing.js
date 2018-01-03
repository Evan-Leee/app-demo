import SolrSearcher from '../seed/solr/solrSearch';
import Base from './Base';

export default class Listing extends Base {
  constructor(req, res) {
    super(req, res);
    this.listingSearcher = new SolrSearcher('listings');
  }

  findAllListing() {
    return this.listingSearcher.searchListing()
    .then((data) => {
      this.res.send(data.dataArray)
    }, (reason) => {
      this.res.status(500).send(reason);
    });
  }

  findListingById() {
    const id = this.req.params.id;
    return this.listingSearcher.searchListing(id).then((data) => {
      this.res.send(data.dataArray)
    }, (reason) => {
      this.res.status(500).send(reason);
    });
  }
}
