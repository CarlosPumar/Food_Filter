# FOOD FILTER

El usuario debe ser capaz de insertar un nombre de comida (parameter ‘food’) en un
buscador y obtener el resultado de la búsqueda en una lista.

Cada vez que el usuario introduzca o borre un carácter de la búsqueda, la lista debe ser
actualizada. Se ha usado el concepto de Throttling para mejorar la seguridad y rendimiento de la aplicación.
https://towardsdev.com/debouncing-and-throttling-in-javascript-8862efe2b563#:~:text=To%20throttle%20a%20function%20means,regularly%20at%20a%20fixed%20rate.

El ejercicio se debe de ver bien tanto en pantallas móviles como en pantallas de ordenador.

API usada: https://punkapi.com/documentation/v2

## How to run

### Development stage

```shell
docker-compose -f docker-compose.dev.yml up -d --build
```

localhost:3000

### Production stage

```shell
docker-compose -f docker-compose.prod.yml up -d --build
```

localhost:3001
