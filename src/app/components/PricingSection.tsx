import { Button } from './ui/button'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$9',
    description: 'Perfect for small projects and personal use',
    features: [
      'Basic components',
      'Email support',
      'Documentation access',
      'Community forum',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Ideal for professional developers and teams',
    features: [
      'All Starter features',
      'Priority support',
      'Advanced components',
      'Custom themes',
      'Team collaboration',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large organizations with custom needs',
    features: [
      'All Pro features',
      'Dedicated support',
      'Custom development',
      'White-label solution',
      'SLA guarantee',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300">
            Choose the plan that&apos;s right for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg ${
                tier.highlighted
                  ? 'bg-blue-900/30 border-2 border-blue-500'
                  : 'bg-gray-800'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {tier.name}
              </h3>
              <div className="text-4xl font-bold text-white mb-4">
                {tier.price}
                <span className="text-lg font-normal text-gray-400">/month</span>
              </div>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                size="lg"
                className={`w-full ${
                  tier.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-700 hover:bg-gray-600'
                } text-white`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 