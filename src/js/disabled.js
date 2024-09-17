document.addEventListener('DOMContentLoaded', ()=> {

    const disable = document.querySelector(".disabled");
    const tooltip = document.getElementById('tooltip');

    disable.addEventListener('mouseenter', (e) => {
        tooltip.style.display = 'block';
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

    disable.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    disable.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

});