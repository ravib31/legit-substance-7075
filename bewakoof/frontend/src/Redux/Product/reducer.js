import * as types from "./actionType";
const initialState = {
  isLoading: true,
  isError: false,
  menproduct: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MEN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_MEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, menproduct: payload };
    case types.GET_MEN_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

const womenState = {
  isLoading: false,
  isError: false,
  womenproduct: [],
};

export const Woreducer = (state = womenState, { type, payload }) => {
  switch (type) {
    case types.GET_WOMEN_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_WOMEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, womenproduct: payload };
    case types.GET_WOMEN_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

const SingleProductInitilaState = {
  isLoading: false,
  product: {},
  isError: false,
};
export const SingleProductPageReducer = (
  state = SingleProductInitilaState,
  { type, payload }
) => {
  switch (type) {
    case types.GET_SINGLE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: {...payload} };
    case types.GET_SINGLE_PRODUCT_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
