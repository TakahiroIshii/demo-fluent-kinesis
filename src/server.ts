import Aigle from "aigle";
const logger = require("fluent-logger");

logger.configure("demo-fluent-kinesis", {
  host: "localhost",
  port: 24226,
  timeout: 3.0,
  reconnectInterval: 600000,
});

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const main = async () => {
  const myArgs = process.argv.slice(2);
  const num = Number(myArgs[0]);
  await Aigle.timesSeries(num, async () => {
    await sleep(2000);
    const date = new Date();
    const record = `${date.toLocaleString()}, system log test`;
    console.log(record);
    logger.emit("systemLog", { record });
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
