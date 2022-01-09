const makeApiCall = async <T>(
  endPoint: string,
  method: string = 'GET',
  headers: any = {},
  body?: any,
): Promise<T> => {
  const res = await fetch(endPoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Error ${res.status}: ${JSON.parse(error).message}`);
  }

  return await res.json();
};

export default makeApiCall;
