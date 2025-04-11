/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const defaultHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

interface ApiRequestOptions {
  url: string;
  method?: Method;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: any;
}

export const apiRequest = async ({
  url,
  method = 'GET',
  headers = {},
  params,
  data,
}: ApiRequestOptions) => {
  console.log("xyz 1", BASE_URL);
  const config: AxiosRequestConfig = {
    baseURL: BASE_URL,
    url,
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    params,
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    console.error('API Request Error:', error.response || error);
    throw error.response?.data || error;
  }
};
