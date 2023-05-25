import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  saleDate: DS.attr('date'),
  client: DS.belongsTo('i-i-s-super-sales-client', { inverse: null, async: false }),
  saleItem: DS.hasMany('i-i-s-super-sales-sale-item', { inverse: 'sale', async: false })
});

export let ValidationRules = {
  saleDate: {
    descriptionKey: 'models.i-i-s-super-sales-sale.validations.saleDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-super-sales-sale.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  saleItem: {
    descriptionKey: 'models.i-i-s-super-sales-sale.validations.saleItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SaleE', 'i-i-s-super-sales-sale', {
    saleDate: attr('Дата продажи', { index: 0 }),
    client: belongsTo('i-i-s-super-sales-client', 'Клиент', {
      name: attr('Клиент', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    saleItem: hasMany('i-i-s-super-sales-sale-item', 'Товарная позиция', {
      amount: attr('Количество', { index: 0 }),
      product: belongsTo('i-i-s-super-sales-product', 'Товар', {
        name: attr('Товар', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('SaleL', 'i-i-s-super-sales-sale', {
    saleDate: attr('Дата продажи', { index: 0 }),
    client: belongsTo('i-i-s-super-sales-client', 'Клиент', {
      name: attr('Клиент', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
