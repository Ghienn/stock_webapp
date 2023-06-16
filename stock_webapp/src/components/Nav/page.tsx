import { Disclosure } from '@headlessui/react'
import NavItem from './NavItem'


const navigation = [
  { name: 'Market', href: '/', current: true },
  { name: 'Notification', href: '/notification', },
  { name: 'About', href: '/',},
  { name: 'Contact', href: '/', },
]


const NavItemContainer = () => <>
    {navigation.map((item,index) => <NavItem item={item} key={index}></NavItem>)}
</>

export default function Nav() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-100">
          <body class="h-full">
          ```
        */}
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-white">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8"
                          src="https://icons8.com/icon/4VdgitiyspJ9/combo-chart"
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          <NavItemContainer />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
        </div>
      </>
    )
  }