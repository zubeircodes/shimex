import {PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/outline'

export default function Contact() {
    return (
    <div className="bg-gradient-to-b from-white to-purple-900 h-full w-full" >
        <p className=" text-center py-4 text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
            Contact Us
          </p>
       
        <div className=" px-7 mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 items-center">
            
            <div className=" align-center  mx-20 my-2  lg:flex-auto">
                <a href="tel:+2540716988148" class=" block max-w-sm  p-6 auto-rows-max bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WhatsApp</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"><PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />+2540716988148</p>
                </a>
            </div>
            <div className="align-center mx-20  my-2  lg:flex-auto">
                <a href="tel:+2450741226904" class=" items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WhatsApp</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"><PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />+2450741226904</p>
                </a>
            </div>
            <div className="align-center mx-20 my-2 lg:flex-auto">
                <a href="mailto:moomar24sss@gmail.com?subject=Me&body=Hello!" 
                    class=" items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Email</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"><EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />moomar24sss@gmail.com</p>
                </a>
            </div>
        </div>

        <footer className="mt-4"> 
            {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©  <a href="#" class="hover:underline">SSC™</a>. All Rights Reserved.
            </span>
        </footer>

    </div>

    )
}