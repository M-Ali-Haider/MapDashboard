import StatsWrapper from "@/components/Wrappers/StatsWrapper";
import { contactUs } from "@/utils/contactUs";
import ContactUsCard from "./card";
import HorizontalLayoutWrapper from "@/components/Wrappers/horizontalLayout";
import ContactUsChatBox from "./chatbox";

const JobSeekerContactUs = () => {
  return (
    <>
      <StatsWrapper>
        {contactUs.map((item, index) => {
          return <ContactUsCard key={index} item={item} />;
        })}
      </StatsWrapper>
      <HorizontalLayoutWrapper styles={"mt-10"}>
        <ContactUsChatBox />
      </HorizontalLayoutWrapper>
    </>
  );
};

export default JobSeekerContactUs;
