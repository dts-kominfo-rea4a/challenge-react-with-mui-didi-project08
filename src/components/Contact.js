// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import * as R from "react";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Card, CardContent, Divider } from "@mui/material";
import {} from "./ContactForm.css";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email

  let card = "";

  if (Array.isArray(data)) {
    card = (
      <R.Fragment>
        <CardContent>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {data.map((data_single) => (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar sx={{ width: "75px", height: "75px" }} alt="" src={data_single.photo} />
                  </ListItemAvatar>
                  <ListItemText
                    primary=""
                    sx={{ marginLeft: "1.5em" }}
                    secondary={
                      <R.Fragment>
                        <p> {data_single.name}</p>
                        <p>{data_single.phone}</p>
                        <p>{data_single.email}</p>
                      </R.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </CardContent>
      </R.Fragment>
    );
  } else {
    card = (
      <R.Fragment>
        <CardContent>
          {/* <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}> */}
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ width: "75px", height: "75px" }} alt="" src={data.photo} />
            </ListItemAvatar>
            <ListItemText
              primary=""
              sx={{ marginLeft: "1.5em" }}
              secondary={
                <R.Fragment>
                  <p>{data.name}</p>
                  <p>{data.phone}</p>
                  <p>{data.email}</p>
                </R.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          {/* </List> */}
        </CardContent>
      </R.Fragment>
    );
  }

  return (
    <>
      <Card style={{ backgroundColor: "#9FE2BF" }}>{card}</Card>
    </>
  );
};

export default Contact;
