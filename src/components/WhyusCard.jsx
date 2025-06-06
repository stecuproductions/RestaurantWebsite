
const WhyusCard = ({ title, description, img, className }) => {
    return(
        <div className={`flex flex-col  text-center items-center justify-center ${className}`}>
            <img src={img} className="max-w-[300px] lg:max-w-null w-full  " alt=""/>
            <h3 className="text-white mt-4 text-2xl leading-tight ">{title}</h3>
            <p className="font-body text-white text-base max-w-[500px] leading-relaxed">{description}</p>
        </div>
    )

}
export default WhyusCard;