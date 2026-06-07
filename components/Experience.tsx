const items = [
    "10+ Years Software Development",
    "Dashboard & Reporting Solutions",
    "Inventory Management Systems",
    "Point of Sale (POS)",
];

export default function Experience() {
    return (
        <section className="py-10">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-10">
                    Experience Highlights
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    {items.map((item) => (
                        <div
                            key={item}
                            className="bg-blue-50 border border-blue-100 rounded-xl p-6"
                        >
                            ✓ {item}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}