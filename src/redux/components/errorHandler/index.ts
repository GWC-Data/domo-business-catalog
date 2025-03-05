import axios, { AxiosError, AxiosResponse } from "axios";

// Error
export interface CustomAxiosError extends AxiosError<unknown, unknown> {
  response?: AxiosResponse<unknown, unknown> & {
    data: {
      message: string;
    };
  };
}

function handleError(error: unknown) {
  let errorMessage: string = "An unknown error occurred.";

  if (axios.isAxiosError(error)) {
    // Handle AxiosError specifically
    const axiosError = error as CustomAxiosError;
    errorMessage = axiosError.response?.data?.message || axiosError.message || errorMessage;
  } else if (error instanceof Error) {
    // Handle other Error objects
    errorMessage = error.message;
  }
  if (errorMessage !== "Request failed with status code 403") return errorMessage;
}

export default handleError;