import makeApiCall from './api';

const getNotFound = async (): Promise<string> => {
  return await makeApiCall(`${process.env.REACT_APP_BASE_URL}/*`);
};

export default getNotFound;
