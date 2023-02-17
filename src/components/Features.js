import { ArrowPathIcon, WrenchScrewdriverIcon, CheckBadgeIcon,CurrencyDollarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Large Selection',
    description:
      'We have a wide range of products, from hand tools to power tools, from steel to wood, and from concrete to asphalt',
    icon: WrenchScrewdriverIcon
  },
  {
    name: 'Best Quality Tools',
    description:
      'Select from high-quality tools and equipment imported from around the world to take on any construction project',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Competitive Pricies',
    description:
      'We offer the best prices on high-quality goods, so you can get exactly what you need without breaking the bank. ',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Continuous Support',
    description:
      'Our team of experts will be there every step of the way to ensure that everything goes smoothly, so you won\'t have to worry about anything!',
    icon: ArrowPathIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Build faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Equip your project with the right tools to get the job done
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to provide high quality products with excellent service at remarkable prices.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
    
      </div>
    </div>
  )
}
