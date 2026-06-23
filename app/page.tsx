import ProfileContainer from "./components/ProfileContainer";
import TextContainer from "./components/TextContainer";
import NavigationBar from "./components/NavigationBar";
import PortfolioContainer from "./components/PortfolioContainer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <ProfileContainer />
      <TextContainer />
      <PortfolioContainer />
    </>
  );
}
