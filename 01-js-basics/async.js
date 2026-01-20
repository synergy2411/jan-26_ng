// Day 02

// Promise - Build
function buildPromise(arr) {
  const promise = new Promise((resolve, reject) => {
    if (arr.length > 3) {
      setTimeout(() => {
        resolve({ message: "success" });
      }, 1500);
    } else {
      reject(new Error("Something went wrong"));
    }
  });

  return promise;
}

// Promise - Consumer
// - .then().catch()
function consumePromiseWithThenCatch() {
  console.log("Start");
  buildPromise([1, 2, 3, 4])
    .then((response) => {
      console.log("Response : ", response);
      return response.message;
    })
    .then((message) => {
      console.log("Second Statement - ", message);
      buildPromise([1, 2]);
      // .catch(err => console.error(err))
    })
    .then(() => {
      console.log("Third Statement");
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("End");
}
// consumePromiseWithThenCatch();

// - async...await

async function consumePromiseWithAsyncAwait() {
  console.log("Start");
  try {
    let { message: firstMessage } = await buildPromise([1, 2, 3, 4, 5]);
    console.log("Message : ", firstMessage);
    try {
      let { message: secondMessage } = await buildPromise([1, 2]);
      console.log("Message : ", secondMessage);
    } catch (err) {}
  } catch (err) {
    console.error(err);
  }
  console.log("End");
}

consumePromiseWithAsyncAwait();

// Promise API
function promiseFactory(data, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), ms);
  });
}

const p1 = promiseFactory("First", 1000);
const p2 = promiseFactory("Second", 1500);
const p3 = promiseFactory("Third", 2000);
const p4 = Promise.reject(new Error("Rejecetd"));

Promise.allSettled([p1, p2, p3, p4])
  .then((response) => {
    console.log("Response : ", response);
  })
  .catch(console.error);
