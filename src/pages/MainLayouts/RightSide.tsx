import UserProfileChart from "../UserProfileChart";
const RightSide = () => {

    return (
        <div className="sticky top-0 left-0 flex flex-col p-5 items-center gap-4 h-[100vh] border-l">

            {/* user profile and charts here  */}
            <UserProfileChart />

        </div>
    );
};

export default RightSide;