import {
  defineNamespace,
  defineProjections,
  Model as SaleItemMixin
} from '../mixins/regenerated/models/i-i-s-super-sales-sale-item';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(SaleItemMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
