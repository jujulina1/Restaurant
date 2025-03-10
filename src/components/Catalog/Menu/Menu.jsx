import "../Menu/Menu.css"
import "../Item/Item"
import Item from "../Item/Item"

export default function Menu() {
    return (
      
            <section id="menu-page">
                <h2>Menu</h2>
                <section className="menu-catalog">
                    {/* <!-- ITEM---------*/}
                    <Item />
                    <Item />
                  
                    <div className="item">

                        <div className="item-image-container">
                            <img src="/images/blog-img-05.jpg" alt="example1" />
                        </div>
                        <h3 className="name-product">Sandwich with avocado</h3>
                        <p className="grams">1 Portion: 300gr</p>
                        <p className="calories">Calories: 235</p>

                        <div className="button-container">
                            <a className="button" href="#">More Info</a>
                        </div>

                    </div>

                    <div className="item">

                        <div className="item-image-container">
                            <img src="/images/blog-img-06.jpg" alt="example1" />
                        </div>
                        <h3 className="name-product">Sandwich with avocado</h3>
                        <p className="grams">1 Portion: 300gr</p>
                        <p className="calories">Calories: 235</p>

                        <div className="button-container">
                            <a className="button" href="#">More Info</a>
                        </div>

                    </div>

                    <div className="item">

                        <div className="item-image-container">
                            <img src="/images/gallery-img-06.jpg" alt="example1" />
                        </div>
                        <h3 className="name-product">Sandwich with avocado</h3>
                        <p className="grams">1 Portion: 300gr</p>
                        <p className="calories">Calories: 235</p>

                        <div className="button-container">
                            <a className="button" href="#">More Info</a>
                        </div>

                    </div>

                    <div className="item">

                        <div className="item-image-container">
                            <img src="/images/blog-img-04.jpg" alt="example1" />
                        </div>
                        <h3 className="name-product">Sandwich with avocado</h3>
                        <p className="grams">1 Portion: 300gr</p>
                        <p className="calories">Calories: 235</p>

                        <div className="button-container">
                            <a className="button" href="#">More Info</a>
                        </div>

                    </div>



                </section>
                {/* <!-- Display an h2 if there are no posts --> */}
                {/* <h2 className="no-avaliable">No avaliable motorcycles yet.</h2> */}
            </section>
        
    )


}