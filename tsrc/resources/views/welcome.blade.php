<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta id="_token" value="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            .ui.container {padding:3%}
        </style>
    </head>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/semantic.min.css') }}">
    <body>
        <div align="center" class="ui container" >
                <h3>Who Are We?</h3>
                <img class="ui centered medium circular image "  src="{{url('images/cat.jpg')}}" alt="cat" >
                <h3>We're adventurer</h3>
        </div>
        <div class="ui menu">
            <a class="red item" ></a>
            <a class="orange item active">Home</a>
            <a class="yellow item" href="/todo">Todo</a>
            <a class="olive item">Rere</a>
            <a class="green item">Mimi</a>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>

</html>
