import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  Layout, 
  Users, 
  Zap, 
  Code, 
  HelpCircle, 
  User 
} from 'lucide-react';
import logo from '../../../assets/ingenius-logo.png';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  badge?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, badge }) => {
  return (
    <Link 
      to="/" 
    className="w-full flex gap-2  text-gray-600 hover:text-gray-900"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto bg-gray-100 text-gray-600 text-xs py-0.5 px-2 rounded-full">
          {badge}
        </span>
      )}
    </Link>
  );
};

export function SideBar() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <img src={logo} alt="Ingenius Logo" className="w-6 h-6" />
          </div>
        </div>
        
        <nav className="px-4 space-y-1 flex flex-col">
          <NavItem icon={BarChart2} label="Reports" />
          <NavItem icon={Layout} label="Programs" />
          <NavItem icon={Layout} label="Course Studio" />
          <NavItem icon={Users} label="Users" />
        </nav>

        <div className="mt-auto px-4 pb-4 fixed bottom-0 w-64 bg-white border-r">
          <nav className="space-y-1">
            <NavItem icon={Zap} label="Upgrade" />
            <NavItem icon={Code} label="Api" />
            <NavItem icon={HelpCircle} label="Help" />
            <NavItem icon={User} label="Account" badge="0" />
          </nav>
        </div>
      </aside>
    </div>
  );
}


