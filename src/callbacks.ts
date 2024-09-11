export function myFunction(value: string) {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = value;
}

export function updateWithDelay(value: string, delay: number) {
  function callback() {
    myFunction(value);
  }

  setTimeout(callback, delay);
}

export function callMeBackWhenPair(
  callMeBack: (arg: string) => void,
  aNumber: number
) {
  const interestingContent = "This is interesting";
  if (aNumber % 2 === 0) {
    callMeBack(interestingContent);
  }
}

export function promiseWhenPair(aNumber: number) {
  return new Promise((resolve, reject) => {
    const interestingContent = "This is interesting";
    if (aNumber % 2 === 0) {
      resolve(interestingContent);
    } else {
      reject("number is not pair");
    }
  });
}
