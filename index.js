fetch("crawlers.json")
.then(function(response){
   return response.json();
})
.then(function(crawlers){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let crawler of crawlers){
      out += `
         <tr>
            <td>${crawler.crawlerName}</td>
            <td>${crawler.status}</td>
            <td>${crawler.unchecked}</td>
            <td>${crawler.minuteRequests}</td>
            <td>${crawler.hourRequests}</td>
            <td>${crawler.dayRequests}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});