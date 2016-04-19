<template>

	<div class="uk-margin uk-flex uk-flex-space-between uk-flex-wrap" data-uk-margin>
		<div data-uk-margin>
			<h2 class="uk-margin-remove">{{ 'Company Info' | trans }}</h2>
		</div>
		<div data-uk-margin>
			<button class="uk-button uk-button-primary" type="submit">{{ 'Save' | trans }}</button>
		</div>
	</div>

	<ul class="uk-tab" data-uk-tab="{connect:'#company_info'}">
		<li><a href="">{{ 'Basic' | trans }}</a></li>
		<li><a href="">{{ 'Social' | trans }}</a></li>
	</ul>

	<ul id="company_info" class="uk-switcher uk-margin">
		<!-- BASIC -->
		<li>
			<div class="uk-form uk-form-horizontal">
				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'Email' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-email" class="uk-form-width-large" name="company-email" type="email" v-model="config.company_email">
						<p class="uk-form-help-block">{{ 'Company Email.' | trans }}</p>
					</div>
				</div>

				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'Phone' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-phone" class="uk-form-width-large" name="company-phone" type="number" v-model="config.company_phone">
						<p class="uk-form-help-block">{{ 'Company Phone Number.' | trans }}</p>
					</div>
				</div>

				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'VAT' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-vat" class="uk-form-width-large" name="company-vat" type="number" v-model="config.company_vat">
						<p class="uk-form-help-block">{{ 'Company VAT.' | trans }}</p>
					</div>
				</div>

				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'Address' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-address" class="uk-form-width-large" name="company-address" type="text" v-model="config.company_address">
						<p class="uk-form-help-block">{{ 'Company Address.' | trans }}</p>
					</div>
				</div>
			</div>
		</li>

		<!-- SOCIAL -->
		<li>
			<p>{{ 'There should only be links in every field. Example: http://facebook.com/mycompany' | trans }}</p>
			<div class="uk-form uk-form-horizontal">
				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'Facebook' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-facebook" class="uk-form-width-large" name="company-facebook" type="text" v-model="config.company_facebook">
						<p class="uk-form-help-block">{{ 'Company ' | trans }}Facebook-{{ 'page' | trans }}.</p>
					</div>
				</div>

				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'Twitter' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-twitter" class="uk-form-width-large" name="company-twitter" type="text" v-model="config.company_twitter">
						<p class="uk-form-help-block">{{ 'Company ' | trans }}Twitter.</p>
					</div>
				</div>

				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'Google+' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-google" class="uk-form-width-large" name="company-google" type="text" v-model="config.company_google">
						<p class="uk-form-help-block">{{ 'Company ' | trans }}Google+.</p>
					</div>
				</div>

				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'YouTube' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-youtube" class="uk-form-width-large" name="company-youtube" type="text" v-model="config.company_youtube">
						<p class="uk-form-help-block">{{ 'Company ' | trans }}YouTube.</p>
					</div>
				</div>

				<div class="uk-form-row">
					<label class="uk-form-label">{{ 'GitHub' | trans }}</label>
					<div class="uk-form-controls uk-form-width-large">
						<input id="company-github" class="uk-form-width-large" name="company-github" type="text" v-model="config.company_github">
						<p class="uk-form-help-block">{{ 'Company ' | trans }}GitHub.</p>
					</div>
				</div>
			</div>
		</li>
	</ul>

</template>

<script>

	module.exports = {

		section: {
			label: 'Company Info',
			icon: 'pk-icon-large-brush',
			priority: 14
		},

		data: function () {
			return _.extend({config: {}}, window.$theme);
		},

		events: {

			save: function() {

				this.$http.post('admin/system/settings/config', {name: this.name, config: this.config}).catch(function (res) {
					this.$notify(res.data, 'danger');
				});

			}

		}

	};

	window.Site.components['company-info'] = module.exports;

</script>
