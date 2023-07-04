function markLinksAsSafe() {
    const links = document.getElementsByTagName("a");
    const csvFile = "malicious_phish.csv";

    fetch("http://localhost:3000/malicious_phish.csv")
        .then((response) => response.text())
        .then((csvData) => {
            const rows = csvData.split("\n");
            const csvObject = {};
            rows.forEach((row) => {
                const columns = row.split(",");
                csvObject[columns[0]] = columns[1];
            });

            // Check if the current tab's URL matches any entry in the CSV object
            for (let i = 0; i < links.length; i++) {
                const link = links[i];
                const currentHost = new URL(link.href).hostname;

                if (currentHost in csvObject) {
                    let content = link.innerText;
                    if (csvObject[currentHost] != undefined) {
                        link.innerText =
                            "❌" +
                            content +
                            "❌" +
                            csvObject[currentHost] +
                            "❌";
                    } else {
                        link.innerText =
                            "❌" + content + "❌" + "Phishing" + "❌";
                    }

                    link.style.color = "red";
                } else {
                    link.innerText += "✅";
                    link.style.color = "green";
                }
            }

            // Update the notifier element based on the result
        })
        .catch((error) => {
            console.error(
                "Error occurred while fetching or processing the CSV file:",
                error
            );
        });
}

markLinksAsSafe();
