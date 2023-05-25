import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.супер-продажи.caption'),
          title: i18n.t('forms.application.sitemap.супер-продажи.title'),
          children: [{
            link: 'i-i-s-super-sales-sale-l',
            caption: i18n.t('forms.application.sitemap.супер-продажи.i-i-s-super-sales-sale-l.caption'),
            title: i18n.t('forms.application.sitemap.супер-продажи.i-i-s-super-sales-sale-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.супер-продажи.справочники.caption'),
            title: i18n.t('forms.application.sitemap.супер-продажи.справочники.title'),
            children: [{
              link: 'i-i-s-super-sales-client-l',
              caption: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-super-sales-client-l.caption'),
              title: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-super-sales-client-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-super-sales-product-l',
              caption: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-super-sales-product-l.caption'),
              title: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-super-sales-product-l.title'),
              icon: 'phone',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})