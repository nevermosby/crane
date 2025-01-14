import { useSelector as useRawSelector } from 'react-redux';

import { RootState } from '../store/store';

export const useSelector = <T>(selector: (state: RootState) => T): T => {
  return useRawSelector(state => selector(state as RootState));
};
