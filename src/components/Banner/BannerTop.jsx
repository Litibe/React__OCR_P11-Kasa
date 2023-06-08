export default function BannerTop(props) {
    return (
        <div className={props.class}>
            <img src={props.img} alt="" className="banner__img" />
            <h1 className="banner__title">{props.title}</h1>
        </div>
    );
}
