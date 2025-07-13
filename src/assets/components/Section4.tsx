import React from 'react'
import Section from './Section'
import Heading1 from './Heading1'
import IconLink from './IconLink'
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ContactForm from './ContactForm';
const Section4 = () => {
  return (
    <Section id='Contact'>
        <Heading1 content='Interested In Contacting Me ?'/>
        <p>For those interested in contacting me ,  I am available on the following platoforms below.
            Additionaly you can even write an email to me!
            Have a good day!
        </p>
        <div className='flex justify-center items-center flex-wrap gap-5'>
            <IconLink src = {"https://www.youtube.com/@magstargaming2193/featured"} icon={<FaYoutube />}/>
            <IconLink src = {"https://github.com/yaseenrehan123"} icon={<FaGithub />}/>
            <IconLink src = {"mailto:yr6190457@gmail.com"} icon={<SiGmail />}/>
        </div>
        <ContactForm/>
    </Section>
  )
}

export default Section4