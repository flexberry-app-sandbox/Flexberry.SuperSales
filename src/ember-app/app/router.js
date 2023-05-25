import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-super-sales-client-l');
  this.route('i-i-s-super-sales-client-e',
  { path: 'i-i-s-super-sales-client-e/:id' });
  this.route('i-i-s-super-sales-client-e.new',
  { path: 'i-i-s-super-sales-client-e/new' });
  this.route('i-i-s-super-sales-product-l');
  this.route('i-i-s-super-sales-product-e',
  { path: 'i-i-s-super-sales-product-e/:id' });
  this.route('i-i-s-super-sales-product-e.new',
  { path: 'i-i-s-super-sales-product-e/new' });
  this.route('i-i-s-super-sales-sale-l');
  this.route('i-i-s-super-sales-sale-e',
  { path: 'i-i-s-super-sales-sale-e/:id' });
  this.route('i-i-s-super-sales-sale-e.new',
  { path: 'i-i-s-super-sales-sale-e/new' });
});

export default Router;
