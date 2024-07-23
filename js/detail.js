import CartController from './controllers/cartController.js';
import ProductDetailController from './controllers/productDetailController.js';
import { signInDialog } from '../public/js/popUpAction.js';

document.addEventListener('DOMContentLoaded', async () => {
    const cartController = new CartController();
    const productDetailController = new ProductDetailController();

    await cartController.init();  // Chờ cho việc khởi tạo hoàn thành

    const isLoggedIn = () => {
        const userId = localStorage.getItem('userID');
        return userId !== 'null';
    };

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('addCart')) {
            const productId = event.target.closest('.product-detail').dataset.id;
            console.log("detail productID: ", productId)
            if (isLoggedIn()) {
                cartController.addToCart(productId);
            } else {
                signInDialog.showModal();
                signInDialog.addEventListener('close', () => {
                    if (isLoggedIn()) {
                        cartController.addToCart(productId);
                    }
                }, { once: true });
            }
        }
    });

    const iconCart = document.querySelector('.icon-cart');
    iconCart.addEventListener('click', () => {
        if (isLoggedIn()) {
            cartController.view.toggleCart();
        } else {
            signInDialog.showModal();
            signInDialog.addEventListener('close', () => {
                if (isLoggedIn()) {
                    cartController.view.toggleCart();
                }
            }, { once: true });
        }
    });

    let userProfile = document.getElementById('user__profile');
    let path = '';

    userProfile.addEventListener('click', () => {
        if (isLoggedIn()) {
            console.log('user');
            path = "./view/user/profile/user_profile_UI.html";
            window.location.href = path;

        }
        else {
            signInDialog.showModal();
            signInDialog.addEventListener('close', () => {
                if (isLoggedIn()) {
                    cartController.view.toggleCart();
                }
            }, { once: true });
        }
    })
});

