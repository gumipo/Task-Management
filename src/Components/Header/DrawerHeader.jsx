import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/index";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserIcon,
  getUserId,
  getUserTask,
} from "../../Redux/Users/selector";
import { push } from "connected-react-router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { fetchUserTask, signOut } from "../../Redux/Users/operations";
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
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListAltIcon from "@material-ui/icons/ListAlt";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

const drawerWidth = 320;

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
      display: "flex",
      justifyContent: "space-between",
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
}));

const DrawerHeader = (props) => {
  const { window } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const icon = getUserIcon(selector);
  let usertask = getUserTask(selector);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(uid)
      .collection("usertask")
      .onSnapshot((snapshots) => {
        snapshots.docChanges().forEach((change) => {
          const task = change.doc.data();
          const changeType = change.type;
          switch (changeType) {
            case "added":
              usertask.push(task);
              break;
            case "modified":
              const index = usertask.findIndex(
                (task) => task.usertaskId === change.doc.id
              );
              usertask[index] = task;
              break;
            case "removed":
              usertask = usertask.filter(
                (task) => task.usertaskId !== change.doc.id
              );
              break;
            default:
              break;
          }
        });
        dispatch(fetchUserTask(usertask));
      });
    return () => unsubscribe();
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const selectMenu = (path) => {
    dispatch(push(path));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menus = [
    {
      func: selectMenu,
      label: "プロフィール",
      icon: <PersonIcon />,
      id: "register",
      value: "/profile",
    },
    {
      func: selectMenu,
      label: "タスクの作成",
      icon: <AddCircleIcon />,
      id: "profile",
      value: "/task/create",
    },
    {
      func: selectMenu,
      label: "現在の学習タスク",
      icon: <ListAltIcon />,
      id: "nowtask",
      value: "/now/task",
    },
    {
      func: selectMenu,
      label: "これまでの学習タスク",
      icon: <HistoryIcon />,
      id: "history",
      value: "/task/history",
    },
    {
      func: selectMenu,
      label: "みんなの学習タスク",
      icon: <EmojiPeopleIcon />,
      id: "userstask",
      value: "/task/history",
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {menus.map((menu) => (
          <ListItem button key={menu.id} onClick={() => menu.func(menu.value)}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
        <ListItem button key="logout" onClick={() => dispatch(signOut())}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"ログアウト"} />
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
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <StyledHeader>
              <StyledHeaderLogo>
                <h1>Lograr</h1>
                <img src={logo} alt="lograr-logo" />
              </StyledHeaderLogo>
              <StyledUserIcon>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <img src={icon} alt="usericon" />
                </Button>
              </StyledUserIcon>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    dispatch(push("/profile"));
                    setAnchorEl(null);
                  }}
                >
                  プロフィール
                </MenuItem>
                <MenuItem onClick={() => dispatch(signOut())}>
                  ログアウト
                </MenuItem>
                <MenuItem>ヘルプ(準備中)</MenuItem>
              </Menu>
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
    </div>
  );
};

export default DrawerHeader;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledHeaderLogo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 25px;
    font-family: "Secular One", sans-serif;
  }
  img {
    width: 40px;
    height: 40px;
    z-index: 10;
  }
`;

const StyledUserIcon = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;
