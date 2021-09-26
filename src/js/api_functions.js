

function get_base_url(is_live)
{
    if(is_live) {
        return 'https://path/to/live/website'
    } else {
        return 'http://localhost:8080/'
    }
}



async function get_data(api_path)
{
    let data = await fetch(getBaseUrl() + api_path);
    return data.json();
}