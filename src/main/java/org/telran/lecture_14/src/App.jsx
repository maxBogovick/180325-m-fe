import { useEffect, useState } from "react";
import "./App.css";

const fetchProduct = () => {
  return Promise.resolve([
    { discount: true, id: 1, name: 'Лопата садовая', price: 500, image: '🪚', description: 'Качественная садовая лопата из прочной стали, удобная рукоятка' },
    { discount: true, id: 2, name: 'Грабли металлические', price: 300, image: '🧹', description: 'Лёгкие грабли для уборки листьев и травы' },
    { discount: true, id: 3, name: 'Секатор обводной', price: 800, image: '✂️', description: 'Профессиональный секатор для обрезки веток и кустарников' },
    { discount: true, id: 4, name: 'Лейка пластиковая', price: 250, image: '💦', description: 'Лейка объёмом 10 литров для полива растений' },
    { discount: true, id: 5, name: 'Перчатки садовые', price: 150, image: '🧤', description: 'Универсальные садовые перчатки с резиновым покрытием' },
    { discount: true, id: 6, name: 'Тяпка', price: 400, image: '🪓', description: 'Тяпка для прополки и рыхления почвы' },
    { discount: true, id: 7, name: 'Садовая тачка', price: 2500, image: '🚜', description: 'Прочная тачка для перевозки грунта и растений' },
    { discount: false, id: 8, name: 'Шланг для полива', price: 700, image: '🐍', description: 'Гибкий шланг длиной 15 метров для полива' },
    { discount: true, id: 9, name: 'Опрыскиватель', price: 600, image: '💨', description: 'Ручной опрыскиватель для ухода за растениями' },
    { discount: true, id: 10, name: 'Садовая пила', price: 1200, image: '🪚', description: 'Пила для обрезки толстых веток и деревьев' },
    { discount: true, id: 11, name: 'Компостер', price: 3000, image: '♻️', description: 'Пластиковый компостер для переработки органических отходов' },
    { discount: true, id: 12, name: 'Садовая скамейка', price: 1800, image: '🪑', description: 'Деревянная скамейка для отдыха в саду' },
    { discount: null, id: 13, name: 'Газонокосилка', price: 8000, image: '✂️', description: 'Электрическая газонокосилка для ухода за газоном' },
    { discount: false, id: 14, name: 'Садовая сетка', price: 400, image: '🕸️', description: 'Сетка для защиты растений от вредителей' },
    { discount: true, id: 15, name: 'Удобрение универсальное', price: 200, image: '🌱', description: 'Минеральное удобрение для всех видов растений' },
    { discount: true, id: 16, name: 'Садовая арка', price: 2200, image: '🌿', description: 'Металлическая арка для вьющихся растений' },
    { discount: true, id: 17, name: 'Набор для полива', price: 1500, image: '💦', description: 'Набор для капельного полива растений' },
    { discount: false, id: 18, name: 'Садовая тележка', price: 3500, image: '🚜', description: 'Тележка для перевозки инструментов и грунта' },
    { discount: true, id: 19, name: 'Садовая фигурка', price: 800, image: '🧑🌾', description: 'Декоративная фигурка для украшения сада' },
    { discount: true, id: 20, name: 'Садовая беседка', price: 12000, image: '🏡', description: 'Деревянная беседка для отдыха в саду' },
  ]);
};

const orderByMap = () => {
  const map = new Map();
  map.set("default", (product1, product2) => product1.id - product2.id);
  map.set("idAsc", (product1, product2) => product2.id - product1.id);
  map.set("idDesc", (product1, product2) => product2.id - product1.id);
  map.set("priceAsc", (product1, product2) => product1.price - product2.price);
  map.set("priceDesc", (product1, product2) => product2.price - product1.price);
  map.set("nameDesc", (product1, product2) => product2.name.localeCompare(product1.name));
  map.set("nameAsc", (product1, product2) => product1.name.localeCompare(product2.name));
  return map;
}

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(new Map());

  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState(null);
  const [discount, setDiscount] = useState(null);

  const filterBy = (product) => {
    const from = (priceFrom || priceFrom === '' ) || 0;
    const to = priceTo || 10000;
    if (!discount) {
      return product.price >= from && product.price <= to;
    } else {
      const disc = discount === 'on';
      return product.price >= from && product.price <= to && product.discount === disc;
    }
  }

  const [sortBy, setSortBy] = useState("priceAsc");

  const orderBy = orderByMap();



  // {key = productId, value: {name, kid, descr, image, quantity}}
  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const existsProduct = cart.get(product.id);
      const newCart = new Map(prev);
      newCart.set(product.id, {
        ...product, quantity: existsProduct ? existsProduct.quantity + quantity : quantity
      });
      return newCart;
    });
  }

  const getOrderBy = () => {
    return orderBy.get(sortBy);
  }

  useEffect(() => {
    fetchProduct().then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <div className=" p-4">
        <select className="m-3 h-16" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="default">by default</option>
          <option value="priceAsc">by price asc</option>
          <option value="priceDesc">by price desc</option>
          <option value="idAsc">by id asc</option>
          <option value="idDesc">by id desc</option>
          <option value="nameAsc">by name asc</option>
          <option value="nameDesc">by name desc</option>
        </select>
        <input type="text" value={priceFrom} onChange={(e) => setPriceFrom(parseInt(e.target.value))}/>
        <input type="checkbox" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
      </div>
      {!selectedProduct && (<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products
          .sort(getOrderBy())
          .filter(item => filterBy(item))
          .map(product => (
          <div className="flex border p-4 rounded-2xl cursor-pointer items-center hover:bg-gray-100"
            key={product.id}
            onClick={() => {
              setSelectedProduct(product);
            }}
          >
            <div className="text-4xl mb-2 mr-4">{product.image}</div>
            <div className="flex flex-1 flex-col items-center justify-center ">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>)
      }

      {selectedProduct && (
        <div className="max-w-2xl">
          <button className="cursor-pointer m-2 p-2" onClick={() => setSelectedProduct(null)} >Back</button>
          <div className="text-8xl mb-2 mr-4">{selectedProduct.image}</div>
          <div className="flex-1">
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price}</p>
          </div>
          <div className="p-2">
            <label className="mr-4">Count</label>
            <input className="border px-2 w-16" type="number" value={quantity} min={1} onChange={(event) => {
              setQuantity(parseInt(event.target.value));
            }} />
          </div>
          <button
            className="bg-green-600 text-white rounded px-4 py-2 cursor-pointer hover:bg-green-800"
            onClick={() => { addToCart(selectedProduct, quantity) }}
          >Add to cart</button>
          <div>
            {cart.values().map(product => (
              <div>
                <p>{product.name}</p>
                <p>{product.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>);
}

export default App;
