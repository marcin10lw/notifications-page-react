import { createSlice } from "@reduxjs/toolkit";
import { notificationsData } from "./notificationsData";

const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: notificationsData,
  },
  reducers: {
    markAllAsRead: ({ notifications }) => {
      notifications.forEach((notification) => (notification.read = true));
    },
  },
});

export const selectNotifications = (state) => state.notifications;
export const { markAllAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
