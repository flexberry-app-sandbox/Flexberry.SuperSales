import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-super-sales-client', 'Unit | Serializer | i-i-s-super-sales-client', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-super-sales-client',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
