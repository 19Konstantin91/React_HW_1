import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";
import { useStyles } from "./use-styles";
import { Input, Button, Box } from "@mui/material";

export function ProfileForm({ firstName, lastName, phone }) {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (event) => {
    const field = event.target.getAttribute("data-name");
    setForm({
      ...form,
      [field]: event.target.value,
    });
  };

  const styles = useStyles();

  return (
    <Box className={styles.box}>
      <h2>Edit profile</h2>

      <Input
        className={styles.input}
        placeholder="First Name"
        inputProps={{
          "data-name": "firstName",
        }}
        onChange={handleChangeForm}
        value={form.firstName}
      />

      <Input
        className={styles.input}
        placeholder="Last Name"
        inputProps={{
          "data-name": "lastName",
        }}
        onChange={handleChangeForm}
        value={form.lastName}
      />

      <Input
        className={styles.input}
        placeholder="Phone"
        inputProps={{
          "data-name": "phone",
        }}
        onChange={handleChangeForm}
        value={form.phone}
      />

      <Button
        className={styles.button}
        onClick={() => {
          dispatch(updateProfile(form));
        }}
      >
        Save
      </Button>
    </Box>
  );
}
