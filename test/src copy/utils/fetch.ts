interface OptionType {
  method?: "GET" | "POST" | "DELETE" | "UPDATE" | "PUT";
  query?: { [key: string]: string };
  body?: string | { [key: string]: string|number };
  headers?: { [key: string]: string };
}

class FetchError extends Error {
  errorInfo: any;

  name: string = "fetch-error";

  constructor(errorInfo: any) {
    super();
    this.message = errorInfo.message || errorInfo.errorDesc;
    this.errorInfo = errorInfo;
  }
}

export const PreFetch = async (url: string, option?: OptionType) => {
  let finalBody = "";

  if (option?.body) {
    if (typeof option.body === "string") {
      finalBody = option.body;
    } else {
      finalBody = JSON.stringify(option.body);
    }
  }

  const fetchParams: RequestInit = {
    method: option?.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/javascript, */*; q=0.01",
      "X-Requested-With": "XMLHttpRequest",
      ...option?.headers,
    },
  };

  if (finalBody) {
    fetchParams.body = finalBody;
  }

  const result = await fetch(url, fetchParams).then((res) => {
    return res.json();
  });

  if (!result.success) {
    throw new FetchError(result);
  }

  return result.data;
};
