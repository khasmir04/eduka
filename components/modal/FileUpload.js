function FileUpload({isOpen,toggleUpload}) {

    return (
        <div className={(!isOpen ? 'hidden': 'absolute z-20 top-0 left-0 h-screen w-screen')}>
            <div className={'relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent relative items-center'}>
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
                <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 relative">
                    <div className="absolute text-primary top-5 right-5 cursor-pointer" onClick={toggleUpload}><i className="bi bi-x-circle-fill text-2xl"></i></div>
                    <div className="text-center">
                    <h2 className="mt-5 text-3xl font-bold text-gray-900">
                        File Upload!
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">Upload your new photo.</p>
                    </div>
                    <form className="mt-8 space-y-3" action="#" method="POST">
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-700 tracking-wide">Title</label>
                        <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="email" placeholder="mail@gmail.com" defaultValue="mail@gmail.com" />
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-700 tracking-wide">Attach Document</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                    <img className="absolute has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                                </div>
                                <p className="pointer-none text-gray-500 ">
                                    <span className="text-sm">Drag and drop</span> files here <br /> or 
                                    <span className="text-blue-600 hover:underline cursor-pointer"> select a file</span> from your computer
                                </p>
                                </div>
                                <input type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">
                        <span>File type: doc,pdf,types of images</span>
                    </p>
                    <div>
                        <button type="submit" className="my-5 w-full flex justify-center bg-primary text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-primary-dark shadow-lg cursor-pointer transition ease-in duration-300">
                            Upload
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FileUpload
