import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export default function RadioButtonInbox() {
  let [plan, setPlan] = useState('Open')

  return (
    <RadioGroup value={plan} onChange={setPlan} className="flex flex-wrap p-2 bg-c_light rounded-xl">
      <RadioGroup.Option value="Open" className="w-full lg:w-6/12 text-center">
        {({ checked }) => (
          <span className={'block py-4 w-full rounded-xl text-xs md:text-base cursor-pointer ' + (checked ? 'bg-white text-primary font-medium' : 'bg-c_light text-tertiary font-normal')}>Open</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="Archived" className="w-full lg:w-6/12 text-center">
        {({ checked }) => (
          <span className={'block py-4 w-full rounded-xl text-xs md:text-base cursor-pointer ' + (checked ? 'bg-white text-primary font-medium' : 'bg-c_light text-tertiary font-normal')}>Archived</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}