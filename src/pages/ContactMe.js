import {
  Card, Stack, Typography, FormControl, TextField, Button,
} from '@mui/material';
import React from 'react';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

function ContactMe() {
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
          <FormControl>
            <TextField
              helperText=" "
              label="Full Name"
              required
            />
            <TextField
              helperText=" "
              label="Email address"
              required
            />
            <TextField
              helperText=" "
              multiline
              rows={4}
              label="Message"

            />
            <Button
              sx={{
                marginTop: '5%',
                height: '40px',
              }}
              variant="contained"
            >
              Get In Touch

            </Button>

          </FormControl>
        </Stack>
      </Card>

    </Stack>
  );
}

export default ContactMe;
