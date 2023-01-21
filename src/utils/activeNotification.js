import addNotification from "react-push-notification";
import logo from "../assets/images/logo.jpg";

const activeNotification = (notification) => {
  addNotification({
    title: "Ayah app",
    subtitle: notification.surah.name || "",
    message: notification.text || "",
    theme: "darkblue",
    native: true,
    duration: 100000,
    closeButton: "X",
    icon: logo,
    onClick: () => console.log("Notification Clicked!"),
  });
};

export default activeNotification;
