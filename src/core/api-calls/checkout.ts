import { handlePost } from "./Axios";

export const getRazorpayObjectForCourseCheckout = async (reqPayload: any) => {  
  const response = await handlePost('/order/create-order', reqPayload, {},true);
  return response.data;
}