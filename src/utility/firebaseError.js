export const getError = (errorMsg) => {
  if (errorMsg.includes("Firebase: Error (auth/")) {
    return errorMsg
      .replace("Firebase: Error (auth/", "")
      .replace(").", "")
      .split("-")
      .join(" ");
  } else {
    return "Wrong!";
  }
};
