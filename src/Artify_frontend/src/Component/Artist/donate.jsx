// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Button,
    Box,
    Typography,
} from "@mui/material";
import Swal from "sweetalert2";

const Donate = () => {
    const [openDonateDialog, setOpenDonateDialog] = useState(false);
    const [donationDetails, setDonationDetails] = useState({
        amount: "",
        message: "",
        name: "",
    });
    const [selectPage, setSelectPage] = useState("Artist");

    const handleOpenDonateDialog = () => setOpenDonateDialog(true);
    const handleCloseDonateDialog = () => setOpenDonateDialog(false);

    const handleDonate = () => {
        handleCloseDonateDialog();
        Swal.fire({
            icon: "success",
            title: "Thank you for your donation!",
            text: "Your donation has been successfully processed.",
            timer: 3000,
        })
    };

    return (
        <>
            <img
                src="images/Back4.jpg"
                alt=""
                className="w-screen object-cover h-[400px] rounded-md"
            />
            <Box className="p-10 space-y-4 rounded-lg bg-white h-fit mt-5" sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
                <h4 className="kanit-semibold text-4xl">
                    Support Us with Your Donation!
                </h4>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenDonateDialog}
                    sx={{
                        fontSize: "1.2rem",
                        padding: "10px 20px",
                        background: "linear-gradient(to right, #c471ed, #f64f59)", // Gradient สีม่วงอมชมพู
                        color: "white",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 20px rgba(196, 113, 237, 0.5)", // เงาสีม่วง
                        "&:hover": {
                            background: "linear-gradient(to right, #f64f59, #c471ed)", // สีสลับเมื่อ hover
                            transform: "scale(1.1)", // ขยายขนาดเล็กน้อย
                            boxShadow: "0 6px 25px rgba(246, 79, 89, 0.5)", // เงาเข้มขึ้น
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(255, 255, 255, 0.4)",
                            borderRadius: "inherit",
                            transform: "scale(0)",
                            opacity: 0,
                            transition: "all 0.5s ease",
                        },
                        "&:active::after": {
                            transform: "scale(1.5)",
                            opacity: 1,
                        },
                    }}
                >
                    Open Donate Dialog
                </Button>
            </Box>

            {/* Donate Dialog */}
            <Dialog open={openDonateDialog} onClose={handleCloseDonateDialog}>
                <DialogTitle>Donation Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill in your donation information below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Amount to donate ($)"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={donationDetails.amount}
                        onChange={(e) =>
                            setDonationDetails({
                                ...donationDetails,
                                amount: e.target.value,
                            })
                        }
                        InputProps={{
                            inputProps: { min: 1 },
                        }}
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        margin="dense"
                        label="Your message (optional)"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={donationDetails.message}
                        onChange={(e) =>
                            setDonationDetails({
                                ...donationDetails,
                                message: e.target.value,
                            })
                        }
                        sx={{ mt: 2 }}
                    />
                    <TextField
                        margin="dense"
                        label="Your name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={donationDetails.name}
                        onChange={(e) =>
                            setDonationDetails({
                                ...donationDetails,
                                name: e.target.value,
                            })
                        }
                        sx={{ mt: 2 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDonateDialog} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleDonate} color="primary" variant="contained">
                        Donate Now
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Donate;
