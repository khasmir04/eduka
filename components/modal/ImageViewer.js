function ImageViewer({isOpen,toggleImage}) {

    return (
        <div className={(!isOpen ? 'hidden': 'absolute z-20 top-0 left-0 h-screen w-screen')}>
            <div className={'relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-transparent relative items-center'}>
            <div className="absolute bg-black opacity-60 inset-0 z-0" />
                <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10 relative">
                    <div className="absolute text-primary top-5 right-5 cursor-pointer" onClick={toggleImage}><i className="bi bi-x-circle-fill text-2xl"></i></div>
                    <div className="text-center">
                      <h2 className="mt-5 text-3xl font-bold text-gray-900">
                          TEST
                      </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageViewer
