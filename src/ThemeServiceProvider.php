<?php

namespace Gregoriohc\LaravelNovaThemeResponsive;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::style('laravel-nova-theme-responsive', __DIR__.'/../resources/css/theme.css');
            Nova::script('laravel-nova-theme-responsive', __DIR__.'/../resources/js/theme.js');
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
