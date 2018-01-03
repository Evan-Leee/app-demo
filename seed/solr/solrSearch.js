import solr from 'solr-client';
import { solrConfig } from '../config.json';

export default class SolrSearcher {

  constructor(core) {
    this.client = solr.createClient({
      host: solrConfig.solrHost,
      port: solrConfig.solrPort,
      core: core,
    });
  }

  searchListing(id) {
    const conditionQ = id ? `documentid:${id}`: '*:*'
    const queryListingById = this.client.createQuery().q(conditionQ).start(0).rows(10);
    return new Promise((resolve, reject) => {
      this.client.search(queryListingById, (err, obj) => {
        if (err) {
          reject(err);
        } else {
          if (obj.responseHeader.status === 0) {
            resolve({
              dataArray: obj.response.docs,
              totalCount: obj.response.numFound,
            });
          } else {
            console.log(obj);
            reject(Error('Response status is not 0.'));
          }
        }
      })
    });
  }
}