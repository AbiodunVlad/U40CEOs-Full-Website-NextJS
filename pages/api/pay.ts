// const BaseURL = "https://u4cbackendservices.onrender.com/api";
// const BaseURL = "http://93.115.23.43:8339/api";
const BaseURL = "https://u4c.circonspect.com/api";
import { store } from "@/store";
const token = store.getState().auth.accessToken;


// export const createSuccessStories = async (
//   successStories: SuccessStories
// ): Promise<any> => {
//   try {
//     const response = await fetch(`${BaseURL}/api/success-stories`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(successStories),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error("Creating Success Stories Error:", errorData);
//       throw new Error(errorData.message || "Can't post Success Stories.");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Could Not Create Success Stories.", error);
//     throw error;
//   }
// };


export const initializeTransaction = async (amount: string): Promise<any> => {
    try {
        const response = await fetch(`${BaseURL}/initialize-transaciton`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: amount }),
        });
        
        console.log('payment response here', response.json());
    
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Invalid OTP:", errorData.data.message);
          throw new Error(errorData.data.message || "Could not verify OTP.");
        }
    
        return await response.json();
      } catch (error) {
        console.error("Error verifying OTP, check your network:", error);
        throw error;
      }
};

