import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion'
import { chevron } from '../../assets'

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && 'rotate-180'
          }`}
          src={chevron}
          alt='Chevron'
        />
      </>
    )}
    className='border-b'
    buttonProps={{
      className: ({}) => `flex w-full p-4 text-left`,
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
)

export default function App() {
  return (
    <div className='mx-2 my-4 border-t w-44' data-aos='fade-up'>
      <Accordion transition transitionTimeout={200} allowMultiple>
        <AccordionItem
          header={<h2 className='font-bold'>Categories</h2>}
          initialEntered
        >
          <ul>
            <li>T-shirt</li>
            <li>T-shirt</li>
            <li>T-shirt</li>
            <li>T-shirt</li>
            <li>T-shirt</li>
            <li>T-shirt</li>
            <li>T-shirt</li>
            <li>T-shirt</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          header={<h2 className='font-bold'>Price</h2>}
          initialEntered
        ></AccordionItem>

        <AccordionItem
          header={<h2 className='font-bold'>Size</h2>}
          initialEntered
        >
          <ul>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
