import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { Grid } from "@mui/material";
import contactsJSON from "./data/contacts.json";
import { useState } from "react";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [data, setData] = useState(contactsJSON);

  const addData = (value) => {
    const newData = [...data, value];
    setData(newData);
  };

  return (
    <div className="App">
      <Header></Header>
      <Grid style={{ marginTop: "50px" }} container spacing={2} columns={12}>
        <Grid item xs={6} md={6}>
          <div style={{ marginLeft: "100px", marginRight: "100px", justifyContent: "center" }}>
            <ContactForm addData={addData}></ContactForm>
          </div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div style={{ marginLeft: "100px", marginRight: "100px", justifyContent: "center" }}>
            <Contact data={data}></Contact>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
