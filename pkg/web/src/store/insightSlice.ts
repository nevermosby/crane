import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Aggregation, QueryWindow } from '../models';
import { rangeMap } from '../utils/rangeMap';

export interface InsightState {
  aggregation: Aggregation;

  window: QueryWindow;

  customRange: { start: string; end: string };

  selectedDashboard?: any;

  isCurrentCluster: boolean;

  selectedClusterId?: string;

  selectedNamespace?: string | null;

  discount: number;
}

export const initialInsightState: InsightState = {
  discount: 100,

  aggregation: Aggregation.CLUSTER,

  window: QueryWindow.LAST_1_DAY,

  customRange: {
    start: rangeMap[QueryWindow.LAST_1_DAY][0].toISOString(),
    end: rangeMap[QueryWindow.LAST_1_DAY][1].toISOString()
  },

  selectedDashboard: null,

  isCurrentCluster: true,

  selectedClusterId: null,

  selectedNamespace: null
};

const slice = createSlice({
  name: 'insight',
  initialState: initialInsightState,
  reducers: {
    discount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
    selectedNamespace: (state, action: PayloadAction<string>) => {
      state.selectedNamespace = action.payload;
    },
    selectedClusterId: (state, action: PayloadAction<string>) => {
      state.selectedClusterId = action.payload;
    },
    isSelectedCurrentCluster: (state, action: PayloadAction<boolean>) => {
      state.isCurrentCluster = action.payload;
    },
    selectedDashboard: (state, action: PayloadAction<any>) => {
      state.selectedDashboard = action.payload;
    },
    aggregation: (state, action: PayloadAction<Aggregation>) => {
      state.aggregation = action.payload;
    },
    window: (state, action: PayloadAction<QueryWindow>) => {
      state.window = action.payload;
    },
    customRange: (state, action: PayloadAction<InsightState['customRange']>) => {
      state.customRange = action.payload;
    }
  }
});

export const insightAction = slice.actions;
export const insightReducer = slice.reducer;
