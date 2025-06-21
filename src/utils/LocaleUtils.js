import _ from 'lodash';
import Locale from '../locale';

export const localeGet = (locale, component, path) => _.get(Locale, `${locale}.${component}.${path}`);

const defaultLocale = 'en-US';

export const getLocaleType = (props) => {
  const pathname = (props && props.location && props.location.pathname) || '/';
  const routes = pathname.split('/');
  if (routes.length < 2) {
    return defaultLocale;
  }
  const availableLocales = Object.keys(Locale);
  return routes.find((route) => availableLocales.includes(route)) || defaultLocale;
};

export const parseLocalObj = (locale, value) => {
  if (!value) {
    return '';
  }

  if (_.isObject(value)) {
    return _.get(value, `${locale}`, '') || _.get(value, 'en-US', '');
  }

  return value || '';
};
