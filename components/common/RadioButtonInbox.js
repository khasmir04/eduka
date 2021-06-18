import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export default function RadioButtonInbox() {
  let [plan, setPlan] = useState('Open')

  return (
    <RadioGroup value={plan} onChange={setPlan} className="flex flex-wrap md:p-2 bg-c_light rounded-xl">
      <RadioGroup.Option value="Open" className="w-full w-6/12 text-center">
        {({ checked }) => (
          <div className={'block md:py-4 w-full rounded-xl text-base cursor-pointer hover:text-primary ' + (checked ? 'bg-white text-primary font-medium' : 'bg-c_light text-tertiary font-normal')}><span className="hidden lg:inline">Open</span><i className="bi bi-envelope lg:hidden"></i></div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="Archived" className="w-full w-6/12 text-center">
        {({ checked }) => (
          <div className={'block md:py-4 w-full rounded-xl text-base cursor-pointer hover:text-primary ' + (checked ? 'bg-white text-primary font-medium' : 'bg-c_light text-tertiary font-normal')}><span className="hidden lg:inline">Archived</span><i className="bi bi-file-zip lg:hidden"></i></div>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}