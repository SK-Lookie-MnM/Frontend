import axios from "axios";

const api = axios.create({
  baseURL: "https://api.sklookiemnm.shop/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 요청 인터셉터를 사용하여 매 요청마다 헤더에 토큰을 추가합니다.
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // Authorization 헤더에 토큰을 추가합니다.
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const refreshResponse = await axios.post("/api/users/reissue", null, {
          withCredentials: true,
        });

        // 새로운 Access Token 저장
        const newAccessToken = refreshResponse.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        // 이전 요청에 새로운 Access Token 설정 후 재시도
        error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return api(error.config); // 실패했던 요청 재시도
      } catch (refreshError) {
        console.error("토큰 갱신 실패:", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// POST 요청 함수
export const postData = async (endpoint, data = {}, config = {}) => {
  try {
    const response = await api.post(endpoint, data, config);
    return response;
  } catch (error) {
    console.error(`POST 요청 실패: ${endpoint}`, error);
    throw error;
  }
};
