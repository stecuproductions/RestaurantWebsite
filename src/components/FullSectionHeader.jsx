import SectionHeader from "../Ui/SectionHeader"
export const FullSectionHeader = ({ top, center, bottom }) => {
    return (

        <>
            <SectionHeader>{top}</SectionHeader>
            <h2 className="text-white font-header leading-tight text-xl uppercase md:text-2xl lg:text-3xl">
                {center}
            </h2>
            <p className="text-base text-white leading-relaxed max-w-prose text-center">
                {bottom}
            </p>
        </>
    )
}

export default FullSectionHeader;