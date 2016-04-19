# Company Info for Pagekit
Easily change your company info

This Pagekit extension allows you to easyli change your company info, like email adresse, phone number and so on.


## Installation
This extentions is available on the built-in marketplace in your Pagekit installation.
It's the easiest way to install and update the extension.

Here's a link to the marketplace: https://pagekit.com/marketplace/package/roboto/companyinfo

## Usage
To edit the company info, go to `Site -> Settings -> Company Info` in the Pagekit admin area.

## Documentation
To access the saved data, you just echo the `$params` array in your theme.
Since `$params` is an array, you have to specify the key of the data you want.

The available keys are:

data | key | example
----|---------|------|------
Email | `company_email` |  `$params['company_email']`
Phone Number | `company_phone` |  `$params['company_phone']`
VAT | `company_vat` |  `$params['company_vat']`
Adress | `company_address` |  `$params['company_address']`
Facebook | `company_facebook` |  `$params['company_facebook']`
Twitter | `company_twitter` |  `$params['company_twitter']`
Google Plus | `company_google` |  `$params['company_google']`
YouTube | `company_youtube` |  `$params['company_youtube']`
GitHub | `company_github` |  `$params['company_github']`
