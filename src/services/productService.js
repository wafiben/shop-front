import { baseUrl } from "../config";
import { handleRequest } from "./http";

export async function getProduct(id) {
  try {
    return await handleRequest(
      `${baseUrl}/company-products/${id}`,
      "GET",
      null,
      localStorage.getItem("token")
    );
  } catch (error) {
    throw new Error("failed");
  }
}
