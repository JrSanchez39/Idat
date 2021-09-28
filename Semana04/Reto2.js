const doTask = new Promise((resolve, reject) => {
    let myNums = [];
    for (let i = 0; i < 10; i++) {
      myNums.push(Math.floor(Math.random() * 6 + 1));
      if (myNums[i] === 6) {
        return resolve(myNums);
      }
    }
    return resolve(myNums);
  });
  
  doTask.then(console.log).catch(console.log);
  