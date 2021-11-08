import Vue from 'vue';
import App from './App';
import store from './store';
import i18n from './i18n';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development')
	new Vue({
		store,
		i18n,
		render: h => h(App)
	}).$mount('#app');
