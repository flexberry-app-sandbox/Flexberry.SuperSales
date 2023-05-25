import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSuperSalesClientLForm from './forms/i-i-s-super-sales-client-l';
import IISSuperSalesProductLForm from './forms/i-i-s-super-sales-product-l';
import IISSuperSalesSaleLForm from './forms/i-i-s-super-sales-sale-l';
import IISSuperSalesClientEForm from './forms/i-i-s-super-sales-client-e';
import IISSuperSalesProductEForm from './forms/i-i-s-super-sales-product-e';
import IISSuperSalesSaleEForm from './forms/i-i-s-super-sales-sale-e';
import IISSuperSalesClientModel from './models/i-i-s-super-sales-client';
import IISSuperSalesProductModel from './models/i-i-s-super-sales-product';
import IISSuperSalesSaleItemModel from './models/i-i-s-super-sales-sale-item';
import IISSuperSalesSaleModel from './models/i-i-s-super-sales-sale';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-super-sales-client': IISSuperSalesClientModel,
    'i-i-s-super-sales-product': IISSuperSalesProductModel,
    'i-i-s-super-sales-sale-item': IISSuperSalesSaleItemModel,
    'i-i-s-super-sales-sale': IISSuperSalesSaleModel
  },

  'application-name': 'Super sales',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Super sales',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Super sales',
          title: 'Super sales'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'супер-продажи': {
          caption: 'Супер продажи',
          title: 'Супер продажи',
          'i-i-s-super-sales-sale-l': {
            caption: 'Продажи',
            title: ''
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-super-sales-client-l': {
              caption: 'Клиенты',
              title: 'Client'
            },
            'i-i-s-super-sales-product-l': {
              caption: 'Товары',
              title: 'Product'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-super-sales-client-l': IISSuperSalesClientLForm,
    'i-i-s-super-sales-product-l': IISSuperSalesProductLForm,
    'i-i-s-super-sales-sale-l': IISSuperSalesSaleLForm,
    'i-i-s-super-sales-client-e': IISSuperSalesClientEForm,
    'i-i-s-super-sales-product-e': IISSuperSalesProductEForm,
    'i-i-s-super-sales-sale-e': IISSuperSalesSaleEForm
  },

});

export default translations;
