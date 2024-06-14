# CRUD de Miscelánea en Ionic con Angular 17

Este proyecto es una aplicación CRUD para una miscelánea, desarrollada en Ionic con Angular 17. La aplicación permite gestionar productos de una miscelánea utilizando una API REST. Las funcionalidades incluyen la inserción, actualización, visualización y eliminación de productos. También se incluye un sistema de autenticación con datos falsos para redirigir a vistas específicas según el rol del usuario.

## Requisitos

- Node.js (versión 14 o superior)
- Angular CLI (versión 17)
- Ionic CLI

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Ejecuta la aplicación:

    ```bash
    ionic serve
    ```

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `/src/app` - Contiene los componentes y servicios principales de la aplicación.
  - `/components` - Componentes reutilizables.
  - `/pages` - Vistas principales (inicio de sesión, home, admin, CRUD de productos).
  - `/services` - Servicios para interactuar con la API.
- `/src/assets` - Contiene imágenes, videos y otros recursos estáticos.

## Funcionalidades

### Inicio de Sesión

La aplicación cuenta con una vista de inicio de sesión que utiliza datos falsos para la autenticación. Dependiendo de las credenciales ingresadas, el usuario será redirigido a una ventana de administración (admin) o a una ventana de inicio (home).

### Ventana Admin y Home

- **Admin**: Permite la gestión completa de productos, incluyendo la creación, actualización y eliminación.
- **Home**: Muestra una lista de productos disponibles en la miscelánea.

### CRUD de Productos

La aplicación permite realizar las siguientes operaciones con los productos:

- **Crear Producto**: Inserta un nuevo producto en la miscelánea.
- **Actualizar Producto**: Modifica los detalles de un producto existente.
- **Eliminar Producto**: Elimina un producto que ya no está disponible.

### Consumo de Contenido

La aplicación consume diferentes tipos de contenido como imágenes, texto y videos, utilizando `ngModel` para la vinculación de datos.

## Servicios y API

Se utiliza un servicio de Angular para interactuar con una API REST ficticia que maneja los datos de los productos de la miscelánea. Este servicio incluye métodos para:

- Obtener la lista de productos
- Crear un nuevo producto
- Actualizar un producto existente
- Eliminar un producto

### Ejemplo de Servicio

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api-ficticia.com/productos';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
