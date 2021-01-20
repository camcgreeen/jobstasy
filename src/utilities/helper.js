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

export const emailAddress = "c.c.green@outlook.com";

export const sortJobs = (jobs, sortBy) => {
  switch (sortBy) {
    case "most recent":
      return jobs.sort(
        (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
      );
    case "salary (high to low)":
      return jobs.sort((a, b) => Number(b.salary_max) - Number(a.salary_max));
    case "salary (low to high)":
      return jobs.sort((a, b) => Number(a.salary_min) - Number(b.salary_min));
    default:
      return [];
  }
};

export const filterJobsByCompany = (jobs, searchTerms) => {
  let formattedSearchTerms = [...searchTerms];
  for (let i = 0; i < formattedSearchTerms.length; i++) {
    formattedSearchTerms[i] = formattedSearchTerms[i].split(" ");
  }
  const flattenedSearchTerms = formattedSearchTerms.flat();
  return jobs.filter((job) => {
    const keywords = job.company.toLowerCase().split(" ");
    let matchFound = false;
    // nested loop mxn complexity, but m and n will always be very low
    flattenedSearchTerms.forEach((searchTerm) => {
      keywords.forEach((keyword) => {
        if (keyword === searchTerm.toLowerCase()) {
          matchFound = true;
          return;
        }
      });
    });
    return matchFound;
  });
};

export const filterJobsBySalary = (jobs, userMin, userMax) => {
  return jobs.filter((job) => {
    return (
      (job.salary_max >= userMin || job.salary_min >= userMin) &&
      (job.salary_min <= userMax || job.salary_max <= userMax)
    );
  });
};

export const filterJobsByFullTime = (jobs) => {
  return jobs.filter((job) => job.type === "Full Time");
};
