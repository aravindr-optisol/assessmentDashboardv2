import NavItem from "../NavItem/NavItem"
const Layout=({children})=>{
return(
    <div className="AppLayout">
        <NavItem/>
        <div className="pageContent">
        {children}
        </div>
    </div>
)
}
export default Layout