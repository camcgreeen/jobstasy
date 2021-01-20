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
