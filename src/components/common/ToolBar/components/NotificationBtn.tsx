import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";

export const NotificationBtn = () => {
  const noti = Math.round(Math.random()) === 1;
  return (
    <div>
      {noti ? (
        <NotificationsActiveTwoToneIcon />
      ) : (
        <NotificationsNoneTwoToneIcon />
      )}
    </div>
  );
};

export default NotificationBtn;
