// composables/useCompareProducts.js
import { ref, computed } from 'vue';

export default function useCompareProducts() {
    const selectedProducts = ref([]);

    const addProduct = (product) => {
        if (selectedProducts.value.length === 0) {
            selectedProducts.value.push(product);
        } else {
            // Only allow same category
            const currentCategory = selectedProducts.value[0].category;
            if (product.category === currentCategory) {
                const exists = selectedProducts.value.find(p => p.id === product.id);
                if (!exists) {
                    selectedProducts.value.push(product);
                }
            } else {
                alert("Only products from the same category can be compared. Click reset to change.");
            }
        }
    };

    const removeProduct = (productId) => {
        selectedProducts.value = selectedProducts.value.filter(p => p.id !== productId);
    };

    const resetComparison = () => {
        selectedProducts.value = [];
    };

    const canAddProduct = (product) => {
        return (
            selectedProducts.value.length === 0 ||
            selectedProducts.value[0].category === product.category
        );
    };

    return {
        selectedProducts,
        addProduct,
        removeProduct,
        resetComparison,
        canAddProduct,
    };
}