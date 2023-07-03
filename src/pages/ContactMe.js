import {
  Card, Stack, Typography, TextField, Input,
} from '@mui/material';
import React, { useState } from 'react';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

function ContactMe() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    fetch('https://formspree.io/f/myyqgarw', {
      method: 'POST',
      body: JSON.stringify(formJson),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to submit the form.');
        }
      })
      .catch((error) => error);

    setFullName('');
    setEmailAddress('');
    setMessage('');
  };
  return (
    <Stack>
      <Card sx={{
        width: { xs: '100%', sm: '80%', md: '40%' },
        alignSelf: 'center',
        paddingTop: '2%',
        paddingBottom: '5%',
        marginY: '5%',
      }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          <PermContactCalendarIcon
            color="primary"
            sx={{
              fontSize: '2rem',
              mb: '-0.4rem',
            }}
          />
          &nbsp;
          Contact Me
          &nbsp;
          <PermContactCalendarIcon
            color="primary"
            sx={{
              fontSize: '2rem',
              mb: '-0.4rem',
            }}
          />
        </Typography>
        <Stack sx={{
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          marginX: 'auto',
        }}
        >

          <form onSubmit={handleSubmit}>
            <Stack>
              <TextField
                helperText=" "
                label="Full Name"
                required
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
              <TextField
                helperText=" "
                label="Email address"
                required
                name="emailAddress"
                onChange={(e) => setEmailAddress(e.target.value)}
                value={emailAddress}
              />
              <TextField
                helperText=" "
                multiline
                rows={4}
                label="Message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <Input
                sx={{
                  marginTop: '5%',
                  height: '40px',
                  color: 'white',
                  backgroundColor: 'primary.main',
                  borderRadius: '5px',
                  border: 'none',
                  '&:hover': {
                    transform: 'scale(1.1)',

                  },

                }}
                disableUnderline
                variant="contained"
                type="submit"
                value="Get In Touch"
              />
            </Stack>
          </form>
        </Stack>
      </Card>

    </Stack>
  );
}

export default ContactMe;
