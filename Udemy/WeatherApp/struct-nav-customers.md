Estructura de navegación

- Esta estructura de navegación se ajusta a los estándares de http rest nos permite claridad conceptual en como el usuario debería poder acceder a las distintas funcionalidades que ofrece la aplicación, independientemente de si usa o no la URL como manera de acceder a esta.

urlbase = http://localhost:3000
urlbase => Home
urlbase/customers => CustomersContainer //listado de clientes
urlbase/customers/:dni => CustomerContainer //elemento a seleccionar
urlbase/customers/:dni/edit => CustomerContainer //elemento a seleccionar
urlbase/customers/new => CustomerNewContainer
