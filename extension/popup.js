// function markLinksAsSafe() {
//     const links = document.getElementsByTagName("a");
//     const csvFile = "malicious_phish.csv";

//     fetch(csvFile)
//         .then((response) => response.text())
//         .then((csvData) => {
//             // Parse the CSV data
//             const rows = csvData.split("\n");
//             const csvArray = [];
//             rows.forEach((row) => {
//                 const columns = row.split(",");
//                 csvArray.push(columns);
//             });

//             // Check if the current tab's URL matches any host in the CSV data
//             for (let i = 0; i < links.length; i++) {
//                 const link = links[i];
//                 const currentHost = new URL(link.href).hostname;

//                 let isMalicious = false;
//                 let type = "";
//                 csvArray.forEach((row) => {
//                     const urlHost = row[0];

//                     if (urlHost === currentHost) {
//                         isMalicious = true;
//                         type = row[1];
//                         console.log("malici");
//                     }
//                 });
//                 if (isMalicious) {
//                     link.innerHTML += "❌";
//                     link.innerText += type;
//                     link.style.color = "red";
//                 } else {
//                     link.innerHTML += "✅";
//                     link.style.color = "green";
//                 }
//             }

//             // Update the notifier element based on the resul
//         })
//         .catch((error) => {
//             console.error(
//                 "Error occurred while fetching or processing the CSV file:",
//                 error
//             );
//         });
// }

// markLinksAsSafe();
