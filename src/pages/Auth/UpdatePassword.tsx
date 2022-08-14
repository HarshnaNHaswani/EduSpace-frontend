import React from "react";

export const UpdatePassword = () => {
  const updatePasswordHandler =() => {

  }
  return (
    <form>
      <label htmlFor="current-password">Current Password: </label>
      <input type="password" name="update-password" id="current-password" />

      <label htmlFor="new-password">New Password: </label>
      <input type="password" name="update-password" id="new-password" />
      
      <label htmlFor="confirm-new-password">Confirm New Password: </label>
      <input type="password" name="update-password" id="confirm-new-password" />

      <button>Update</button>
    </form>
  );
};
