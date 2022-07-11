import { AppBar, Badge, Box, createTheme, CssBaseline, Divider, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, styled, alpha, ThemeProvider, Toolbar, Typography, Collapse } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from '@inertiajs/inertia-react'
import route from 'ziggy-js';

//ICONS
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const drawerWidth = 240;

export const theme = createTheme({
    components: {
        typography: {
            //Arapey
            h1: {
                color: 'primary.main',
            },
            h2: {
                color: 'primary.main',
            },
            h3: {
                color: 'primary.main',
            },
            h4: {
                color: 'primary.main',
            },
            h5: {
                color: 'primary.main',
            },
            h6: {
                color: 'primary.main',
            },
        },
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              borderRadius: 25,
            },
          },
        },
    },
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const pages = [
    {
        title: 'Perfil',
        link: route('home'),
        pages: [
            {
                title: 'Calendario',
                link: route('home'),
                icon: <CalendarMonthIcon />
            },
            {
                title: 'Historial',
                link: route('home'),
                icon: <HistoryIcon />
            }
        ],
        icon: <PersonIcon />
    },
    {
        title: 'Bandeja de entrada',
        link: route('home'),
        icon: <MailIcon />
    },
    {
        title: 'Organigrama',
        link: route('home'),
        icon: <CorporateFareIcon />
    },
]

export default function Layout({ title, pageTitle, children, ...rest }) {
    useEffect(() => {
        document.title = title;
    }, [title])

    //MENU DRAWER
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //MENU CLLAPSE
    const [openCollapse, setOpenCollapse] = React.useState(true);

    const handleClickCollapse = () => {
        setOpenCollapse(!openCollapse);
    };


    //MENUS
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <Typography>
                    Mensajes
                </Typography>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Typography>
                    Notificaciones
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Typography>
                    Perfil
                </Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* APPBAR */}
                <AppBar>
                    <Container maxWidth={false}>
                        <Toolbar disableGutters>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                AXEN
                            </Typography>

                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                            <Box sx={{ flexGrow: 1 }} />

                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>

                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>

                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>      
                            </Box>

                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}

                {/* DRAWER MENU */}
                <Drawer
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <Typography variant='h4'>
                            AXEN
                        </Typography>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {pages?.map(page => (
                            <React.Fragment key={page.title}>
                                <ListItem
                                    disablePadding
                                    onClick={page.pages ? handleClickCollapse : handleDrawerClose}
                                    sx={{ textTransform: "none", color: "inherit" }}
                                >
                                    <ListItemButton
                                        component={page.pages ? "div" : Link}
                                        href={page.pages ? null : page.link}
                                    >
                                        <ListItemIcon>
                                            {page.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={page.title} />
                                    </ListItemButton>
                                    {page.pages ? (openCollapse ? <ExpandLess /> : <ExpandMore />) : ""}
                                </ListItem>
                                {page.pages && page.pages.length && page.pages.map(collapsePage => (
                                    <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton
                                                onClick={handleDrawerClose}
                                                sx={{ pl: 4 }}
                                                component={Link}
                                                href={collapsePage.link}
                                            >
                                                <ListItemIcon>
                                                    {collapsePage.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={collapsePage.title} />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                ))
                                }
                            </React.Fragment>
                        ))}
                    </List>
                </Drawer>

                <Toolbar />

                {children}    

            </ThemeProvider>
        </React.Fragment>
    )
} 