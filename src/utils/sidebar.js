import ApplicationsSVG from "@/assets/Sidebar/application";
import ContactUsSVG from "@/assets/Sidebar/contactUs";
import DashboardSVG from "@/assets/Sidebar/dashboard";
import ExploreJobsSVG from "@/assets/Sidebar/exploreJobs";
import FAQSVG from "@/assets/Sidebar/faq";
import SettingsSVG from "@/assets/Sidebar/setting";

export const userSidebar = [
  { name: "Dashboard", href: "/", svg: <DashboardSVG /> },
  { name: "Explore Jobs", href: "/explore-jobs", svg: <ExploreJobsSVG /> },
  { name: "Applications", href: "/applications", svg: <ApplicationsSVG /> },
  { name: "Account Settings", href: "/account-settings", svg: <SettingsSVG /> },
  { name: "Contact Us", href: "/contact-us", svg: <ContactUsSVG /> },
];

export const adminSidebar = [
  { name: "Dashboard", href: "/admin", svg: <DashboardSVG /> },
  {
    name: "Explore Jobs",
    href: "/admin/explore-jobs",
    svg: <ExploreJobsSVG />,
  },
  {
    name: "Applications",
    href: "/admin/applications",
    svg: <ApplicationsSVG />,
  },
  {
    name: "Account Settings",
    href: "/admin/account-settings",
    svg: <SettingsSVG />,
  },
  { name: "Contact Us", href: "/admin/contact-us", svg: <ContactUsSVG /> },
  { name: "Faq", href: "/admin/faq", svg: <FAQSVG /> },
];

export const jobSeekerSidebar = [
  { name: "Dashboard", href: "/job-seeker", svg: <DashboardSVG /> },
  {
    name: "Explore Jobs",
    href: "/job-seeker/explore-jobs",
    svg: <ExploreJobsSVG />,
  },
  {
    name: "Applications",
    href: "/job-seeker/applications",
    svg: <ApplicationsSVG />,
  },
  {
    name: "Account Settings",
    href: "/job-seeker/account-settings",
    svg: <SettingsSVG />,
  },
  { name: "Contact Us", href: "/job-seeker/contact-us", svg: <ContactUsSVG /> },
  { name: "Faq", href: "/job-seeker/faq", svg: <FAQSVG /> },
];
