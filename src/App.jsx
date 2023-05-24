import { useState } from "react";
import "./App.css";
import { products } from "./data";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Button from '@mui/material/Button';

function App() {
  const [data, setData] = useState(products);

  const style = {
    color : "white",
    padding : "5px"
  }
  
  return (
    <div className="App">
      <AppBar position="sticky" sx={{top : '0px'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products ( {data.length} )
          </Typography>
          <Button>
          <Badge sx={style} badgeContent={1} color='secondary' >
            <ShoppingCartOutlinedIcon />
          </Badge>
          </Button>
        </Toolbar>
      </AppBar>
      <Products />
    </div>
  );
}

function Products() {
  const [data, setData] = useState(products);

  return (
    <div className="product">
      {data.map((item, index) => (
        <ProductsComp props={item} key={index} index={index} />
      ))}
    </div>
  );
}

function ProductsComp({ props, index }) {
  const { Price, MobileName, img, Brand, Offer, Spec } = props;

  return (
    <div className="products">
      <div className="image-div">
        <img src={img} alt={MobileName} width="100px" />
      </div>
      <div className="text-div">
        <div className="mob-spec">
          <h2>{MobileName}</h2>
          <p>{Brand}</p>
          <p className="spec">{Spec}</p>
        </div>
        <div className="price-tag">
          <h3>
            <span className="dollar">$</span>
            {Price}
          </h3>
        </div>
        <div className="button-tag">
          <button>Buy Now</button>
          <button
            onClick={() =>
              console.log({
                Mobile: MobileName,
                img: img,
                Brand: Brand,
                Price: Price,
                Spec: Spec,
                Offer: Offer,
              })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
