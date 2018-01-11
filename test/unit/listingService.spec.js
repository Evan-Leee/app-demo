import { ListingService } from '../../src/services/listingService';
import listing from '../../src/dao/listings/';
import sinon from 'sinon';
import chai from 'chai';
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { expect } = chai;

describe('listing service', () => {
  describe('#getListings', () => {
    const baseResponse = {
      response: {
        numFound: 1,
        docs: [
          {name: 'listing'}
        ]
      },
      responseHeader: {
        status: 0
      }
    };

    it('should return listing info with number and listings', async() => {
      sinon.stub(listing, 'search').callsFake(() => baseResponse);
      const listingService = new ListingService(listing);
      const result = await listingService.getListings('6000011');
      listing.search.restore();
      expect(result).to.deep.equal(
        {
          number: 1,
          listings: [{name: 'listing'}]
        }
      );
    });

    it('should throw error when status is not 0', async() => {
      const failReponse = Object.assign(baseResponse, {responseHeader: {status: 1}});
      sinon.stub(listing, 'search').callsFake(() => failReponse);
      const listingService = new ListingService(listing);
      expect(listingService.getListings('6000011')).to.eventually
        .be.rejectedWith('Solr search error!').and.be.an.instanceOf(Error);
    });
  });
});
