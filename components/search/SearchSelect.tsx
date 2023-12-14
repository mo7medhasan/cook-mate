import { Select } from '@mantine/core'
import Icon from '../ui-assets/Icon'

const selectData = [
  { label: 'Recipe name', value: 'Recipe name' },
  { label: 'Recipe', value: 'Recipe',  },

]

export default function SearchSelect({ value, setValue }:{value:string,setValue:any}) {
  return (
    <span className="searchEl !z-[70] hidden !w-fit max-w-[7.5rem] !text-[#232323] md:flex">
      <Select
        value={value}
        onChange={setValue}
        data={selectData}
        variant="filled"
        size="xs"
        radius="md"
        className=" !z-[76]"
        classNames={{input:"!z-[70] !bg-shade"}}
        rightSection={<Icon name='arrow-down-1'  color={"#333333"} size={16} />}
        maxDropdownHeight="400px"
      />
    </span>
  )
}
