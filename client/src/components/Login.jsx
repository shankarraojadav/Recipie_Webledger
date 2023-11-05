import { Box, Button, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../auth/firebaseConfig";
import { googleAuth } from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "./Notification";

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user, isLoading, isLoggedIn, error } = useSelector(
    (state) => state.login || {}
  );

  useEffect(() => {
    if (user && user.jwtToken) {
      navigate('/home');
      localStorage.setItem('jwt', user.jwtToken);
      console.log('hi');
    }
  }, [user, navigate]);

  //error handling
  const { updateNotification } = useContext(NotificationContext);

  //sigin handling function
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = result.user;
      const userData = {
        uid: uid,
        displayName: displayName,
        email: email,
        photoURL: photoURL,
      };

      dispatch(googleAuth(userData));
    } catch (error) {
      updateNotification("error", error.message);
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "40vh",
        }}
      >
        <Box
          component="img"
          src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1699165242/ezgif.com-crop_2_i2wz48.gif"
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Box
        component="img"
        src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1699113033/ezgif.com-crop_1_krzvpp.gif"
        style={{ width: "30vh", aspectRatio: 1, borderRadius: "50%" }}
      />
      <Button variant="outlined" sx={{ mt: "2vh" }} onClick={signInWithGoogle}>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            color: "#B15EFF",
            fontWeight: "bold",
            fontSize: "3vh",
          }}
        >
          <Google sx={{ fontSize: "3vh", mr: "1vh" }} />
          Sign In With Google
        </Typography>
      </Button>
    </Box>
  );
}
