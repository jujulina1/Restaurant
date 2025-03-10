export default function Item() {
    return (
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
    )
}