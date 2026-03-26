document.addEventListener("DOMContentLoaded", function() {
    var slug = window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
    if (typeof updateViews === 'function') {
        updateViews(slug);
        getViews(slug).then(function(count) {
            var el = document.getElementById('view-count');
            if (el) el.innerText = count || 0;
        });
    }
});