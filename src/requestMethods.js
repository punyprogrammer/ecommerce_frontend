import axios from "axios";
const BASE_URL = "https://swag-sewa.herokuapp.com/api/v1/";
const USER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTI2NzU1NDgyYzRkZjgwZWM4YWZmMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDU1NzIwNDIsImV4cCI6MTY0NTgzMTI0Mn0.D0RtfLVra-PfFDvCSbfDcKiWPKjdRsXgopP67Miev-0";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${USER_TOKEN}` },
});
