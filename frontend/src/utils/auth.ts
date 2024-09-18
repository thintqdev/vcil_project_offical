export const debouce = (
  callback: (...args: any[]) => void,
  timeout: number = 500
): ((...args: any[]) => void) => {
  let id: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (id !== null) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

// export const getAdminMe = async (token: any) => {
//   const response = await fetch(`${process.env.APP_URL}/admin/me`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token.value}`,
//       Accept: "application/json",
//     },
//   });

//   if (!response.ok) {
//     return false;
//   }

//   return await response.json();
// };
