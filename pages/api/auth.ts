//Sign up API

// export const signupUser = async (userData: any) => {
//   try {
//     const response = await fetch(
//       "https://u4cbackendservices.onrender.com/api/auth/sign-up",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Could not sign you up.");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error signing up, chech your network:", error);
//     throw error;
//   }
// };

// Login API
// export const loginUser = async (userData: any) => {
//   try {
//     const response = await fetch(
//       "https://u4cbackendservices.onrender.com/api/auth/sign-in",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Can't log user in");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error logging in:", error);
//     throw error;
//   }
// };

const BaseURL = "https://u4cbackendservices.onrender.com/api/auth";

interface UserData {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const signupUser = async (userData: UserData): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Signup Error Response:", errorData);
      throw new Error(errorData.message || "Could not sign you up.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error signing up, check your network:", error);
    throw error;
  }
};

export const loginUser = async (userData: UserData): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login Error Response:", errorData);
      throw new Error(errorData.message || "Can't log you in.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
