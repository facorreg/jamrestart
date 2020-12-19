import styled from 'styled-components';

const HomeStyle = styled.div`
  grid-area: content;
  min-width: 100vw;
  max-width: 100vw;
  display: grid;
  margin: auto;
  grid-template-areas: 
    "categories productList ."
    ".          productList .";
  grid-template-columns: 15% 70% 15%;
  ${'' /* grid-template-rows: repeat(2,50%); */}
  background: linear-gradient(0deg, #ffffff 0%, #f2f2f2 100%);
  padding-top: 20px;
  
  .categories {
    grid-area: categories;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    font-size: 0.7em;

    > div:first-child {
      font-weight: bold;
    }

    > div:not(:first-child) {
      color: gray;
      cursor: pointer;
    }

    > div:not(:first-child):hover {
      color: black;
    }
  }

  .productList {
    grid-area: productList;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const ProductStyle = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 500px;
  margin: 20px;

  display: grid;
  grid-template-areas:
    "pImg pImg"
    "pBrand pBag"
    "pName pBag"
    "pPrice pBag";

  ${'' /* grid-template-columns: auto 90px; */}

  .product-img {
    grid-area: pImg;
  }

  .product-brand,
  .product-name,
  .product-price {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
    font-size: 0.5em;
    letter-spacing: 1px;
    margin-left: 10px;
  }

  .product-bag {
    margin-left: auto;
    cursor: pointer;
  }

  .product-brand {
    grid-area: pBrand;
  }

  .product-name {
    grid-area: pName;
  }

  .product-price {
    grid-area: pPrice;
    font-size: 0.7em;
  }

  .product-bag {
    grid-area: pBag;
  }
`

export { HomeStyle, ProductStyle };
