<?php

namespace Gregoriohc\LaravelNovaThemeResponsive;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    const CONFIG_PATH = __DIR__ . '/../config/nova-theme-responsive.php';

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
            Nova::provideToScript([
                'ntr' => config('nova-theme-responsive')
            ]);
        });

        $this->publishes([
            self::CONFIG_PATH => config_path('nova-theme-responsive.php'),
        ], 'config');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            self::CONFIG_PATH,
            'nova-theme-responsive'
        );
    }
}
