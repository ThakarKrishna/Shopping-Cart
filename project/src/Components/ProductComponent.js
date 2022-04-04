import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const ProductComponent = (props) => {

  // console.log(props.search)


  let products = useSelector((state) => state.allproducts.products)


  const sortedProducts = products.sort(function (a, b) {
    var nameA = a.title;
    var nameB = b.title;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });


  return (
    <>
      {products.length === 0 ? <h2 style={{ margin: "11rem auto 5rem 1rem",paddingLeft:"25rem" }}>Loading...</h2> : products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div className="col " key={id}>

            <Card style={{ border: "1px solid black", marginTop: "2rem", marginBottom:"2rem"}}>
              <Link style={{ textDecoration: "none", color: 'black' , textAlign: "center"}} to={`/product/${id}`}>
                <Card.Img style={{ width: "13rem", height: "14rem", padding: "1rem", }} variant="top" src={image} />
                <Card.Body>
                  <Card.Title style={{ marginTop: "1rem" }} >{title}</Card.Title>

                  <Card.Title style={{ fontSize: "1.3rem", marginTop: "1rem" }}>${price}</Card.Title>
                  {/* <Card.Footer   className="text-muted">{category}</Card.Footer> */}
                  <Button variant="outline-dark mt-3">Buy Now</Button>
                </Card.Body>
              </Link>

            </Card>


          </div>
        )

      })}



    </>
  )
}

export default ProductComponent;