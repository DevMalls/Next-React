import CrmCardIcon1 from "../public/images/crm-acceleration-1.png";
import CrmCardIcon2 from "../public/images/crm-acceleration-2.png";
import CrmCardIcon3 from "../public/images/crm-acceleration-3.png";
import Vector from "../public/images/Vector.png";
import DoubleLogo from "../public/images/double-logo.png";
import JMPLogo from "../public/images/jump-logo.png";
import RedEye from "../public/images/red-eye.png";
import Person1 from "../public/images/person1.png";
import Person2 from "../public/images/person2.png";

export const navLinks = [
  { name: "Platform", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Acceleration", path: "/" },
  { name: "Resources", path: "/" },
  { name: "Customer Stories", path: "/" },
];
export const cardDetails = [
  {
    icon: CrmCardIcon1,
    title: "Never update your contacts manually",
    text: "Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM. Save hours everyday to focus on critical activities",
  },
  {
    icon: CrmCardIcon2,
    title: "Engage instantly with prospects who show intent",
    text: "Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.",
  },
  {
    icon:CrmCardIcon3,
    title: " Outreach without leaving your CRM",
    text: "Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach.",
  },
];
export const vectorIcon = Vector;
export const CarouselDetails = [
  {
    footerContent: "Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%",
    authorLogo: DoubleLogo,
    authorName: "Adam Weinger",
    authorRole: "President,Double The Donation",
    authorImage: Person1
  },
  {
    footerContent: "From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner",
    authorLogo: JMPLogo,
    authorName: "Sam W",
    authorRole: "Head of Demand Generation , Jump",
    authorImage: Person2
  },
  {
    footerContent: " It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills",
    authorLogo: RedEye,
    authorName: "Gavin Tye",
    authorRole: " Sales Director , Red Eye",
    authorImage: Person1
  },
];


/* ******Previous-Next-Icon*********
export const previous = { 'float' : "right", 'position' : "relative", 'background-color': "#EBF6FF", 'height' : "50px", 'width' : "40px"};
export const next = {'position' : "relative", 'background-color': "#EBF6FF", 'height' : "50px", 'width' : "40px"};
export const paddingSliderIcon = { 'padding-bottom': '50px'};
export const colStyle =  {'margin':"0px", 'padding' : "0px"};
 */
