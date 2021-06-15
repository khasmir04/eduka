function oldlogin() {
    return (
        <div>
        <main className="relative bg-main bg-no-repeat bg-cover bg-center w-full h-screen lg:bg-none">
            <div className="bg-left-side bg-center bg-no-repeat bg-cover w-[60vw] absolute h-screen top-0 left-0 hidden lg:block">
                <div className="swiper-container loginSwiper h-full w-full">
									{/* <SwiperLogin></SwiperLogin> */}
                </div>
            </div>
            <div className="container h-full">
                <div className="flex flex-wrap h-full">
                <div className="hidden lg:block lg:w-7/12 flex items-center">
                    <div className="flex flex-col h-full items-center justify-center">
                    </div>
                </div>
                <div className="flex-1 lg:w-4/12 offset-lg-1 flex items-center">
                    <div className="w-full">
                    <form className="mb=[135px]">
                        <div className="flex flex-col items-center">
                        <h2 className="mb-6 fw-semi-bold lh-48">Sign in Now!</h2>
                        <div className="w-full mb-6">
                            <button type="submit" className="cursor-pointer rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                            Sign in With Google</button>
                        </div>
                        <div className="h-line flex flex-row w-full text-primary mb-12 text-sm leading-[21px]">Or</div>
                        </div>
                        <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                        <input type="email" className="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-10">
                        <div className="form-group has-success">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <div className="input-group">
                            <input type="password" className="form-control border-r-0" aria-label="passwordHelp" />
                            <span className="input-group-text bg-white border-l-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </span>
                            </div>
                            <div id="passwordHelp" className="form-text text-end">
                            <a href="#" className="text-secondary lg:text-primary no-underline">Forgot my password?</a>
                            </div>
                        </div>
                        </div>
                        <div className="">
                        <button type="submit" className="cursor-pointer rounded-xl">Sign in</button>
                        </div>
                    </form>
                    <p className="text-center fs-6 lh-base">
                        <span className="text-secondary lg:text-primary">Dont have an account yet? </span>
                        <a href="#" className="link-c-primary no-underline">Create an account</a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </main>
        </div>
    )
}

export default oldlogin
