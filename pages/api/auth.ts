// const BaseURL = "https://u4cbackendservices.onrender.com/api";
const BaseURL = "http://93.115.23.43:8339/api";
import { store } from "@/store";
const token = store.getState().auth.accessToken;

interface UserData {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface SuccessStories {
  id: string;
  nameTitle: string;
  firstName: string;
  lastName: string;
  company: string;
  touchPoint: string;
  topic: string;
  role: string;
  body: string;

  about: string;
  leverage: string;
  results: string;
  videoUrl: string;
  goldenNuggets: string;

  // intro: string;
  // about: string;
  // engageHow: string;
  // results: string;
  // file: string;
}

interface BlogPosts {
  id: number;
  category: string;
  title: string;
  body: string;
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
    // console.log("login response:", response.json());
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
  // const accessToken =
  //   "eyJhbGciOiJIUzM4NCJ9.eyJpZCI6ImRjMzRhYWMzLWEyNTItNDJhMy1hOGI0LWE4ZTY2NjU3M2JiYiIsImVtYWlsIjoib3llYm9kZWlubm9jZW50QGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwic3ViIjoib3llYm9kZWlubm9jZW50QGdtYWlsLmNvbSIsImlhdCI6MTcyNjQ4MTQwMywiZXhwIjoxNzI2NzQwNjAzfQ.SLNkPCwOGRRhnCBlk9HviRr4jZ7AME5bSskVy1kzcIXpij9oFlgsVL-RezQTigVQ";

  try {
    const response = await fetch(`${BaseURL}/success-stories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      // console.error("Success Stories Error:", errorData);
      throw new Error(errorData.message || "Can't load Success Stories.");
    }

    return await response.json();
  } catch (error) {
    // console.error("No Success Stories.", error);
    throw error;
  }
};

export const getBlogPosts = async () => {
  // const accessToken =
  // "eyJhbGciOiJIUzM4NCJ9.eyJpZCI6ImRjMzRhYWMzLWEyNTItNDJhMy1hOGI0LWE4ZTY2NjU3M2JiYiIsImVtYWlsIjoib3llYm9kZWlubm9jZW50QGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwic3ViIjoib3llYm9kZWlubm9jZW50QGdtYWlsLmNvbSIsImlhdCI6MTcyNjQ4MTQwMywiZXhwIjoxNzI2NzQwNjAzfQ.SLNkPCwOGRRhnCBlk9HviRr4jZ7AME5bSskVy1kzcIXpij9oFlgsVL-RezQTigVQ";

  try {
    const response = await fetch(`${BaseURL}/blogposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      // console.error("Blog Post Error:", errorData);
      throw new Error(errorData.message || "Can't load Blog Posts.");
    }

    return await response.json();
  } catch (error) {
    // console.error("No Blog Posts.", error);
    throw error;
  }
};

export const getBlogPostBySlug = async (slug: string) => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImMxNDgxZGE2LWYyMjktNDM4OS04NjVlLWFkNGY1NWZhMDEwYiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwicm9sZSI6IkFETUlOIiwic3ViIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNzIzMjg0MjkzLCJleHAiOjE3MjM1NDM0OTN9.g9P5TNXllJusqfWQxs6BYwijAqZbvOxajiVQBXbRHPw";

  try {
    const response = await fetch(`${BaseURL}/blogposts/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Can't load Blog Post.");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const postTestimonials = async (): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/testimonials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      // console.error("Creating Testimonials Error:", errorData);
      throw new Error(errorData.message || "Can't post Testimonials.");
    }

    return await response.json();
  } catch (error) {
    // console.error("Could Not Create Testimonials.", error);
    throw error;
  }
};

export const getTestimonials = async (): Promise<any> => {
  // const accessToken =
  // "eyJhbGciOiJIUzM4NCJ9.eyJpZCI6ImRjMzRhYWMzLWEyNTItNDJhMy1hOGI0LWE4ZTY2NjU3M2JiYiIsImVtYWlsIjoib3llYm9kZWlubm9jZW50QGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwic3ViIjoib3llYm9kZWlubm9jZW50QGdtYWlsLmNvbSIsImlhdCI6MTcyNjQ4MTQwMywiZXhwIjoxNzI2NzQwNjAzfQ.SLNkPCwOGRRhnCBlk9HviRr4jZ7AME5bSskVy1kzcIXpij9oFlgsVL-RezQTigVQ";

  try {
    const response = await fetch(`${BaseURL}/testimonials?page=1&size=10`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      // console.error("Testimonials Error:", errorData);
      throw new Error(errorData.message || "Can't load Testimonials.");
    }

    return await response.json();
  } catch (error) {
    // console.error("No Testimonias.", error);
    throw error;
  }
};

// FOR SAVING USER PROFILE TO THE BACKEND
// const handleSave = async () => {
//   try {
//     const response = await fetch('/api/user/update', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     if (response.ok) {
//       alert("Profile updated successfully!");
//     }
//   } catch (error) {
//     console.error("Error updating profile:", error);
//   }
// };

export const updateUserProfile = () => {
  try {
    console.log("auth from store", store.getState().auth?.accessToken);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `Bearer ${store.getState().auth?.accessToken}`
    );

    // const raw = JSON.stringify({
    //   firstName: "Inno",
    //   lastName: "Doe",
    //   address: "456 Alagbole Main St",
    //   contactNumber: "123-456-7890",
    //   city: "Anytown",
    //   state: "CA",
    // });

    // const requestOptions: RequestInit = {
    //   method: "PATCH",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch(
    //   "http://93.115.23.43:8339/api/users/update-user-details",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
  } catch (error) {
    console.log("error", error);
  }
};

export const getUserProfile = async (): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.getState().auth?.accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      // console.error("Testimonials Error:", errorData);
      throw new Error(errorData.message || "Can't get profile.");
    }

    return await response.json();
  } catch (error) {
    // console.error("No Testimonias.", error);
    throw error;
  }
};

export const updateProfile = async (profileData: any): Promise<any> => {
  try {
    const response = await fetch(`${BaseURL}/users/update-user-details`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.getState().auth?.accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      // console.error("Creating Testimonials Error:", errorData);
      throw new Error(errorData.message || "Can't post Testimonials.");
    }

    return await response.json();
  } catch (error) {
    // console.error("Could Not Create Testimonials.", error);
    throw error;
  }
};
