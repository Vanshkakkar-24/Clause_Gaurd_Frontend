import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// AUTH

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

// ANALYSIS

export const analyzeContract = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/analyze/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// COMPARISON

export const compareContracts = (file1, file2) => {
  const formData = new FormData();

  formData.append("file1", file1);
  formData.append("file2", file2);

  return API.post("/compare/files", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// EMAIL

export const generateEmail = (data) =>
  API.post("/generate-email", data);

export default API;