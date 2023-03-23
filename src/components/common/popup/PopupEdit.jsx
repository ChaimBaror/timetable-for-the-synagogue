import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import { PlusSquareOutlined } from '@ant-design/icons';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { convertToZman } from '../../../utils/module';

// interface Props {
//     zmanim_Tfila?: any[];
//     title: string;
//     type: string
// }

export default function PopupEdit(props) {
  const { title, type } = props;
  const [Zmanim_Day, setZmanim_Day] = useLocalStorage(type, "");
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState();


  useEffect(() => {
    if (!products) {
      setProducts(Zmanim_Day)
    }
    else {
      setZmanim_Day(products)
    }
  }, [products])

  // function handleUserInput(filterText) {
  //   setFilterText(filterText);
  // }

  function handleRowDel(product) {
    const index = products.indexOf(product);
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  }

  function handleAddEvent() {
    const id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const product = {
      id: id,
      name: "",
      time: "",
      select: 'Permanent',
      category: type
    }
    const newProducts = [...products, product];
    setProducts(newProducts);
  }

  function handleProductTable(e) {
    const item = {
      id: e.target.id,
      name: e.target.name,
      value: e.target.value
    };

    const newProducts = products.map(product => {
      if (product.id == item.id) {
        return { ...product, [item.name]: item.value };
      }
      return product;
    });
    setProducts(newProducts);
  }


  return (
    <Popup
      trigger={
        <div className='title-zaman shadow '>
          {title}
        </div>
      } position="center center">
      <div className='popup-style'>
        {/* <SearchBar filterText={filterText} onUserInput={handleUserInput} /> */}
        <ProductTable
          products={products}
          filterText={filterText}
          onProductTableUpdate={handleProductTable}
          onRowAdd={handleAddEvent}
          onRowDel={handleRowDel}
        />
      </div>
    </Popup>
  );
}

function EditableCell({ cellData, onProductTableUpdate }) {

  return (
    <td>
      {cellData.type == 'select'?
      ( <select type={cellData.type} name={cellData.type} id={cellData.id} defaultValue={cellData.value} onChange={onProductTableUpdate}  >
            { Object.keys(convertToZman).map((option) => (
                <option key={option} value={option}>{convertToZman[option]}</option>
            ))}
        </select>
      ):
      <input type={cellData.type} name={cellData.name} id={cellData.id} defaultValue={cellData.value} onChange={onProductTableUpdate} />
      }
    </td>
  );
}

function ProductRow({ onDelEvent, onProductTableUpdate, product }) {
  return (
    <tr className="eachRow">
      <EditableCell onProductTableUpdate={onProductTableUpdate} cellData={{
        "type": "name",
        name:"name",
        value: product.name,
        id: product.id
      }} />
      <EditableCell onProductTableUpdate={onProductTableUpdate} cellData={{
        type: "select",
        name:"select",
        value: product.select,
        id: product.id
      }} />
      <EditableCell onProductTableUpdate={onProductTableUpdate} cellData={{
        name: product.select == 'Permanent' || !product.select ? "Permanent" : "time",
        type: product.select == 'Permanent' || !product.select ? "time" : "number",
        value: product.time,
        id: product.id
      }} />
      <EditableCell onProductTableUpdate={onProductTableUpdate} cellData={{
        type: "category",
        name:"category",
        value: product.category,
        id: product.id
      }} />
      <td className="del-cell">
        <input type="button" onClick={() => onDelEvent()} value="X" className="del-btn" />
      </td>
    </tr>
  );
}


function ProductTable({ products, filterText, onProductTableUpdate, onRowAdd, onRowDel }) {
  return (
    <div>
      <div type="button" onClick={() => onRowAdd()} className="btn btn-success pull-right"><PlusSquareOutlined /></div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>select</th>
            <th>time</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow
              onProductTableUpdate={onProductTableUpdate}
              product={product}
              onDelEvent={onRowDel}
              key={product.id} />))}
        </tbody>
      </table>
    </div>
  );
}
