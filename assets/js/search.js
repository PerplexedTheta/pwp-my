---
---
(function () {
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1),
            vars = query.split("&");

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");

            if (pair[0] === variable) {
                return decodeURIComponent(pair[1].replace(/\+/g, '%20')).trim();
            }
        }
    }

    function displaySearchResults(results, query) {
        var searchResultsEl = document.getElementById("search-results"),
            searchProcessEl = document.getElementById("search-process");

        if (results.length) {
            var resultsHTML = "";
            results.forEach(function (result) {
                var post = window.data[result.ref];

                resultsHTML += "<div class=\"search-entry\">";
                resultsHTML += "<div class=\"search-headline\">";
				resultsHTML += "<h4><a href=\"" + post.url.trim() + "\">📬&nbsp;" + post.title + "</a></h4>";
                resultsHTML += "<p class=\"search-date\">📅&nbsp;" + post.date +"</p>";
				resultsHTML += "</div>";
				resultsHTML += "<div class=\"search-abstract\">";
				resultsHTML += "<div class=\"search-frontmatter\">";
				resultsHTML += "<small class=\"search-location\">🔖&nbsp;" + post.location + "</small>";
				resultsHTML += "</div>";
				resultsHTML += "<div class=\"search-frontmatter-right\">";
				resultsHTML += "<small class=\"search-wordcount\">" + post.wordcount + "</small>";
				resultsHTML += "</div>";
				resultsHTML += "</div>";
				resultsHTML += "<div class=\"search-desc\">";
				resultsHTML += "<p class=\"search-excerpt\">" + post.description + " <a href=\"" + post.url.trim() + "\">More &raquo;</a></p>";
				resultsHTML += "</div>";
                resultsHTML += "</div>";
            });

            searchResultsEl.innerHTML = resultsHTML;
            searchProcessEl.innerText = "Showing";
        } else {
            searchResultsEl.style.display = "none";
            searchProcessEl.innerText = "No";
        }
    }

    window.index = lunr(function () {
        this.field("id");
        this.field("title");
        this.field("description");
        this.field("category");
        this.field("url");
    });

    var query = decodeURIComponent((getQueryVariable("q") || "").replace(/\+/g, "%20")),
        searchQueryContainerEl = document.getElementById("search-query-container"),
        searchQueryEl = document.getElementById("search-query"),
        searchInputEl = document.getElementById("search-input");

    searchInputEl.value = query;
    searchQueryEl.innerText = query;
    searchQueryContainerEl.style.display = "inline";

    for (var key in window.data) {
        window.index.add(window.data[key]);
    }

    displaySearchResults(window.index.search(query), query); // Hand the results off to be displayed
})();
