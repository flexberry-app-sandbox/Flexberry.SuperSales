import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-super-sales-sale-item', 'Unit | Model | i-i-s-super-sales-sale-item', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-super-sales-client',
    'model:i-i-s-super-sales-product',
    'model:i-i-s-super-sales-sale-item',
    'model:i-i-s-super-sales-sale',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
