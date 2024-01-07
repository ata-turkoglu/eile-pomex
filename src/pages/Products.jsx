import React from "react";
import "./css/productPage.scss";
import ProductCard from "../components/productCard";
import pImg from "../assets/products/grout50c.png";

function Products() {
    return (
        <div className="products">
            <div className="categories">
                <ul>Onarım Güçlendirme Sistemleri</ul>
                <ul>Su Yalıtım Sistemleri</ul>
                <ul>Zemin Sistemleri</ul>
                <ul>Isı ve Ses İzolasyonu</ul>
                <ul>Sıvalar</ul>
                <ul>Yapıştırıcılar</ul>
                <ul>Fuga - Derz Dolgular</ul>
                <ul>Astar ve Destek Ürünleri</ul>
            </div>
            <div className="productList">
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
                <ProductCard image={pImg} text={"Eile Grout 50C"} />
            </div>
        </div>
    );
}

export default Products;
