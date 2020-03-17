import { Size } from './index.interface';
import styles from './styles';

export const getTextSizeStyle = (size?: Size) => {
  size = size || 'default';

  return styles[size];
};
