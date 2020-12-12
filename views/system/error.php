<!DOCTYPE html>
<html>
    <head>
        <title><?= __('Error') ?></title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex,nofollow">
        <?= $view->render('head') ?>
    </head>
    <body style="display: flex;height: 100vh;justify-content: center;align-items: center;background: #1c212b;color: #a0add5;font-size: 26px;letter-spacing: 5px;font-family: helvetica;text-transform: uppercase;">
        <p>
            404, <?= $title ?>
        </p>
    </body>
</html>