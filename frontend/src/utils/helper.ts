// Tạo helper transform status thành tiếng Việt
export const transformStatus = (status: string) => {
  switch (status) {
    case "active":
      return "Hiển thị";
    case "inactive":
      return "Ẩn";
    case "draft":
      return "Bản nháp";
    default:
      return "Không xác định";
  }
};
