// src/Context/CartContext.js
import { createContext, useContext } from 'react';

// إنشاء السياق
const CartContext = createContext();

// تصدير السياق لاستخدامه في أجزاء أخرى من التطبيق
export default CartContext;

// هوك مخصص للوصول إلى البيانات من السياق
