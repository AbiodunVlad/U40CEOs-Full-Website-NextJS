const BaseURL = "https://u4cbackendservices.onrender.com/api";

interface UserData {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface SuccessStories {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  touchPoint: string;
  topic: string;
  role: string;
  body: string;

  // intro: string;
  // about: string;
  // engageHow: string;
  // results: string;
  // file: string;
}

export const signupUser = async (userData: UserData): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/auth/sign-up`, {
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
    const response = await fetch(`${BaseURL}/auth/sign-in`, {
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

export const createSuccessStories = async (
  successStories: SuccessStories
): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/success-stories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(successStories),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Creating Success Stories Error:", errorData);
      throw new Error(errorData.message || "Can't post Success Stories.");
    }

    return await response.json();
  } catch (error) {
    console.error("Could Not Create Success Stories.", error);
    throw error;
  }
};

export const getSuccessStories = async (): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/success-stories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Success Stories Error:", errorData);
      throw new Error(errorData.message || "Can't load Success Stories.");
    }

    return await response.json();
  } catch (error) {
    console.error("No Success Stories.", error);
    throw error;
  }
};
