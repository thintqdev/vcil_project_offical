"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogin = async (formData: any) => {
  const form = Object.fromEntries(formData);
  const response = await fetch(`${process.env.APP_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!response.ok) {
    return false;
  }

  const { status, data } = await response.json();

  if (status !== 200) {
    return false;
  }

  cookies().set("token", data.token, {
    expires: new Date(data.expires),
    httpOnly: true,
    path: "/",
    secure: false,
    maxAge: 60 * 60 * 24,
  });

  redirect("/admin/dashboard");
};
