import api from "../../utils";
export const upload = (files, userId) => async (dispatch) => {
  try {
    console.log(files);
    // const formData = new FormData();
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });
    formData.append("userId", userId);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const res = await api.post("/api/data/upload", formData, config);
    if (res) dispatch({ type: "UPLOAD_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "UPLOAD_FAIL", payload: error.response });
  }
};

export const uploadFail = () => async (dispatch) => {
  dispatch({ type: "UPLOAD_FAIL" });
};
