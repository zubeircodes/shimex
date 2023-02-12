import {PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/outline'

export default function Contact() {
    return (
    <div className=" bg-black h-full w-full" >
        <h2 className=" text-gray-200 text-bold align-center"> Get in touch</h2>
       
        <div className=" mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 items-center">
            
            <div className=" align-center grid mx-2 my-2 grid-cols-1 lg:flex-auto">
                <a href="#" class=" block max-w-sm  p-6 auto-rows-max bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WhatsApp</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"><PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />12345678</p>
                </a>
            </div>
            <div className="align-center grid mx-2  my-2 grid-cols-1 lg:flex-auto">
                <a href="#" class=" items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WhatsApp</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"><PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />123456789</p>
                </a>
            </div>
            <div className="align-center  grid mx-2 my-2 grid-cols-1 lg:flex-auto">
                <a href="#" class=" items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Email</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"><EnvelopeIcon className="h-6 w-6 text-white" aria-hidden="true" />Bossman@shimex.com</p>
                </a>
            </div>
        </div>
    </div>
    )
}