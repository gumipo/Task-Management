import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserIcon } from "../../Redux/Users/selector";
import { push } from "connected-react-router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { signOut } from "../../Redux/Users/operations";
import logo from "../../assets/Image/Lograr-logo.png";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import HistoryIcon from "@material-ui/icons/History";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "white",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "white",
      boxShadow: "0px 3px 5px green",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white",
      boxShadow: "0px 3px 5px green",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const DrawerHeader = (props) => {
  const { window } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const selector = useSelector((state) => state);
  const icon = getUserIcon(selector);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const selectMenu = (path) => {
    dispatch(push(path));
  };

  const menus = [
    {
      func: selectMenu,
      label: "プロフィール",
      icon: <PersonIcon />,
      id: "register",
      value: "/product/edit",
    },
    {
      func: selectMenu,
      label: "タスクの作成",
      icon: <AddCircleIcon />,
      id: "profile",
      value: "/user/mypage",
    },
    {
      func: selectMenu,
      label: "これまでのタスク",
      icon: <HistoryIcon />,
      id: "history",
      value: "/order/history",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {menus.map((menu) => (
          <ListItem
            button
            key={menu.id}
            onClick={(event) => menu.func(event, menu.value)}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
        <ListItem button key="logout" onClick={() => dispatch(signOut())}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* ドロワーアイコン */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.headerlayout} variant="h6" noWrap>
            <StyledHeader>
              <h1>Lograr</h1>
              <img src={logo} alt="lograr-logo" />
              <StyledUserIcon>
                <img src={icon} alt="usericon" />
              </StyledUserIcon>
            </StyledHeader>
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

export default DrawerHeader;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  h1 {
    font-size: 25px;
    font-family: "Secular One", sans-serif;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

const StyledUserIcon = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;
