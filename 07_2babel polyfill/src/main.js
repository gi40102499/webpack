const aaa = "aaa";
const foo = (i) => {
  console.log(i);
};
foo("111111111");
foo("11111114311");
foo("111111112");
foo("111111113");
console.log(`${aaa}`);
new Promise((res, rej) => {
  setTimeout(() => {
    console.log(123);
    res();
  }, 1000);
});
