/* eslint-disable react/prop-types */
'use client'
import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const PasswordDialog = ({ 
  isOpen, 
  onClose, 
  mode, // Mode can be 'forgot' or 'change'
  onSubmit 
}) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = mode === 'forgot' ? { email } : { newPassword, confirmPassword };
    onSubmit(formData);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-65" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <DialogPanel className="xs:w-full w-1/3  max-w-screen transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className=" w-full sm:flex sm:items-start">
                <div className="w-full mt-3 text-center sm:mt-0 sm:text-left space-y-6">
                  <DialogTitle as="h3" className="text-lg text-center font-medium leading-6 text-gray-900">
                    {mode === 'forgot' ? 'Forgot Password' : 'Change Password'}
                  </DialogTitle>
                  <form className="mt-4" onSubmit={handleFormSubmit}>
                    {mode === 'forgot' ? (
                      <div className="mb-4">
                        <label htmlFor="email" className="block xs:text-left text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                       className="w-full py-2 px-3 border-2 border-gray-200 shadow-sm rounded focus:outline-none focus:ring-red-500 focus:border-red-500 placeholder-gray-500 hover:border-blue-300 "
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    ) : (
                      <>
                        <div className="mb-4">
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div>
                      </>
                    )}
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      >
                        {mode === 'forgot' ? 'Send Reset Link' : 'Update Password'}
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default PasswordDialog;
