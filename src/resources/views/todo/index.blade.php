<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta id="_token" value="{{ csrf_token() }}">

        <title>todo</title>
        <style>
        </style>
    </head>

    <body>
        <div> </div>
        <div class="" id="todo">
            <todo :todo_id="1"> </todo>
        </div>
    </body>


<link rel="stylesheet" type="text/css" href="{{ asset('css/semantic.min.css') }}">
<script src="{{asset('js/app.js')}}"></script>
</html>


