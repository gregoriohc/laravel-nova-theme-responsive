# Laravel Nova Responsive Theme

[![Latest Version on Packagist](https://img.shields.io/packagist/v/gregoriohc/laravel-nova-theme-responsive.svg?style=flat-square)](https://packagist.org/packages/gregoriohc/laravel-nova-theme-responsive)
[![Total Downloads](https://img.shields.io/packagist/dt/gregoriohc/laravel-nova-theme-responsive.svg?style=flat-square)](https://packagist.org/packages/gregoriohc/laravel-nova-theme-responsive)

A simple Laravel Nova theme that add responsiveness to the site.

It can be used as is, or as a base theme to your own ones.

## Installation

You can install the nova theme into a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require gregoriohc/laravel-nova-theme-responsive
```

This theme include some config based options. To use them, first publish the config file:

```bash
php artisan vendor:publish --provider="Gregoriohc\LaravelNovaThemeResponsive\ThemeServiceProvider"
```

And then you can configure the options editing the `config/nova-theme-responsive.php` file.

## Screenshots

Dashboard | Menu | Index
------------ | ------------- | -------------
![nova-responsive-dashboard-view](https://user-images.githubusercontent.com/29180903/45772680-5ff51600-bc16-11e8-85c8-da33d9a6fea5.png) | ![nova-responsive-index-menu-view](https://user-images.githubusercontent.com/29180903/45772682-608dac80-bc16-11e8-9b15-b69131c2f02a.png) | ![nova-responsive-index-view](https://user-images.githubusercontent.com/29180903/45772683-608dac80-bc16-11e8-9266-404617968c3f.png)

Detail | Create | Delete
------------ | ------------- | -------------
 ![nova-responsive-detail-view](https://user-images.githubusercontent.com/29180903/45772677-5ff51600-bc16-11e8-90e9-17e6025f8998.png) | ![nova-responsive-create-view](https://user-images.githubusercontent.com/29180903/45772681-5ff51600-bc16-11e8-84c9-c0f61890bfed.png)|  ![nova-responsive-delete-view](https://user-images.githubusercontent.com/29180903/45772679-5ff51600-bc16-11e8-93d5-cd2a88b7e54a.png)


## Credits

- [Gregorio Hernández Caso](https://github.com/gregoriohc)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
