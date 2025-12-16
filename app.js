const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOFeFnJwXh8V9BQtaeMa6nWk76v6cZ229rLxTUzzWGqhrmurbbDpbu1Bodz2LCNE_AtkPs07wWOOmQ/pub?gid=1298553947&single=true&output=csv";

fetch(SHEET_URL)
  .then((res) => res.text())
  .then((csv) => {
    const rows = csv.split("\n").slice(1);

    let grooming = 0;
    let contact = 0;
    let armsReach = 0;
    let coFeeding = 0;

    rows.forEach((row) => {
      const cols = row.split(",");

      const groomingVal = cols[4]?.trim();
      const contactVal = cols[7]?.trim();
      const armsVal = cols[10]?.trim();
      const coFeedingVal = cols[11]?.trim();

      if (groomingVal === "Yes") grooming++;
      if (contactVal === "Yes") contact++;
      if (armsVal === "Yes") armsReach++;
      if (coFeedingVal === "Yes") coFeeding++;
    });

    drawChart(grooming, contact, armsReach, coFeeding);
  });
