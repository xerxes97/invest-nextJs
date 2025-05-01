import LanguageBtn from "./LanguageBtn";
import LogoutBtn from "./LogoutBtn";
import NotificationBtn from "./NotificationBtn";
import ProfileBtn from "./ProfileBtn";

export const ToolBarOpcContainer = () => {
  return (
    <div className="flex gap-2">
      <LanguageBtn />
      <NotificationBtn />
      <ProfileBtn />
      <LogoutBtn />
    </div>
  );
};

export default ToolBarOpcContainer;
