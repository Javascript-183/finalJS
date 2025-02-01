const filterSelect = document.getElementById('cityFilter');
const sections = document.querySelectorAll('.searchContent');

filterSelect.addEventListener('change', () => {
    const selectedFilter = filterSelect.value;

    sections.forEach(section => {
        const cityName = section.className.split(' ').includes(selectedFilter.toLowerCase());
        section.style.display = cityName || selectedFilter === 'ყველა ქალაქი' ? 'block' : 'none';
    });
});