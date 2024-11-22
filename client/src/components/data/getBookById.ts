import type { LoaderFunctionArgs } from "react-router-dom";

export async function getBookById({ params }: LoaderFunctionArgs) {
  const id = params.id;
  try {
    const fetchPromise = fetch(`${import.meta.env.VITE_API_URL}/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
      return response.json();
    });

    const data = await fetchPromise;
    return data;
  } catch (error) {
    if (error instanceof Error)
      console.error("An error occurred:", error.message);
  }
}
