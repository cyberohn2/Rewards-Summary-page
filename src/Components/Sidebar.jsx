import homeIcon from '/home.svg'
import analyticIcon from '/chart-histogram.svg'
import earningIcon from '/sack-dollar.svg'
import settingsIcon from '/settings.svg'
import menuBurgerIcon from '/menu-burger.svg'
import closeMenuIcon from '/cross.svg'

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>

      {/* Sidebar */}
      <aside
        className={` lg:relative py-14 transition-all duration-300 ease-in-out bg-[rgb(196,221,234)] 
        ${sidebarOpen ? 'w-64 z-40 fixed left-0 inset-y-0 shadow-2xl' : 'w-16 lg:w-64'} lg:z-auto lg:flex-shrink-0`}
      >
         {/* Sidebar Toggle Button (Mobile Only) */}
      <img width={20} src={sidebarOpen ? closeMenuIcon : menuBurgerIcon}  className="lg:hidden absolute top-4 left-4 text-[rgb(14,30,39)] z-50 cursor-pointer"  onClick={toggleSidebar}/>

        <ul className="flex flex-col lg:items-start space-y-8 lg:space-y-6 py-8 lg:py-24 px-2 lg:px-4">
          <li className="sidebar-item flex items-center gap-3 p-3 lg:p-4 rounded-md lg:w-full text-center lg:text-left hover:bg-white hover:text-black transition-all duration-200 ease-in-out cursor-pointer">
            <img src={homeIcon} width={20} />
            <span className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>Dashboard</span>
          </li>
          <li className="sidebar-item flex items-center gap-3 p-3 lg:p-4 rounded-md lg:w-full text-center lg:text-left hover:bg-white hover:text-black transition-all duration-200 ease-in-out cursor-pointer">
          <img src={analyticIcon} width={20} />
            <span className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>Analytics</span>
          </li>
          <li className="sidebar-item flex items-center gap-3 p-3 lg:p-4 rounded-md lg:w-full text-center lg:text-left hover:bg-white hover:text-black transition-all duration-200 ease-in-out cursor-pointer">
          <img src={earningIcon} width={20} />
            <span className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>Earnings</span>
          </li>
          <li className="sidebar-item flex items-center gap-3 p-3 lg:p-4 rounded-md lg:w-full text-center lg:text-left hover:bg-white hover:text-black transition-all duration-200 ease-in-out cursor-pointer">
          <img src={settingsIcon} width={20} />
            <span className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>Settings</span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
