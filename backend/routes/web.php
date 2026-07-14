<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::fallback(function (Request $request) {
    abort_if($request->is('api/*'), 404);

    return redirect(rtrim(config('app.frontend_url'), '/').'/'.ltrim($request->getRequestUri(), '/'));
});
