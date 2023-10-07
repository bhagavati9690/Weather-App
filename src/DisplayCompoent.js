function ShowTemp({text}) {
    return (
        <>
            <div class="card text-bg-dark back">
                <img src="data:image/jpeg;base64,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" class="card-img" alt="..."/>
                <div class="card-img-overlay">
                    <div class="main" >
                        <div class="row">
                            <div class="col-sm-6 mb-3 mb-sm-0">

                                <h4 class="" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-smartwatch" viewBox="0 0 16 16">
                                    <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z"/>
                                    <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z"/>
                                    </svg>
                                REPORT:{text.description}
                                </h4>
                            

                                <h4 class="" aria-current="page" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                    </svg>
                                TEMP :{text.temp}"C </h4>
                                <h4 class="" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-thermometer-low" viewBox="0 0 16 16">
                                    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415z"/>
                                    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                                    </svg>
                                MIN TEMP : {text.temp_min}"C
                                </h4>

                                <h4 class="" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-thermometer-high" viewBox="0 0 16 16">
                                    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"/>
                                    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                                    </svg>
                                MAX TEMP :{text.temp_max}"C
                                </h4>

                            </div>

                            <div class="col-sm-6">
                            <h4 class="" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
                                <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
                                </svg>
                            HUMIDITY :{text.humidity}%
                            </h4>
                        
                            <h4 class="" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunrise-fill" viewBox="0 0 16 16">
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                SUNRISE :{new Date(text.sunrise * 1000).toLocaleTimeString()}
                            </h4>
                        
                            <h4 class="" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sunset-fill" viewBox="0 0 16 16">
                                <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                </svg>SUNSET :{new Date(text.sunset * 1000).toLocaleTimeString()}
                            </h4>

                            <h4 class="" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                            COUNTRY :{text.country}
                            </h4>
                            </div>   
                         </div>
                    </div>
                </div>
            </div>
         </>
    )
}

export default ShowTemp;