<?php if ($root->getDepth() === 0) : ?>
<ul class="nav">
<?php endif ?>

    <?php foreach ($root->getChildren() as $node) : ?>
    <li class="nav-home nav-current <?= $node->get('active') ? ' uk-active' : '' ?>" <?= ($root->getDepth() === 0 && $node->hasChildren()) ? '':'' ?>>
        <a href="<?= $node->getUrl() ?>"><?= $node->title ?></a>
    </li>
    <?php endforeach ?>

<?php if ($root->getDepth() === 0) : ?>
</ul>
<?php endif ?>
