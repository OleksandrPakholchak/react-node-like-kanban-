const initialState = {
  loading: false,
  fileSent: true,
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        ...payload,
        fileSent: false,
        loading: false,
      };

    case "UPLOAD_FAIL":
      return {
        ...state,
        ...payload,
        fileSent: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;
