const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const nightmare = Nightmare({ show: true });
const url = "https://www.flipkart.com/";

nightmare
  .goto(url)
  .wait("body")
  .click("div._2tVp4j")
  .type("input.LM6RPg", "nodejs books")
  .click("button.vh79eN")
  .wait("div.bhgxx2")
  .evaluate(() => document.querySelector("body").innerHTML)
  .end()
  .then(response => {
    console.log(getData(response));
  })
  .catch(err => {
    console.log(err);
  });

let getData = html => {
  let data = [];
  $("div._1HmYoV._35HD7C:nth-child(2) div.bhgxx2 col-12-12").each(
    (row, raw_element) => {
      $(raw_element)
        .find("div div div")
        .each((i, elem) => {
          let title = $(elem)
            .find("div div a:nth-child(2)")
            .text();
          let link = $(elem)
            .find("div div a:nth-child(2)")
            .attr("href");
          if (title) {
            data.push({
              title: title,
              link: link
            });
          }
        });
    }
  );
  console.log(data);
};
