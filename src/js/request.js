import toggleLoader from "./loader.js";

const request = async (res) => {
  toggleLoader(true);
  const req = await fetch(res);
  const data = await req.json();

  if (!req.ok) {
    toggleLoader(false);
    throw new Error(`Could not fetch ${res}, status: ${req.status}`);
  }
  toggleLoader(false);
  return data;
};

export default request;
