import Header from "./Header";
import CrmGroup from "./CrmGroup";
import CrmAcceleration from "./CrmAcceleration";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
        <Header/>
         <CrmGroup/>       
        <CrmAcceleration/>       
        <Footer/> 
            {children}
        </>
        );
}
export default Layout;