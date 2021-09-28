const isKayoRight = false;

const promise = new Promise((resolve, reject) => {
  if (isKayoRight) {
    resolve(`We are having cake and a party`);
  } else {
    reject(`We are having a party but no cake `);
  }
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));