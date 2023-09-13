import { LoadTickets } from "./data/fetchTickets.js";

const data = await LoadTickets();
console.log(data);
