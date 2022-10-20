import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./productable.scss";

export const rows = [
  {
    partNumber: "DRBDM063",
    img: "/assets/carbattery.jpg",
    product: "DRIVETEC 063 CAR BATTERY",
    brands: "DRIVETEC",
    price: "$40.90",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "51Wy1UhvbZL",
    img: "/assets/engineoil.jpg",
    product: "Auto Parts Engine Oil Viscosity",
    brands: "Turbo",
    price: "$25.00",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "HJKDM063",
    img: "/assets/engineoil2.jpg",
    product: "ENGINE OIL",
    brands: "Turbo",
    price: "$20.00",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "31CTWTB2",
    img: "/assets/engineoil.jpg",
    product: "HONDA 4 STROKE ENGINE OIL",
    brands: "Platinum",
    price: "$20.00",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "HRDDR3055",
    img: "/assets/wheel.jpg",
    product: "Platinum Plus - Wheel",
    brands: "Platinum",
    price: "$160.00",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "FGH543",
    img: "/assets/carbrush.jpg",
    product: "Short Handle Car and Motocycle Wheel Brush",
    brands: "Amazon",
    price: "$18.00",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
  {
    partNumber: "YABYBX3055",
    img: "/assets/carbattery.jpg",
    product: "YUASA 055 3000 SERIES CAR BATTERY -4 YEAR WARRANTY",
    brands: "YUASA",
    price: "$137.00",
    stock: "in stock",
    addtoCart: "Add to cart",
  },
];
const Productable = () => {
  return (
    <div className="productable">
      <TableContainer component={Paper} className="tablecontainer">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Part Number</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Brands</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Stock</TableCell>
              <TableCell className="tableCell">Add to cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.partNumber}>
                <TableCell className="tableCell">{row.partNumber}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.brands}</TableCell>
                <TableCell className="tableCell">{row.price}</TableCell>
                <TableCell className="tableCell">{row.stock}</TableCell>
                <TableCell className="tableCell">
                  <span> {row.addtoCart}</span>
                </TableCell>
                {/* <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Productable;
