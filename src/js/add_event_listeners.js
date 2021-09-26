document.querySelectorAll('.tooltip_wrapper').forEach(tooltip_elem => {
    tooltip_elem.addEventListener('mouseover', evt => {
        tooltip_elem.firstElementChild.style.display = 'block';
        // tooltip_elem.style.border = '1px solid grey';
    })

    tooltip_elem.addEventListener('mouseout', evt => {
        tooltip_elem.firstElementChild.style.display = 'none';
        // tooltip_elem.style.border = '1px solid black';
    })

    tooltip_elem.addEventListener('onfocus', evt => {
        tooltip_elem.firstElementChild.style.display = 'block';
        // tooltip_elem.style.border = '1px solid grey';
    })

    tooltip_elem.addEventListener('onblur', evt => {
        tooltip_elem.firstElementChild.style.display = 'none';
        // tooltip_elem.style.border = '1px solid black';
    })
})

document.querySelectorAll('.accordion').forEach(accordion_elem => {
    accordion_elem.addEventListener('click', evt => {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
})