import axiosConfig from "./axios";
export const GetAll = (params) => {
    return axiosConfig.get(`/products`);
};
export const Get = (id) => {
    return axiosConfig.get(`/products/${id}`);
};
export const DeleteProduct= (id) => {
    return axiosConfig.delete(`products/${id}`);
};
export const UpdateProduct = (id,params) => {
    return axiosConfig.put(`products/${id}`,params);
};