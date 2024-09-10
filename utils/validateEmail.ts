export const validateEmail = async (email: string) => {
  const key = "ema_live_HbdDkf8JaaPUqJbfw7PPxaHw5Gdd4ky9rWGAiE5W";
  const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
