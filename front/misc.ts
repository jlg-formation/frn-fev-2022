export const sleep = (delay: number) =>
  new Promise<void>(resolve =>
    setTimeout(() => {
      resolve();
    }, delay),
  );

console.error = (...args) => {
  console.log(...args);
};
