import React from 'react';
import './sidebar';
import { Link } from 'react-router-dom';
const Dropdown = ({ category }) => {
  const subCategories = getSubCategories(category);

  return (
    <div className='zeee' style={{ width: '100%', height: '200px' }}>
      <h2 className='category'>{category}</h2>
      <div className='flex'>
        <div className="flex-container">
          {subCategories.map((subCategoryGroup, index) => (
            <div key={index} className="flex-item">
              {subCategoryGroup.map((subCategory) => (
                <Link to={`/catalog/${subCategory}`}>
                <li className='lii' key={subCategory}>
                  {subCategory}
                </li>
              </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getSubCategories = (category) => {
  if (category === 'ხის მასალა') {
    return [
      ['ფანერა 1/2 ხარისხი', 'ფანერა 2/3 ხარისხი'],
      [ 'ფანერა 3/4 ხარისხი', 'ლამინირებული ფანერა'],
      ['ლამინატი',]

    ];
  } else if (category === 'სამშენებლო და სარემონტო') {
    return [
      ['პროდუქტი მალე დაემატება'],
    ];
  } else if (category === 'კერამიკა') {
    return [
      ['პროდუქტი მალე დაემატება'],
    ];
  }else if (category === 'აქსესუარები') {
    return [
      ['პროდუქტი მალე დაემატება'],
    ];
  } 

  return [];
};

export default Dropdown;