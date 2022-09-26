import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name_input, setName] = React.useState('Jhon Doe');
    const [phone_input, setPhone] = React.useState('089600000101');
    const [email_input, setEmail] = React.useState('jhondoe@gmail.com');
    const [photo_input, setPhoto] = React.useState('http://placekitten.com/500');

    const [newContact, setnewContact] = React.useState({
        name: name_input,
        phone: phone_input,
        email: email_input,
        photo: photo_input
    });

    const formOnSubmitHandler = (e) => {
        e.preventDefault();
        props.fnAddContacts({
            name: name_input,
            phone: phone_input,
            email: email_input,
            photo: photo_input
        });

        setName('Howdy');
        setPhone('08961324240101');
        setEmail('howdy@gmail.com');
        setPhoto('http://placekitten.com/500');
    };  

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
    };

    const phoneOnChangeHandler = (e) => {
        setPhone(e.target.value);
    };

    const emailOnChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const photoOnChangeHandler = (e) => {
        setPhoto(e.target.value);
    };

    return (
        <>
            <form onSubmit={formOnSubmitHandler}>
                <TextField fullWidth
                        value={name_input}
                        onChange={nameOnChangeHandler}
                        id="name"
                        label="Name *"
                        variant="filled" />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                        value={phone_input}
                        onChange={phoneOnChangeHandler}
                        id="phone"
                        label="Phone *"
                        variant="filled" />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                        value={email_input}
                        onChange={emailOnChangeHandler}
                        id="email"
                        label="Email *"
                        variant="filled" />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                        value={photo_input}
                        onChange={photoOnChangeHandler}
                        id="photo"
                        label="Photo URL *"
                        variant="filled" />
                        
                <Button type="submit" sx={{marginTop: '0.5em'}} variant="outlined">Add New</Button>
            </form>
        </>
    );
}

export default ContactForm;