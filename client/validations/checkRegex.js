const checkRegex = (regex, email) => {
  const check = regex.test(email);
  console.log("KKKK", check);
  return check;
};

export default checkRegex;