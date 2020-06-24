import React from 'react'
import Link from 'next/link'

const RegistrationEmail =()=>(
    <div>
        <Link href='../../RegistrationPage'>
            <a>تسجيل شركة / جهة</a>
        </Link>


            {/* <a href="mailto:bldor.supp@gmail.com?Subject=من%20فضلك%20ضع%20إسم%20شركتكم%20هنا" target="_top" title="Press for send mail">
            <i className="fa fa-envelope"></i>
            للإشتراك
            </a> */}
        <style jsx>{`
            div{
                float: left;
                margin: 0;
                align-items: center;
                justify-content: center;
                padding-bottom: 1.4rem;
            }
            a{
                text-decoration: none;
                color: black;
                background: #fff;
                font-size: large;
                font-weight: bold;
                border-radius: 5px;
                padding: 8px;
            }
            `}</style>
            {/* <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');
            * {
            box-sizing: border-box;
            }

            body {
            background-color: #192a56;
            color: #fff;
            font-family: 'Amiri';
            flex-direction: column;
            display: flex;
            margin: 0;
            }
        `}</style> */}
    </div>
)
export default RegistrationEmail
