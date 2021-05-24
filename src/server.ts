import Aigle from "aigle";
import * as logger from "fluent-logger";

logger.configure("demo-fluent-kinesis", {
  host: "localhost",
  port: 24226,
  timeout: 3.0,
  reconnectInterval: 600000,
});

async function main() {
  const [num] = process.argv.slice(2);
  await Aigle.timesSeries(Number(num), async () => {
    await Aigle.delay(2000);
    const record = `${new Date().toLocaleString()}, system log test`;
    console.log(record);
    logger.emit("systemLog", { record });
  });
}

(async () => {
  try {
    await main();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
