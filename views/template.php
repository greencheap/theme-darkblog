<!DOCTYPE html>
<html lang="<?= $intl->getLocaleTag() ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?= $view->render('head') ?>
        <?php $view->style('theme', 'theme:assets/css/screen.css') ?>
    </head>
    <body class="home-template">
        <?php if($_SERVER['REQUEST_URI'] == '/'): ?>
            <header id="site-head">
                <div class="vertical animated bounceInDown">
                    <div id="site-head-content" class="inner">
                        <a id="blog-logo" href="#"><img src="<?= $view->url()->getStatic($params['avatar_img'] ?: $params['logo']) ?>" alt="<?= $params['name'] ?>"></a>
                        <h1 class="blog-title"><?= $params["name"] ?: $params['title'] ?></h1>
                        <?php if($params["description"]): ?>
                            <h2 class="blog-description" style="font-size:16px"><?= $params["description"] ?></h2>
                        <?php endif ?>
                        <?php if($params["socials"]): ?>
                            <ul class="tm-pagination">
                                <?php foreach($params["socials"] as $social): ?>
                                    <li>
                                        <a href="<?= $social['uri'] ?>" style="color:#a6eeec;font-size:16px" target="_blank"><?= $social['title'] ?></a>
                                    </li>
                                <?php endforeach ?>
                            </ul>
                        <?php endif ?>
                        
                        <nav class="site-nav">
                            <div class="site-nav-left">
                                <?= $view->menu('main' , 'menu.php') ?>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        <?php endif ?>
        <main class="content" role="main">
            <article class="post tag-getting-started no-image">
                <?php if($_SERVER['REQUEST_URI'] != '/'): ?>
                    <header class="post-header">
                        <a id="blog-logo" href="#"><img src="<?= $view->url()->getStatic($params['avatar_img'] ?: $params['logo']) ?>" alt="<?= $params['name'] ?>"></a>
                        <div class="inner">
                            <nav class="site-nav">
                                <div class="site-nav-left">
                                    <?= $view->menu('main' , 'menu.php') ?>
                                </div>
                            </nav>
                        </div>
                    </header>
                <?php endif ?>
                <?= $view->render('content') ?>
            </article>
        </main>
        <footer class="site-footer">
            <div class="inner">
                <section class="copyright">♥ Made by <a href="https://greencheap.net" target="_blank">GreenCheap</a> with love and caffeine.</section>
                <section class="poweredby">Proudly designed with <a class="icon-ghost" href="http://ghost.org" target="_blank"><span class="icon-ghost-text">Ghost</span></a> in <a href="https://github.com/mityalebedev/The-Shell" target="_blank">The Shell</a> theme.</section>
            </div>
        </footer>
        <?= $view->render('footer') ?>
        <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    </body>
</html>