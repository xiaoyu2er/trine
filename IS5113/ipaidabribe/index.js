const { stringify } = require("csv-stringify");
const Crawler = require("crawler");
const fs = require("fs");

function main() {
  const pageUrl = "http://www.ipaidabribe.com/reports/paid";
  const items = [];
  // request
  const c = new Crawler({
    maxConnections: 2,
    callback: (error, res, done) => {
      if (error) {
        console.log(error);
      } else {
        const $ = res.$;
        console.log(res.request.uri.href);
        $("section.ref-module-paid-bribe").each(function (i, elem) {
          const $this = $(this);
          const a = $this.find("h3 a");
          const href = a.attr("href");
          const title = a.attr("title");
          const amount = $this
            .find(".paid-amount")
            .text()
            .replace("Paid INR ", "")
            .trim();
          const department = $this.find(".transaction a").attr("title");
          const date = $this.find(".date").text().trim().replace("  ", " ");
          const city = $this.find(".location").attr("title");
          const details = $($this.find(".body-copy-lg").get(0))
            .text()
            .replace("Read more", "")
            .replace(/\n/g, " ")
            .trim();
          const views = $this.find(".views").text().replace("views", "").trim();
          items.push({
            title,
            amount,
            department,
            date,
            city,
            views,
            details,
          });
        });
      }
      done();
    },
  });

  c.queue(
    new Array(101)
      .fill(0)
      .map((_, i) => i * 10)
      .map((i) => `${pageUrl}?page=${i}`)
  );

  // store
  c.on("drain", () => {
    console.log("length", items.length);
    stringify(
      items,
      {
        header: true,
      },
      function (err, output) {
        fs.writeFile(
          __dirname + "/data.csv",
          output,
          { flag: "w+" },
          function (err) {
            if (err) {
              console.log(err);
            } else {
              console.log("done!");
            }
          }
        );
      }
    );
  });
}

main();
