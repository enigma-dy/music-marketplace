import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  LeftNavStyles,
  RightNavStyles,
  StyledButton,
} from "../../pages/Home/styles/NavStyles";
import DesktopMenu from "../../components/desktop-menu/DesktopMenu";
import MobileMenu from "../../components/mobile-menu/MobileMenu";
import {
  DesktopSearchIcon,
  MobileSearchIcon,
} from "../../components/search-icon/SearchIcon";
import { useCheckAuthStatusQuery } from "../../store/apiSlice"; // Import the API query hook
import { setCredentials } from "../../store/authSlice"; // If needed to dispatch user data

export default function Navigation() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Get user from Redux state
  const dispatch = useDispatch();

  // Fetch authentication status on component mount
  const { data: userData, isLoading, isError } = useCheckAuthStatusQuery();

  // Update Redux store with the user data once it's fetched
  useEffect(() => {
    if (userData?.user) {
      dispatch(setCredentials({ user: userData.user }));
    }
  }, [userData, dispatch]);

  const handleLoginClick = () => {
    navigate("/login", { replace: true });
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Redirect to profile page on click
  };

  // Loading state handling
  if (isLoading) {
    return <div>Loading...</div>; // Show loading screen while checking auth status
  }

  return (
    <LeftNavStyles>
      <DesktopMenu />
      <RightNavStyles>
        <DesktopSearchIcon />
        <MobileSearchIcon />
        {user ? (
          // If the user is authenticated, show the profile picture
          <img
            src={user.profilePicture || "/default-profile-pic.png"}
            alt="Profile"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            onClick={handleProfileClick} // Navigate to profile page on click
          />
        ) : (
          // If the user is not authenticated, show login and signup buttons
          <>
            <StyledButton label="Login" onClick={handleLoginClick} />
            <StyledButton label="Signup" onClick={handleLoginClick} />
          </>
        )}
      </RightNavStyles>
    </LeftNavStyles>
  );
}
