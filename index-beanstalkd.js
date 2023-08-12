const fivebeans = require("fivebeans");
const client = new fivebeans.client("127.0.0.1", 11300);
client.connect();

const totalJobs = 200000;
let jobsAdded = 0;

const startTime = Date.now();

function putJob(payload) {
  client.put(0, 0, 60, payload, (err, jobid) => {
    if (err) {
      console.error("Error putting job:", err);
      return;
    }
  });
}

for (let i = 0; i < totalJobs; i++) {
  const payload = JSON.stringify({ message: `Job ${i}` });
  putJob(payload);
}
function readJob(jobId) {
  client.peek(jobId, (err, job) => {
    if (err) {
      console.error("Error peeking job:", err);
      return;
    }
  });
}
for (let i = totalJobs; i <= totalJobs + totalJobs; i++) {
  readJob(i);
  jobsAdded++;
}
if (jobsAdded - 1 === totalJobs) {
  const endTime = Date.now();
  const elapsedMilliseconds = endTime - startTime;
  console.log(
    `Time taken to add and read ${totalJobs} jobs: ${elapsedMilliseconds}ms`
  );
  client.end();
}
