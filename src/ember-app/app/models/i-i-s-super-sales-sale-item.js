import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as SaleItemMixin
} from '../mixins/regenerated/models/i-i-s-super-sales-sale-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(SaleItemMixin, Validations, {
});

defineProjections(Model);

export default Model;
