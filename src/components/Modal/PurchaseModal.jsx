import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import useAuth from '../../hooks/useAuth'

const PurchaseModal = ({ closeModal, isOpen }) => {
  const { user } = useAuth()

  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const handleOrder = () => {
    if (!phone || !address) {
      alert("Please fill all fields")
      return
    }

    const orderData = {
      name: user?.displayName,
      email: user?.email,
      phone,
      address,
      time: new Date()
    }

    console.log("ORDER:", orderData)
    closeModal()
  }

  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none'
      onClose={closeModal}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-md bg-white p-6 backdrop-blur-2xl duration-300 ease-out 
            data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl rounded-2xl'
          >
            <DialogTitle
              as='h3'
              className='text-lg font-medium text-center leading-6 text-gray-900'
            >
              Review Info Before Purchase
            </DialogTitle>

            {/* Name */}
            <div className='mt-3'>
              <p className='text-sm text-gray-600 font-semibold'>Name</p>
              <input
                type="text"
                value={user?.displayName || "Unknown User"}
                readOnly
                className='w-full mt-1 p-2 border bg-gray-100 rounded-md'
              />
            </div>

            {/* Email */}
            <div className='mt-3'>
              <p className='text-sm text-gray-600 font-semibold'>Email</p>
              <input
                type="email"
                value={user?.email || "Unknown Email"}
                readOnly
                className='w-full mt-1 p-2 border bg-gray-100 rounded-md'
              />
            </div>

            {/* Phone Number */}
            <div className='mt-3'>
              <p className='text-sm text-gray-600 font-semibold'>Phone Number</p>
              <input
                type="text"
                placeholder='Enter phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='w-full mt-1 p-2 border rounded-md'
              />
            </div>

            {/* Address */}
            <div className='mt-3'>
              <p className='text-sm text-gray-600 font-semibold'>Address</p>
              <textarea
                placeholder='Enter your address'
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className='w-full mt-1 p-2 border rounded-md'
              ></textarea>
            </div>

            {/* Buttons */}
            <div className='flex mt-5 justify-around'>
              <button
                onClick={handleOrder}
                type='button'
                className='cursor-pointer inline-flex justify-center rounded-md 
                bg-green-100 px-4 py-2 text-sm font-medium text-green-900 
                hover:bg-green-200 focus:outline-none'
              >
                Place Order
              </button>

              <button
                type='button'
                className='cursor-pointer inline-flex justify-center rounded-md 
                bg-red-100 px-4 py-2 text-sm font-medium text-red-900 
                hover:bg-red-200 focus:outline-none'
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>

          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default PurchaseModal
