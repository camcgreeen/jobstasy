export const convertSalary = (salary) => {
  //55000 (number)
  //55k (string)
  return (salary / 1000).toString() + "k";
};
