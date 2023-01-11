import { createSlice } from "@reduxjs/toolkit";
import { notificationsData } from "./notificationsData";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: notificationsData,
  reducers: {},
});

export const selectNotifications = (state) => state.notifications;
export default notificationsSlice.reducer;
