import solr from 'solr-client';
import { solrConfig } from '../config.json';
import bluebird from 'bluebird';

export default class SolrClient {
  constructor(core) {
    this.client = bluebird.promisifyAll(solr.createClient({
      host: solrConfig.solrHost,
      port: solrConfig.solrPort,
      core: core,
    }));
  }
}