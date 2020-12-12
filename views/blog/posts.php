<?php $view->script('posts', 'blog:app/bundle/post.js', 'vue') ?>
<?php foreach ($posts as $post) : ?>
    <div style="margin:50px 0">
        <header class="post-header">
            <?php if($image = $post->get('image.src')): ?>
                <img src="<?= $image ?>" width="100%" alt="<?= $post->get('image.src') ?: $post->title ?>">
            <?php endif ?>
            <span class="post-meta">
            <?= __('%date%', ['%date%' => '<time datetime="'.$post->date->format(\DateTime::ATOM).'" v-cloak>{{ "'.$post->date->format(\DateTime::ATOM).'" | date("longDate") }}</time>' ]) ?>
            </span>
            <h2 class="post-title"><a href="<?= $view->url('@blog/id', ['id' => $post->id]) ?>"><?= $post->title ?></a></h2>
        </header>
        <section class="post-excerpt">
            <?= $post->excerpt ?: $post->content ?>
            <?php if (isset($post->readmore) && $post->readmore || $post->excerpt) : ?>
                <div style="margin-top:20px">
                    <a href="<?= $view->url('@blog/id', ['id' => $post->id]) ?>"><?= __('Read more') ?></a>
                </div>
            <?php endif ?>
        </section>
    </div>
<?php endforeach ?>

<?php

$range     = 3;
$total     = intval($total);
$page      = intval($page);
$pageIndex = $page - 1;

?>

<?php if ($total > 1) : ?>
    <ul class="tm-pagination">
        <?php for($i=1;$i<=$total;$i++): ?>
            <?php if ($i <= ($pageIndex+$range) && $i >= ($pageIndex-$range)): ?>

                <?php if ($i == $page): ?>
                    <li class="uk-active"><span><?=$i?></span></li>
                <?php else: ?>
                    <li>
                        <a href="<?= $view->url('@blog/page', ['page' => $i]) ?>"><?=$i?></a>
                    </li>
                <?php endif; ?>

            <?php elseif($i==1): ?>

                <li>
                    <a href="<?= $view->url('@blog/page', ['page' => 1]) ?>">1</a>
                </li>
                <li><span>...</span></li>

            <?php elseif($i==$total): ?>

                <li><span>...</span></li>
                <li>
                    <a href="<?= $view->url('@blog/page', ['page' => $total]) ?>"><?=$total?></a>
                </li>

            <?php endif; ?>
        <?php endfor; ?>


    </ul>
<?php endif ?>
