import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');

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

    const formOnSubmitHandler = (e) => {
        e.preventDefault();
        props.fnAddContacts(name, phone, email, photo);
        setName('');
        setPhone('');
        setEmail('');
        setPhoto('');
    };

    return (
        <>
            <form onSubmit={formOnSubmitHandler}>
                <TextField fullWidth
                        value={name}
                        onChange={nameOnChangeHandler}
                        id="name"
                        label="Name *"
                        variant="filled" />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                        value={phone}
                        onChange={phoneOnChangeHandler}
                        id="phone"
                        label="Phone *"
                        variant="filled" />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                        value={email}
                        onChange={emailOnChangeHandler}
                        id="email"
                        label="Email *"
                        variant="filled" />

                <TextField fullWidth sx={{marginTop: '0.5em'}}
                        value={photo}
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