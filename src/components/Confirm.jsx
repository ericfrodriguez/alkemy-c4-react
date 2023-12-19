import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Confirm() {
    const [open, setOpen] = React.useState(false);
    const [snackbar, setSnackbar] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onConfirm = () => {
        console.log('Compra confirmada');
        handleClose();

        // Hacer validaciones necesarias
        setSnackbar(true);
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar(false);
    };

    return (
        <div>
            <Button variant='contained' color='warning' onClick={handleOpen}>Finalizar compra</Button>
            <Modal
                sx={{
                    borderRadius: 10
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirmacion
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Desea confirmar la compra?
                    </Typography>
                    <Button onClick={onConfirm}>Confirmar</Button>
                </Box>
            </Modal>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Compra realizada exitosamente!
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    );
}