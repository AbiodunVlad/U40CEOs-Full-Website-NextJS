// const BaseURL = "https://u4cbackendservices.onrender.com/api";
// const BaseURL = "http://93.115.23.43:8339/api";
const BaseURL = "https://u4c.circonspect.com/api";
import { store } from "@/store";


export const initializeTransaction = async (amount: string): Promise<any> => {
  try {
    const token = store.getState().auth?.accessToken;
    const response = await fetch(`${BaseURL}/payments/initialize-transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount }),
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log("Payment response fine:", responseData);
      return responseData;
    } else {
      const errorMessage = responseData?.data?.message || responseData?.message || "Could not initialize transaction.";
      console.error("Error:", errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error initializing transaction, check your network:", error);
    throw error;
  }
};

export const verifyTransaction = async (ref: string, plan: string, durationInDays: number): Promise<any> => {
  try {
    const token = store.getState().auth?.accessToken;
    const response = await fetch(`${BaseURL}/payments/verify-transaction/${ref}?plan=${plan}&durationInDays=${durationInDays}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log("Verify transaction response fine:", responseData);
      return responseData;
    } else {
      const errorMessage = responseData?.data?.message || responseData?.message || "Could not verify verify transaction.";
      console.error("Error:", errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error verifying transaction, check your network:", error);
    throw error;
  }
};


