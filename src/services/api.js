import axios from "axios";

import { LOCALE_STORAGE_KEY } from "../i18n/constants";

const API = axios.create({
  baseURL: "https://clause-gaurd-backend.onrender.com",
});

function getAppLocale() {
  try {
    const v = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (v === "en" || v === "hi") return v;
  } catch {
    /* ignore */
  }
  return "en";
}

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const locale = getAppLocale();
  config.headers["Accept-Language"] =
    locale === "hi"
      ? "hi-IN,hi;q=0.9,en;q=0.8"
      : "en-US,en;q=0.9";
  config.headers["X-App-Language"] = locale;

  return config;
});

// AUTH

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

export const googleAuth = (token) =>
  API.post("/auth/google", {
    token
  });

// ANALYSIS

export const analyzeContract = (file) => {
  const formData = new FormData();
  const token = localStorage.getItem("token");
  formData.append("file", file);

  return API.post("/analyze/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token}`
    },
  });
};

// COMPARISON

export const compareContracts = (file1, file2) => {
  const formData = new FormData();
  const token = localStorage.getItem("token");

  formData.append("file1", file1);
  formData.append("file2", file2);

  return API.post("/compare/files", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token}`
    },
  });
};

export const getActivities = () =>
  API.get("/auth/activities")

// EMAIL

export const generateEmail = (data) => {
  API.post("/generate-email", data, {
    headers: {
      "Authorization": `Bearer ${token}`
    },
  })
}

export default API;