function showEvents() {
    document.querySelector('.filter-btn.active').classList.remove('active');
    document.querySelector('.filter-btn:nth-child(1)').classList.add('active');
    // Add event handling logic if required.
}

function showCalendar() {
    document.querySelector('.filter-btn.active').classList.remove('active');
    document.querySelector('.filter-btn:nth-child(2)').classList.add('active');
    // Add calendar display logic if required.
}
