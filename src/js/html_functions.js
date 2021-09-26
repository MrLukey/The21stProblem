
function populate_references(all_ref_data, ref_template) {
    all_ref_data.forEach(reference => {
        const ref_element = document.querySelector('#full_ref_' + reference['ref_no']);
        ref_element.classList.add('full_ref_wrapper')
        ref_element.innerHTML += ref_template(reference);
        ref_element.href = reference['link'];
        ref_element.target = '_blank';
    })
}

function populate_reference_tooltips(all_ref_data, ref_tooltip_template) {
    document.querySelectorAll('.ref_tooltip_wrapper').forEach(ref_element => {
        const ref_data = all_ref_data.filter(reference => {
            return reference['ref_no'] === parseInt(ref_element.dataset.ref_no);
        })[0];
        ref_data['summary'] = ref_data['summary'] === '' ? ref_data['citation'] : ref_data['summary'];
        ref_element.innerHTML += ref_tooltip_template(ref_data);
        ref_element.href = ref_data['link'];
        ref_element.target = '_blank';
    })
}

function populate_info_graphics(all_info_graphic_data, info_template) {
    all_info_graphic_data.forEach(info_graphic_data => {
        const info_element = document.querySelector('#info_graphic_' + info_graphic_data['image_no']);
        if (info_element){
            info_element.innerHTML += info_template(info_graphic_data);
        }
    })
}

function fill_link_elements()
{
    document.querySelectorAll('.info_link').forEach(info_link => {
        info_link.href = '#info_' + info_link.dataset.info_link_no;
    })
}