import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {}
});

// axiosInstance.interceptors.request.use((value) => {
//     // если у объекта запроса , есть метод ГЕТ,
//     if (value.method?.toLocaleUpperCase() === "GET") {
//         //то в объект запроса, в его хедерс, вносим ключ Авторизейшен с значением Бирер + наш аксес токен
//         value.headers.Authorization = `Bearer ` + retriveLocalStorage<ILoginUserResponse>('user').accessToken;
//     }
//     //делаем запрос с обновленым объектом велью
//     return value;
// })
