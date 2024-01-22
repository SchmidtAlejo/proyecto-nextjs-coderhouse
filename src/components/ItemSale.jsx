export default function ItemSale({ name, image }) {

    const divStyle = {
        backgroundImage: `url(${image})`
    };

    return (
        <a href="#a" className="home__sale__item">
            <div style={divStyle} className="home__sale__item__background" ></div>
            <p>{name}</p>
        </a>
    )
}