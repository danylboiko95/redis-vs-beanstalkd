const { createClient } = require("ioredis");

const channel = "notification_channel";
const totalJobs = 400000;
const port = 6380;

const host = "localhost";
const publisher = createClient({
  host,
  port,
});

publisher.on("error", (err) => {
  console.error("Publisher Redis Error:", err);
});

const subscriber = createClient({
  host,
  port,
});

subscriber.on("error", (err) => {
  console.error("Subscriber Redis Error:", err);
});

subscriber.subscribe(channel, (err, count) => {
  if (err) {
    console.error("Error publishing message:", err);
  }
  publishMessages();
});

const startTime = Date.now();
subscriber.on("message", (channel, message) => {
  if (message >= totalJobs) {
    const endTime = Date.now();
    const elapsedMilliseconds = endTime - startTime;
    console.log(
      `Time taken to add and read ${totalJobs} jobs: ${elapsedMilliseconds}ms`
    );
    process.exit();
  }
});

function publishMessage(channel, message) {
  publisher.publish(channel, message, (err) => {
    if (err) {
      console.error("Error publishing message:", err);
    }
  });
}

function publishMessages() {
  for (let i = 0; i <= totalJobs; i++) {
    const message = i;
    publishMessage(channel, message);
  }
}

publisher.on("connect", () => {
  console.log("Publisher connected to Redis");
});
