import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  products: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  // Método para cargar la lista de productos desde el servicio
  loadProducts() {
    this.productService.getProducts().subscribe(
      (data: any[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error loading products', error);
      }
    );
  }

  // Método para eliminar un producto
  async deleteProduct(id: number) {
    try {
      await this.productService.deleteProduct(id).toPromise();
      this.showToast('Producto eliminado correctamente');
      this.loadProducts(); // Recargar la lista de productos después de eliminar
    } catch (error) {
      console.error('Error deleting product', error);
      this.showToast('Error al eliminar el producto');
    }
  }

  // Método para mostrar un mensaje de Toast
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración del mensaje en milisegundos
      position: 'bottom' // Posición del mensaje en la pantalla
    });
    toast.present();
  }

  // Métodos opcionales:
  
  // Método para navegar a la página de creación de productos
  goToProductCreate() {
    this.router.navigateByUrl('/product-create');
  }

  // Método para navegar a la página de actualización de un producto específico
  goToProductUpdate(id: number) {
    this.router.navigateByUrl(`/product-update/${id}`);
  }
}
