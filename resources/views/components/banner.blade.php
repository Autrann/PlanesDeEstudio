<div class="sticky-top">
    <div class="header container-fluid">
            <div class="container">
                    <div class="row header">

                            <!-- Logo UASLP y logo de entidad -->
                            <div class="col-12 col-md-auto d-flex justify-content-center justify-content-md-start align-items-center">
                                    <a href="https://www.uaslp.mx">
                                            <img src="{{ asset('images/logoUASLP.png') }}" class="img-fluid logoUASLP" />
                                    </a>
                                    <p class="textoUASLP d-none"><a href="https://www.uaslp.mx">UASLP</a></p>

                                    <div class="divisorUASLP-ENTIDAD me-2 ms-2"></div>
                                    <div class="divisorUASLP-ENTIDADScroll d-none me-2 ms-3"></div>

                                    <!-- Colocar link y ruta de imagen de logo de entidad -->
                                    <a href="#" class="me-2">
                                         {{-- <img src="{{ asset('images/logoEntidad.png') }}" class="img-fluid logoUASLP" /> --}}
                                    </a>
                                    <p class="textoUASLP d-none me-2">
                                            <!-- Siglas de entidad -->
                                    </p>
                            </div>

                            <!-- Title -->
                            <div class="col-12 col-md d-flex align-items-center">
                                <div class="w-100 text-end">
                                    <h1 class="banner-title text-white fw-bold">Sistema de planes de estudio</h1>
                                </div>
                            </


                            <div class="col-12 col-md-auto flex-grow-1 justify-content-center justify-content-md-end align-items-center pt-md-0 pt-2 d-none d-md-block d-lg-block d-xl-block">
                                            <div class="h-75 d-flex flex-column flex-sm-row bd-highlight justify-content-end align-items-sm-end pt-sm-0 pt-5 align-items-center">
                                                    {{-- <div class="p-1 bd-highlight"><a href="https://www.uaslp.mx/Paginas/Perfiles/3429">Aspirantes</a> <span class="text-white"> | </span></div>
                                                    <div class="p-1 px-1 bd-highlight"><a href="https://www.uaslp.mx/Paginas/Perfiles/3396">Estudiantes</a><span class="text-white"> | </span></div>
                                                    <div class="p-1 px-1 bd-highlight"><a href="https://www.uaslp.mx/Paginas/Perfiles/2359">Egresados</a><span class="text-white"> | </span></div>
                                                    <div class="p-1 px-1 bd-highlight"><a href="https://www.uaslp.mx/Paginas/Perfiles/2360">Docentes</a><span class="text-white"> | </span></div>
                                                    <div class="p-1 px-1 bd-highlight"><a href="https://www.uaslp.mx/Paginas/Perfiles/2361">Administrativos</a></div> --}}
                                            </div>
                                    </div>

                                    <div class="col-12 col-md-auto d-block d-sm-none">
                                            <div class="row">
                                                    {{-- <div class="col px-1"><a href="https://www.uaslp.mx/Paginas/Perfiles/3429">Aspirantes</a> </div>
                                                    <div class="col px-1"><a href="https://www.uaslp.mx/Paginas/Perfiles/3396">Estudiantes</a></div>
                                                    <div class="col px-1"><a href="https://www.uaslp.mx/Paginas/Perfiles/2359">Egresados</a></div>
                                                    <div class="col px-1"><a href="https://www.uaslp.mx/Paginas/Perfiles/2360">Docentes</a></div>
                                                    <div class="col px-1"><a href="https://www.uaslp.mx/Paginas/Perfiles/2361">Administrativos</a></div> --}}
                                            </div>
                                    </div>
                    </div>
            </div>
    </div>
    <div class="fondoFooter" style="height:10px !important"></div>

    <nav class="navbar navbar-expand-lg menu">
            <div class="container">
                    <a class="texto-proceso" href="#"> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars" style="color: #09579d"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto">
                                    <li class="nav-item">
                                    <li class="nav-item">
                                        {{-- <a class="nav-link" href="{{ route('uaslp.select') }}">Inicio</a> --}}
                                    </li>
                                    </li>
                                    <!--si tiene submenu, se muestra dropdown-menu-->
                                    <li class="nav-item dropdown">
                                            {{-- <a class="nav-link dropdown-toggle" href="#" id="op1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Con submenu
                                            </a> --}}
                                            <ul class="dropdown-menu" aria-labelledby="op1">
                                                    <li>
                                                            <a class="dropdown-item" href="#">opción 1</a>
                                                    </li>
                                            </ul>
                                    </li>
                            </ul>
                    </div>
            </div>
    </nav>
</div>