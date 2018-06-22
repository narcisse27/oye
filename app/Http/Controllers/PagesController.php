<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function renderLanding(){
        return view('Front.landing');
    }

    public function renderContact(){
        return view('Front.contact');
    }

}
