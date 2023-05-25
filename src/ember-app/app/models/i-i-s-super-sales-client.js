import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ClientMixin
} from '../mixins/regenerated/models/i-i-s-super-sales-client';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ClientMixin, Validations, {
});

defineProjections(Model);

export default Model;
