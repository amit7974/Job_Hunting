import { Avatar, Indicator } from "@mantine/core";
import { Anchor, Asset, Bell, Settings } from "tabler-icons-react";

const Header = () => {
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
      <div className="flex  gap-3 items-center text-bright-sun-400"> 
    <Anchor className="h-10 w-10"/>
      <div className="text-3xl font-semibold">JobHook</div>
      </div>
      {/* <NavLinks/> */}
      <div className="flex gap-5 items-center">
   <a href="">Find Job</a>
   <a href="">Find Talent</a>
   <a href="">Upload Jobs</a>
   <a href="">About us</a>
</div>
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          <div>Amit</div>
          <Avatar src="avatar-9.png" alt="it's me" />
        </div>
        <div className="flex gap-2 items-center">
       </div>
<div className="bg-mine-shaft-900 p-1 rounded-full">
<Settings/>
</div>
<div className="bg-mine-shaft-900 p-1 rounded-full">
<Indicator color="bright-sun.7" offset={6} size={8} processing>

        <Bell/>
        </Indicator>
        </div>

        </div>  

        </div>

}

export default Header;