import axios from "axios";

export const uploadZipFile = async (file, startDate) => {
  const formData = new FormData();
  formData.append("zipFile", file);
  formData.append("startDate", startDate);

  try {
    const res = await axios.post("http://localhost:8000/api/upload", formData);
    return res.data;
  } catch (error) {
    console.error("Error uploading zip file:", error);
    throw error;
  }
};
