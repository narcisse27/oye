<?php
/*
Route::get('/', function () {
    return view('Front.landing');
});
*/
Route::get('/', 'PagesController@renderLanding')->name('landing');
Route::get('/contact', 'PagesController@renderContact')->name('contact');
