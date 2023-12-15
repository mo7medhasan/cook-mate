"use client"
import { Button, Menu } from '@mantine/core'
import React from 'react'
import Icon from '../ui-assets/Icon'

function Filter() {
  return (
    <Menu width={200} shadow="md" classNames={{dropdown	:' !rounded-[20px] !bg-dark/80',itemLabel:"text-[#fff] hover:text-dark",}}>
    <Menu.Target>
      <Button color="dark" size="md" radius="md" 
      className='text-white bg-dark ' rightSection={<Icon name='filter' color={"white"} size={18}/>}>Filter By 
       </Button>
    </Menu.Target>

    <Menu.Dropdown >
      <Menu.Item >
      Newest
      </Menu.Item>  <Menu.Item >
      Most popular
      </Menu.Item>
      <Menu.Item
    
      >
       Highest rated
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>
  )
}

export default Filter