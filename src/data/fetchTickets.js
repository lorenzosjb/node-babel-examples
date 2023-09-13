import fetch from 'node-fetch';

const apiKey = "AUYKluTgrjsRnNtwqm2ebkse9MXoua1T";
const urlTickets = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=*`;
const options = {
    method: 'GET',
};

async function LoadTickets() {
    try {
        const response = await fetch(urlTickets, options);
        const data = await response.json();
        const d = JSON.stringify(data);
        return JSON.parse(d);
    } catch (err) {
        console.log(err)
        return null;
    }
}

export {
    LoadTickets
}
