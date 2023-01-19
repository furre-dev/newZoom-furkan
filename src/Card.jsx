export default function Card({ icon, title }) {

    return (
        <section className="flex flex-col items-center justify-center w-44 h-24 border border-3 border-sky-300
         rounded-2xl flex-grow cursor-pointer hover:bg-sky-200">
            <div className="text-4xl">{icon}</div>
            <h2 className="text-lg font-bold font-lato">{title}</h2>
        </section>
    )
}