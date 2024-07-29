document.addEventListener('DOMContentLoaded', function() {
  const grid = document.querySelector('.gallery-grid');
  const items = grid.querySelectorAll('.gallery-item');

  function resizeGridItem(item) {
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('img').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  function resizeAllGridItems() {
    items.forEach(resizeGridItem);
  }

  // Initial resize
  resizeAllGridItems();

  // Resize on window resize
  window.addEventListener('resize', resizeAllGridItems);

  // Resize when images finish loading
  items.forEach(item => {
    item.querySelector('img').addEventListener('load', () => {
      resizeGridItem(item);
    });
  });
});