import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  NavStyles,
  RightNavStyles,
  StyledButton,
  DesktopDisplay,
  MobileMenuDisplay,
  Divider,
} from "../../pages/Home/styles/NavStyles";
import DesktopMenu from "../../components/desktop-menu/DesktopMenu";
import MobileMenu from "../../components/mobile-menu/MobileMenu";
import {
  DesktopSearchIcon,
  MobileSearchIcon,
} from "../../components/search-icon/SearchIcon";
import { useCheckAuthStatusQuery } from "../../store/apiSlice";
import { setCredentials } from "../../store/authSlice";
import { useMediaQuery } from "react-responsive";

export default function Navigation() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { data: userData, isLoading } = useCheckAuthStatusQuery();

  useEffect(() => {
    if (userData?.user) {
      dispatch(setCredentials({ user: userData.user }));
    }
  }, [userData, dispatch]);

  const handleLoginClick = () => {
    navigate("/login", { replace: true });
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <NavStyles>
      <img
        src="/Logo.png"
        alt="Logo"
        style={{ width: "10vw", height: "auto", maxWidth: "150px" }}
      />
      <Divider />
      <DesktopDisplay>
        <DesktopMenu />
      </DesktopDisplay>

      <MobileMenuDisplay>
        <MobileMenu />
      </MobileMenuDisplay>

      {!isMobile && (
        <RightNavStyles>
          <DesktopSearchIcon />
          {user ? (
            <img
              src={user.profilePicture || "/default-profile-pic.png"}
              alt="Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={handleProfileClick}
            />
          ) : (
            <>
              <StyledButton
                label="Login"
                onClick={handleLoginClick}
                color="blue"
              />
              <StyledButton
                label="Signup"
                onClick={handleLoginClick}
                color="red"
              />
            </>
          )}
        </RightNavStyles>
      )}
    </NavStyles>
  );
}
