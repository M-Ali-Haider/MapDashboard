import BoxWrapper from "@/components/Wrappers/boxWrapper";
import { profileObjectives } from "@/utils/profileObjectives";
import AccountObjectiveCard from "./accountObjectiveCard";

const AccountSettingsObjectivesGrid = () => {
  return (
    <>
      <BoxWrapper styles={"flex-1"}>
        <h1 className="font-bold text-2xl mb-9">Profile Incomplete</h1>
        <div className="flex flex-wrap gap-6">
          {profileObjectives.map((item, index) => {
            return <AccountObjectiveCard key={index} item={item} />;
          })}
        </div>
      </BoxWrapper>
    </>
  );
};

export default AccountSettingsObjectivesGrid;
