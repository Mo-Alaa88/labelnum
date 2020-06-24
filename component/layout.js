import Nav from "./nav";
import Footer from "./footer";

const Layout = (props)=>(
    <section>
        <Nav/>
        <main className="content"> 
           {props.children}
        </main>
        <Footer/>
    </section>
)
export default Layout