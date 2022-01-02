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
    throw new Error(await res.text());
  }

  return await res.json();
};

export default makeApiCall;
