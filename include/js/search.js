---
---

document.addEventListener("DOMContentLoaded", event => {
    window.index = lunr(function () {
        this.field("id");
        this.field("title");
        this.field("location");
        this.field("description");
        this.field("wordcount");
        this.field("date");
        this.field("url");
    });

    const query = decodeURIComponent((getQueryVariable("q") || "").replace(/\+/g, "%20"));
    const searchQueryContainerEl = document.getElementById("search-query-container");
    const searchQueryEl = document.getElementById("search-query");
    const searchInputEl = document.getElementById("search-input");

    searchInputEl.value = query;
    searchQueryEl.innerText = query;
    searchQueryContainerEl.style.display = "inline";

    for (const key in window.data) {
        window.index.add(window.data[key]);
    }

    displaySearchResults(window.index.search(query), query); // Hand the results off to be displayed
    titleHandler(); // Set the page titles / headers

});

const getQueryVariable = variable => {
    const query = window.location.search.substring(1),
        vars = query.split("&");

    for (const i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");

        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, '%20')).trim();
        }
    }
};

const displaySearchResults = (results, query) => {
    const searchResultsEl = document.getElementById("search-results"),
        searchProcessEl = document.getElementById("search-process"),
        ramblingsUrl = '/ramblings/';

    if (results.length) {
        let resultsHTML = "";
        results.forEach(result => {
            const post = window.data[result.ref];

            resultsHTML += "<div class=\"search-result\">";
            resultsHTML += "<div class=\"search-headline\">";
            resultsHTML += "<h4>&#128236;&nbsp;<a href=\"" + post.url.trim() + "\">" + post.title + "</a></h4>";
            resultsHTML += "<small class=\"search-date\">&#128197;&nbsp;" + post.date + "</small>";
            resultsHTML += "</div>";
            resultsHTML += "<div class=\"search-abstract\">";
            resultsHTML += "<div class=\"search-frontmatter\">";
            resultsHTML += "<small class=\"search-location\">&#128205;&nbsp;" + post.location + "</small>";
            resultsHTML += "</div>";
            resultsHTML += "<div class=\"search-frontmatter-right\">";
            resultsHTML += "<small class=\"search-wordcount\">" + post.wordcount + "</small>";
            resultsHTML += "</div>";
            resultsHTML += "</div>";
            resultsHTML += "<div class=\"search-desc\">";
            resultsHTML += "<p class=\"search-excerpt\">" + post.excerpt + " <a href=\"" + post.url.trim() + "\">More &raquo;</a></p>";
            resultsHTML += "</div>";
            resultsHTML += "</div>";
        });

        searchResultsEl.innerHTML = resultsHTML;
        searchProcessEl.innerText = "Showing";
    } else {
        searchResultsEl.style.display = "none";
        searchProcessEl.innerText = "No";
        // redirect to ramblings
        if (query == '') window.location.href = ramblingsUrl;
    }
};

const titleHandler = (() => {
    const title = document.getElementsByTagName('title')[0];
    const content = document.getElementById('content');
    const contentFirstSpan = content.getElementsByTagName('span')[0];

    title.innerText = title.innerText + window.location.search;
    contentFirstSpan.innerText = window.location.pathname + window.location.search;

    return 0;
});
