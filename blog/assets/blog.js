(function () {
  "use strict";

  var posts = [];
  var activeTag = "全部";
  var query = "";
  var list = document.getElementById("post-list");
  var count = document.getElementById("result-count");
  var filters = document.getElementById("tag-filters");
  var search = document.getElementById("post-search");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
    });
  }

  function postUrl(post) {
    return "posts/" + encodeURIComponent(post.slug) + "/";
  }

  function renderFilters() {
    var tags = ["全部"];
    posts.forEach(function (post) {
      post.tags.forEach(function (tag) {
        if (tags.indexOf(tag) === -1) tags.push(tag);
      });
    });
    filters.innerHTML = tags.map(function (tag) {
      var active = tag === activeTag;
      return '<button class="tag-filter' + (active ? " active" : "") + '" type="button" data-tag="' + escapeHtml(tag) + '" aria-pressed="' + active + '">' + escapeHtml(tag) + "</button>";
    }).join("");
  }

  function renderPosts() {
    var normalized = query.trim().toLowerCase();
    var visible = posts.filter(function (post) {
      var matchesTag = activeTag === "全部" || post.tags.indexOf(activeTag) !== -1;
      var searchable = [post.title, post.summary].concat(post.tags).join(" ").toLowerCase();
      return matchesTag && (!normalized || searchable.indexOf(normalized) !== -1);
    });

    count.textContent = visible.length + " 篇调研";
    if (!visible.length) {
      list.innerHTML = '<p class="empty">没有找到匹配的调研。</p>';
      return;
    }

    list.innerHTML = visible.map(function (post) {
      var url = postUrl(post);
      return '<article class="post-card">' +
        '<div class="post-main">' +
          '<div class="post-meta"><span class="status">' + escapeHtml(post.status) + '</span><time datetime="' + escapeHtml(post.updated) + '">更新于 ' + escapeHtml(post.updated) + '</time><span>' + escapeHtml(post.paperCount) + ' 篇论文</span><span>' + escapeHtml(post.familyCount) + ' 类方法</span><span>' + escapeHtml(post.readingTime) + '</span></div>' +
          '<h3 class="post-title"><a href="' + url + '">' + escapeHtml(post.title) + '</a></h3>' +
          '<p class="post-summary">' + escapeHtml(post.summary) + '</p>' +
          '<div class="post-footer"><div class="tags">' + post.tags.map(function (tag) { return '<span class="tag">' + escapeHtml(tag) + '</span>'; }).join("") + '</div>' +
          '<a class="open-link" href="' + url + '">阅读调研</a></div>' +
        '</div>' +
      '</article>';
    }).join("");
  }

  filters.addEventListener("click", function (event) {
    var button = event.target.closest("[data-tag]");
    if (!button) return;
    activeTag = button.dataset.tag;
    renderFilters();
    renderPosts();
  });

  search.addEventListener("input", function () {
    query = search.value;
    renderPosts();
  });

  fetch("posts.json", { cache: "no-cache" })
    .then(function (response) {
      if (!response.ok) throw new Error("Failed to load posts");
      return response.json();
    })
    .then(function (data) {
      posts = data.sort(function (a, b) { return b.updated.localeCompare(a.updated); });
      renderFilters();
      renderPosts();
    })
    .catch(function () {
      list.innerHTML = '<p class="empty">调研目录暂时无法加载，请稍后重试。</p>';
      count.textContent = "";
    });
})();
