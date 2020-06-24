import Link from 'next/link'
// import Logo from '../image/logo.png'
const Nav =()=>(
    <nav className="topnav col-12" id="myTopnav">
        <Link href="../index">
            <h1>BLdOR</h1>
        </Link>

        {/* <Link href='../'>
            <a className=' col-2 logo'>
                <img src={Logo} alt='Logo'/>  
            </a>
</Link> */}


    <style jsx>{`
        h1 {
            font-size: xxx-large; 
            margin: 0;
        }
    `}</style>
    </nav>

)
export default Nav