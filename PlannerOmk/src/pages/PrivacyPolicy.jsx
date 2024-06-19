import { lazy } from 'react';
const Header = lazy(()=> import('../components/Header'));
const Footer = lazy(()=> import('../components/Footer'));

export default function PrivacyPolicy() {
  return (
    <> 
    <Header/>
    <div className='w-6/12 mx-auto'>
        <div className="privacy-policy">
      <h1 className="text-6xl font-bold mb-4">Privacy Policy</h1>
      <p className=' text-lg text-gray-500'>
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit omkplanner.com (the “Site”).
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">PERSONAL INFORMATION WE COLLECT</h2>
      <p className=' text-lg text-gray-500'>
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
      </p>
      <p className=' text-lg text-gray-500'>
        We collect Device Information using the following technologies:
      </p>
      <ul className="list-disc ml-5">
        <li className=' text-lg text-gray-500'>
          “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" className="text-blue-600">http://www.allaboutcookies.org</a>.
        </li>
        <li className=' text-lg text-gray-500'>
          “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
        </li>
        <li className=' text-lg text-gray-500'>
          “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
        </li>
      </ul>
      <p className=' text-lg text-gray-500'>
        Additionally when you add content on boards, we store information about your content such as timestamps of when boards are updated. We refer to this information as “OMK Planner Information.”
      </p>
      <p className=' text-lg text-gray-500'>
        When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and content you add to boards.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
      <p className=' text-lg text-gray-500'>
        We use the OMK Planner Information that we collect generally to display your boards and to enable basic functionality on the site. We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
      </p>
      <p className=' text-lg text-gray-500'>
        We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information <a href="https://policies.google.com/privacy" className="text-blue-600">here</a>. You can also opt-out of Google Analytics <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600">here</a>.
      </p>
      <p className=' text-lg text-gray-500'>
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">DO NOT TRACK</h2>
      <p className=' text-lg text-gray-500'>
        Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">YOUR RIGHTS</h2>
      <p className=' text-lg text-gray-500'>
        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">DATA RETENTION</h2>
      <p className=' text-lg text-gray-500'>
        When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">CHANGES</h2>
      <p className=' text-lg text-gray-500'>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">CONTACT US</h2>
      <p className=' text-lg text-gray-500'>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:team@omkplanner.com" className="text-blue-600">team@omkplanner.com</a>.
      </p>
    </div>
    </div>
    <Footer/>
    </>
  );
}
