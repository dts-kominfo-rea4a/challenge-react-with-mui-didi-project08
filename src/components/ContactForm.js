// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { TextField, Grid, Card, CardContent, Button } from "@mui/material";
import * as R from "react";
import {} from "./ContactForm.css";

const ContactForm = (action) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [email_input, setEmail] = R.useState("orang@orang.com");
  const [phone_input, setPhone] = R.useState("087771711777");
  const [name_input, setName] = R.useState("Orang");
  const [photo_input, setPhoto] = R.useState("http://placekitten.com/100");

  const [newContact, setnewContact] = R.useState({
    name: name_input,
    phone: phone_input,
    email: email_input,
    photo: photo_input
  });

  const AddNew = (event) => {
    event.preventDefault();

    action.addData({
      name: name_input,
      phone: phone_input,
      email: email_input,
      photo: phone_input
    });
  };

  const changeinputtextName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const changeinputtextPhoto = (event) => {
    event.preventDefault();
    setPhoto(event.target.value);
  };

  const changeinputtextPhone = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };

  const changeinputtextEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const card = (
    <R.Fragment>
      <CardContent>
        <form onSubmit={AddNew}>
          <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
            <div>
              <TextField
                style={{ maxWidth: "100%", width: "800px" }}
                id="name"
                label="Name"
                variant="filled"
                value={name_input}
                onChange={changeinputtextName}
                required
              ></TextField>
            </div>
            <div>
              <TextField
                id="phone"
                label="Phone"
                variant="filled"
                style={{ width: "800px" }}
                value={phone_input}
                onChange={changeinputtextPhone}
                required
              ></TextField>
            </div>
            <div>
              <TextField
                id="email"
                label="Email"
                variant="filled"
                style={{ width: "800px" }}
                value={email_input}
                onChange={changeinputtextEmail}
                required
              ></TextField>
            </div>
            <div>
              <TextField
                id="photo"
                label="Photo URL"
                variant="filled"
                style={{ width: "800px" }}
                value={photo_input}
                onChange={changeinputtextPhoto}
                required
              ></TextField>
            </div>
          </Grid>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center">
            <Button type="submit">Add New</Button>
          </Grid>
        </form>
      </CardContent>
    </R.Fragment>
  );

  return (
    <>
      <Card variant="outlined" style={{ backgroundColor: "#FFEFD5" }}>
        {card}
      </Card>
    </>
  );
};

export default ContactForm;
