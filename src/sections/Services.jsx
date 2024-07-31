import {services} from "../constants"
export const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
        {sevices.map((service) => (
          <ServiceCard key={service.label} />
        ))}
    </section>
  )
}

