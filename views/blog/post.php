<?php $view->script('post', 'blog:app/bundle/post.js', 'vue') ?>

<header class="post-header">
    <?php if($image = $post->get('image.src')): ?>
        <img src="<?= $image ?>" width="100%" alt="<?= $post->get('image.src') ?: $post->title ?>">
    <?php endif ?>
    <span class="post-meta">
        <?= __('%date%', ['%date%' => '<time datetime="'.$post->date->format(\DateTime::ATOM).'" v-cloak>{{ "'.$post->date->format(\DateTime::ATOM).'" | date("longDate") }}</time>' ]) ?>
    </span>
    <h2 class="post-title"><a href="<?= $view->url('@blog/id', ['id' => $post->id]) ?>"><?= $post->title ?></a></h2>
</header>
<section class="post-content">
    <div>
        <?= $post->content ?>
    </div>
       
    <?php if($params['disqus_code']): ?>
        <?= $params['disqus_code'] ?>
    <?php endif ?>
</section>