import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nConfig from './config';
import store from '../store';

Vue.use(VueI18n);
const languageKeys = Object.keys(i18nConfig.languages);

const translations = {};
for (let i = 0; i < languageKeys.length; i++) {
	const langFile = require(`./lang/${languageKeys[i]}.lang.json`);
	translations[languageKeys[i]] = langFile;
}

export default new VueI18n({
	locale: store.getters.currentLanguage || i18nConfig.defaultLocale,
	fallbackLocale: i18nConfig.defaultLocale,
	messages: translations
});
