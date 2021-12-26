import { useWindowWidth } from 'hooks';

const IsLessThan = (maxWindowWidth: number): boolean => {
  const windowWidth = useWindowWidth();
  return windowWidth < maxWindowWidth;
};

export default IsLessThan;
