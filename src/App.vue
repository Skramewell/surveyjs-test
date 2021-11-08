<style lang="scss">
</style>

<template>
	<div id="app"
		ref="app">
		<survey-creator></survey-creator>
	</div>
</template>

<script>
import './main';
import store from '@/store';
import SurveyCreator from './components/SurveyCreator';

export default {
	store,

	name: 'surveyjs-test-app',

	components: { SurveyCreator }
};
</script>