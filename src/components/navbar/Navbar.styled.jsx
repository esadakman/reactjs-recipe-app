import styled from "styled-components";

const NavStyle = styled.div`
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  & > a {
    color: black;
    text-decoration: none;
    text-align: left;
    transition: all 0.4s ease-in-out;
    padding: 0.7rem 1rem;
    font-weight: 500;
    :hover {
      color: ${({ theme }) => theme.colors.turqo} !important;
      background-color: ${({ theme }) => theme.colors.cardBack};
    }
  }
  /* align-items;center; */
  /* position: absolute; */
  /* right: 0; */
  /* background-color: red; */
`;

export const LinkStyle = styled.div`
  margin: auto 0;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  & > a {
    /* margin-left: 1rem; */

    text-decoration: none;
    text-transform: uppercase;
    color: white;
    transition: all 0.5s ease-in-out;
    padding: 0.7rem 0.5rem;
    border-radius: 5px;
    :hover {
      /* color: ${({ theme }) => theme.colors.turqo} !important; */
      color: white !important;
      background-color: ${({ theme }) => theme.colors.cardBack};

      /* border: 2px solid ${({ theme }) => theme.colors.turqo}; */
    }
  }
`;

export const HamburgerLink = styled.section`
  margin: auto 0;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: black;
  & > a {
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.4s ease-in-out;
    padding: 0.5rem 0.7rem;
    font-weight: 500;
    :hover {
      color: ${({ theme }) => theme.colors.turqo} !important;
      background-color: ${({ theme }) => theme.colors.cardBack};
    }
  }
`;

export default NavStyle;

// {isOpen ? (
//   <>
//     <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//       <IconButton
//         size="large"
//         aria-label="account of current user"
//         aria-controls="menu-appbar"
//         aria-haspopup="true"
//         onClick={handleOpenNavMenu}
//         color="inherit"
//       >
//         <MenuIcon />
//       </IconButton>
//       <Menu
//         id="menu-appbar"
//         anchorEl={anchorElNav}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "left",
//         }}
//         open={Boolean(anchorElNav)}
//         onClose={handleCloseNavMenu}
//         sx={{
//           display: { xs: "block", md: "none" },
//         }}
//       >

//         {pages.map((page) => (
//           <MenuItem key={page} onClick={handleCloseNavMenu}>
//             <Typography textAlign="center">
//               <NavLink
//                 style={({ isActive }) => ({
//                   color: "black",
//                   textDecoration: "none",
//                   fontWeight: isActive ? "bold" : "none",
//                 })}
//                 to={`/${page.toLocaleLowerCase()}`}
//               >
//                 {page}
//               </NavLink>
//             </Typography>
//           </MenuItem>
//         ))}
//       </Menu>
//     </Box>
//     <LocalDiningIcon
//       sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
//     />

//     <Typography
//       variant="h5"
//       noWrap
//       component="a"
//       href=""
//       sx={{
//         mr: 2,
//         display: { xs: "flex", md: "none" },
//         flexGrow: 1,
//         fontFamily: "monospace",
//         fontWeight: 700,
//         letterSpacing: ".3rem",
//         color: "inherit",
//         textDecoration: "none",
//       }}
//     >
//       {`<esad/>`}
//     </Typography>
//     {/* //! =========================================== */}
//     <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//       {pages.map((page) => (
//         <Button
//           key={page}
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "white", display: "block" }}
//         >
//           <NavLink
//             to={`/${page}`}
//             style={({ isActive }) => ({
//               color: isActive ? "white " : "#d8dfe979",
//               textDecoration: "none",
//             })}
//           >
//             {page.toLocaleLowerCase()}
//           </NavLink>
//         </Button>
//       ))}
//     </Box>

//     <Box sx={{ flexGrow: 0 }}>
//       <Tooltip title="My Github">
//         <IconButton
//           onClick={handleOpenUserMenu}
//           // component="a"
//           // href="https://github.com/esadakman"
//           // target="_blank"
//           sx={{ p: 0 }}
//         >
//           <Avatar alt="Mandalorian" src={Mando} />
//         </IconButton>
//       </Tooltip>
//       <Menu
//         sx={{ mt: "45px" }}
//         id="menu-appbar"
//         anchorEl={anchorElUser}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         keepMounted
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         open={Boolean(anchorElUser)}
//         onClose={handleCloseUserMenu}
//       >
//         {settings.map((setting) => (
//           <MenuItem key={setting} onClick={handleCloseUserMenu}>
//             <Typography textAlign="center">
//               <NavLink
//                 style={({ isActive }) => ({
//                   color: "black",
//                   textDecoration: "none",
//                   fontWeight: isActive ? "bold" : "none",
//                 })}
//                 to={`/${setting.toLocaleLowerCase()}`}
//               >
//                 {setting}
//               </NavLink>
//             </Typography>
//           </MenuItem>
//         ))}
//       </Menu>
//     </Box>
//   </>
// ) : (
//   <NavStyle>
//     <Tooltip title="My Github">
//       <IconButton
//         component="a"
//         href="https://github.com/esadakman"
//         target="_blank"
//         sx={{ p: 0 }}
//       >
//         <Avatar alt="Mandalorian" src={Mando} />
//       </IconButton>
//     </Tooltip>
//   </NavStyle>
// )}

// {settings.map((setting) => (
//   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//     <Typography textAlign="center">
//       <NavLink
//         style={({ isActive }) => ({
//           color: "black",
//           textDecoration: "none",
//           fontWeight: isActive ? "bold" : "none",
//         })}
//         to={`/${setting.toLocaleLowerCase()}`}
//       >
//         {setting}
//       </NavLink>
//     </Typography>
//   </MenuItem>
// ))}
