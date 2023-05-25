import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Super sales',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Super sales',
          title: 'Super sales'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
