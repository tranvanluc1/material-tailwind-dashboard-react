import { addLink, useMaterialTailwindController } from '@/context';
import React, { useState } from 'react'

export function CustomLink() {
  const [controller, dispatch] = useMaterialTailwindController();

  const [dataLink, setDataLink] = useState({link: '', title: '', description: '', image: null})

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setDataLink({...dataLink, [name]: value})
  }

  const handleCreateLink = (e) => {
    e.preventDefault()
    addLink(dispatch, dataLink)
    console.log('Link added', dataLink)
  }

  return (
    <div className="mt-12">
      <form className='border border-solid rounded-md border-blue-gray-100 shadow-sm bg- p-4'>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Fill the link that you want to custom.</p>

            <div className="mt-10 grid gap-y-2">
              <div className="col-span-full">
                <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">URL</label>
                <div className="mt-2">
                  <input value={dataLink.link} onChange={handleChangeInput} type="text" name="link" id="link" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Custom meta tag</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Set up meta info.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                <div className="mt-2">
                  <input value={dataLink.title} onChange={handleChangeInput} type="text" name="title" id="title" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                <div className="mt-2">
                  <input value={dataLink.description} onChange={handleChangeInput} type="text" name="description" id="description" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" 
                          onChange={(e) => {
                            setDataLink({...dataLink, image: e.target.files[0]})
                          }}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" onClick={handleCreateLink} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CustomLink