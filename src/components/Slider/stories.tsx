import type { Meta, StoryObj } from '@storybook/react'
import { Settings } from 'react-slick'
import Slider from '.'

const meta = {
  title: 'Slider',
  component: Slider
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof Slider>

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-500 w-[30rem] py-40 border border-red-500 text-white text-center">
    {children}
  </div>
)

export const Horizontal: Story = {
  render: () => (
    <Slider settings={settings}>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
      <Slide>Slide 4</Slide>
    </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story = {
  render: () => (
    <Slider settings={verticalSettings}>
      <Slide>Slide 1</Slide>
      <Slide>Slide 2</Slide>
      <Slide>Slide 3</Slide>
      <Slide>Slide 4</Slide>
    </Slider>
  )
}
