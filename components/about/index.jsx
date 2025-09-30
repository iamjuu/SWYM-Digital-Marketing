import React from 'react'
import Image from 'next/image'
import { AboutImage, TestHero } from '../../public/assets'
import { Zap, ShieldCheck, Clock3, MapPin, Server } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Affordable Innovation',
    description: 'Advanced solutions designed to fit your budget.'
  },
  {
    icon: ShieldCheck,
    title: 'Certified Engineers',
    description: 'Qualified experts who get it right the first time.'
  },
  {
    icon: Clock3,
    title: 'Faster Service',
    description: 'Quick response times and efficient project delivery.'
  },
  {
    icon: MapPin,
    title: 'UAE‑Wide Presence',
    description: 'Local expertise wherever your project is located.'
  },
  {
    icon: Server,
    title: 'Trusted Reliability',
    description: 'Secure, future‑ready solutions delivered consistently.'
  }
]

const index = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Left: Image */}
        <div className="w-[30%]">
          <Image
            src={AboutImage}
            alt="About Tabdeel"
            className="w-96 rounded-xl object-cover"
            priority
          />
        </div>

        {/* Right: Feature list with lucide icons */}
        <div className="w-[70%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 rounded-xl border border-[#FFCB05] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="shrink-0 rounded-full bg-green-100 text-green-700 p-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
