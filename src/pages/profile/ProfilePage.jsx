import Footer from "../navfoot/Footer";
import Header from "../navfoot/Header";
import EditProfile from "./EditProfile";

const ProfilePage = () => {
  console.log("ProfilePage component rendering");
  return (
    <>
      <Header />
      <EditProfile />
      <Footer />
    </>
  );
};

export default ProfilePage;
