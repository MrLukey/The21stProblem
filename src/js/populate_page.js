async function populate_page()
{
    const all_ref_data = await getJSONViaAJAX('assets/references.json').then(ref => ref['references']);
    all_ref_data.forEach(ref => {
        ref['has_image'] = (ref['image_url'] !== '');
    })

    const hidden_ref_hb_template = await getTextViaAJAX('src/js/templates/reference_tooltip.hbs');
    const ref_tooltip_template = Handlebars.compile(hidden_ref_hb_template);
    populate_reference_tooltips(all_ref_data, ref_tooltip_template);

    const full_ref_hb_template = await getTextViaAJAX('src/js/templates/full_reference.hbs');
    const full_ref_template = Handlebars.compile(full_ref_hb_template);
    populate_references(all_ref_data, full_ref_template);

    const all_info_graphic_data = await getJSONViaAJAX('assets/info_graphics.json')
        .then(ig => ig['info_graphics'])
    all_info_graphic_data.forEach(info_graphic_data => {
        info_graphic_data['has_extra_info'] = (info_graphic_data['extra_info'] !== '');
    })
    console.log(all_info_graphic_data);
    const info_graphic_hb_template = await getTextViaAJAX('src/js/templates/info_graphic.hbs');
    const info_graphic_template = Handlebars.compile(info_graphic_hb_template);
    populate_info_graphics(all_info_graphic_data, info_graphic_template);

    fill_link_elements();
}

populate_page().catch();

