import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownConversation() {
  return (
    <Menu as="div" className="relative inline-block text-left mr-4">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full bg-white text-sm font-medium text-gray-700 focus:outline-none">
            <i className="bi bi-three-dots text-tertiary flex items-center justify-center text-base border rounded-full square hover:bg-primary hover:text-white" type="button" id="dropdownChat" data-bs-toggle="dropdown" aria-expanded="false" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm'
                        )}
                      >
                        Emoticons
                      </button>
                    )}
                  </Menu.Item>
                </form>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Delete Conversation
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}