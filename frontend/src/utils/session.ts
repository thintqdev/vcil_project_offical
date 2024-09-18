import { cookies } from "next/headers";

export const setSession = async (token: any, user: any) => {
  const response = await fetch(`${process.env.APP_FE_URL}/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, user }),
  });
};

export const getSession = async () => {
  const token = cookies().get("token");
  const response = await fetch(`${process.env.APP_FE_URL}/api/session`, {
    method: "GET",
    headers: {
      token,
    },
  });
  const { user } = await response.json();

  if (!user) {
    return false;
  }

  return user;
};
