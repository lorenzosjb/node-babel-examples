Prueba de acceso api

https://developer-acct.ticketmaster.com/user/42772/apps

lorenzosjb-App
    Consumer Key	AUYKluTgrjsRnNtwqm2ebkse9MXoua1T
    Consumer Secret	d8zYyeLXAnHEn9A7

Search events, attractions, or venues
    https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

https://app.ticketmaster.com/discovery/v2/events.json?apikey=AUYKluTgrjsRnNtwqm2ebkse9MXoua1T


$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=AUYKluTgrjsRnNtwqm2ebkse9MXoua1T",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});


--- 

Details

$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey=AUYKluTgrjsRnNtwqm2ebkse9MXoua1T",
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});
