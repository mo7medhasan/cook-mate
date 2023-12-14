import { Avatar, Modal } from '@mantine/core'
import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { useSustainabilityQuery } from '@/services/SustainabilityApi'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function FilterSustainabilityIcons({
  opened,
  setOpened,
  setsustainability_icons,
  sustainability_icons,
}) {
  const { data, isLoading, refetch } = useSustainabilityQuery()
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Sustainability Icons"
      centered
      classNames={{ title: '!text-3xl !text-black !font-semibold  ' }}
      size="70%"
      overlayColor="#23232399"
      radius="md"
    >
      <RadioGroup
        value={sustainability_icons}
        onChange={setsustainability_icons}
      >
        {data &&
          data?.data?.map((itemObj, index) => (
            <div
              key={index}
              className={
                ' grid grid-cols-4  justify-center gap-4 xl:justify-start '
              }
            >
              <h3 className="col-span-4 m-2  mt-5 text-2xl font-semibold text-primary">
                {Object.keys(itemObj)}
              </h3>
              {itemObj[Object.keys(itemObj)]?.map((itemCard) => (
                <RadioGroup.Option
                  className={({ checked, active }) =>
                    classNames(
                      checked ? 'border-transparent' : 'border-gray-300',
                      active ? 'border-primary ring-2 ring-primary' : '',
                      ' col-span-1 flex w-full cursor-pointer items-center justify-around  rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                    )
                  }
                  key={itemCard.id}
                  value={itemCard.id}
                >
                  <Avatar src={itemCard.image} className=" z-50 h-20" />
                  <h4>{itemCard.name}</h4>
                </RadioGroup.Option>
              ))}
            </div>
          ))}
      </RadioGroup>
    </Modal>
  )
}
