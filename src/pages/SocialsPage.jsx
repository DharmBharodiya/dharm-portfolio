import FloatingDock from '../components/FloatingDock/Dock'
import Header from '../components/Header'
import Links from '../components/Socials/Links'


function SocialsPage() {
  return (
    <div>
        <Header
            heading="Socials"
            description="Connect with dharm on several internet penthouses that he owns, you could connect or drop a follow for a drink :)"
            className={"w-[250px] sm:w-2xl mb-10 relative" } /* Removed margin-left */
         />
        <Links/>
        <div className='dark:text-white text-2xl text-black leading-6 mt-6'>
            <h1>Email me at <span className='relative group text-red-400 cursor-pointer'>
                mail.
                <span className='absolute text-sm bg-green-600 text-[#fff] rounded-md px-2 py-1 -left-20 -top-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    dharmbharodiya@gmail.com
                </span>
                </span>
                </h1>
            <h1>Much Love,</h1>
            <h1>Dharm</h1>
        </div>
        <FloatingDock/>
    </div>
  )
}

export default SocialsPage