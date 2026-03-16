export const API_URL = "http://localhost:8000/api/";

const successCodes = [200, 201, 204];

export const API_ROUTES = {
  path: {
    getAll: "path/",
    getById: (id) => `path/${id}`,
    create: "path/",
  },
};

export const urlMaker = (endpoint) => {
  return `${API_URL}${endpoint}`;
};

export const optionMaker = (data, method = "POST", token = null) => {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };
};

export const fetchData = async (endpoint, options) => {
  try {
    const response = await fetch(urlMaker(endpoint), options);
    const resData = await response.json();

    if (!successCodes.includes(response.status) || !response.ok) throw new Error(resData.message);

    return resData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
