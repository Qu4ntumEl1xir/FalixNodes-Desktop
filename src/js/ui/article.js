function bringInArticle() {
    setTimeout(() => {
        document.getElementById('article-view').style.right = '0%';
        document.getElementById('news-back').style.display = 'inherit';
    }, 2000);
}

function closeArticle() {
    document.getElementById('article-view').style.right = '-100%';
    document.getElementById('news-back').style.display = 'none';
}