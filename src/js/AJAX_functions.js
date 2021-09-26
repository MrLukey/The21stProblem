async function getTextViaAJAX(path)
{
    return await fetch(path, {method: 'get'}).then(data => data.text());
}

async function getJSONViaAJAX(path)
{
    return await fetch(path, {method: 'get'}).then(data => data.json());
}
