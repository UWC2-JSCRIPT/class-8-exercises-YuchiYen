let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() > 0.5) {
      resolve('success');
    }
    else {
      reject('fail');
    }
  }, 1000);
});

myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  })
  .finally(function () {
    console.log('complete');
  });

