<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="{{asset('/images/XInicio.png')}}" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link  rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    @inertiaHead
    @routes
  </head>
  <body>
    @inertia
  </body>
</html>