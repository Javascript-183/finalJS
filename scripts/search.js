document.getElementById("searchInput").addEventListener("input", function() {
    const searchText = this.value.trim().toLowerCase();
    const sections = document.querySelectorAll(".searchContent");

    sections.forEach(section => {
        const cityName = section.querySelector("h2.city_names").textContent.toLowerCase();
        const shortText = section.querySelector(".shortText").textContent.toLowerCase();
        const fullText = section.querySelector(".fullText").textContent.toLowerCase();

        const hasMatch = cityName.includes(searchText) || 
                        shortText.includes(searchText) || 
                        fullText.includes(searchText);

        section.style.display = hasMatch ? 'block' : 'none';

        // ხაზგასმა, თუ მოიძებნა შედეგი
        if (hasMatch) {
            const highlightedText = fullText.replace(new RegExp(searchText, 'gi'), `<mark>${searchText}</mark>`);
            section.querySelector(".fullText").innerHTML = highlightedText;
        }
    });

    const noResults = document.getElementById("noResults");
    noResults.style.display = sections.length > 0 && !hasResults ? 'block' : 'none';
});

