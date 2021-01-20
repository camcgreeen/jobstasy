export const convertSalary = (salary) => {
  //55000 (number)
  //55k (string)
  return (salary / 1000).toString() + "k";
};

export const generateRandomString = (length) => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
};

export const disableRightMiddleClick = () => {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  window.addEventListener("auxclick", (event) => {
    if (event.button === 1) {
      event.preventDefault();
    }
  });
};

export const getRandom = (seed) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

export const convertJobIdToSeed = (id) => {
  let result = 0;
  id.split("").forEach((char) => (result += char.charCodeAt(0)));
  return result;
};

export const convertToSalary = (random) => {
  return Math.floor(45 + random * 15) * 1000;
};

export const urlRegex = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i;
