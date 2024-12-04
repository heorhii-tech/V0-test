import {TariffCard} from "./course-cards/index"

const TariffPlan = () => {
    return <div className="tariff-plan">
        {Array.from({ length: 3 }).map((_, index) => (
            <TariffCard key={index} index={index} />
        ))}
    </div>
}

export default TariffPlan;