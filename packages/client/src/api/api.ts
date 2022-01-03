const makeApiCall = async (
  endPoint: string,
  method: string = 'GET',
  body?: any,
) => {
  const res = await fetch(endPoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Error ${res.status}: ${JSON.parse(error).error}`);
  }

  return await res.json();
};

export default makeApiCall;
