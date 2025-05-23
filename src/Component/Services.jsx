
export default function ClientBenefits() {
  const services = [
    {
      title: "Lead Generation",
      description: "Our systems pinpoint and capture your ideal leads automatically.",
      imgSrc: '/Group10.png',
    },
    {
      title: "Lead Management",
      description: "Our systems track, engage, and organize your leads automatically.",
      imgSrc: "/Group17.png",
    },
    {
      title: "Follow Up",
      description: "Our systems follow up relentlessly—no prospect left behind.",
      imgSrc: "/Group18.png",
    },
    {
      title: "CRM Management",
      description: "Our systems keep your CRM organized and up-to-date—automatically.",
      imgSrc: "/Group20.png",
    },
    {
      title: "Custom Automations",
      description: "Our team builds custom automations tailored to your needs.",
      imgSrc: "/Group21.png",
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 overflow-hidden">
        What our Clients Get.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.slice(0, 3).map((service, index) => (
          <div key={index} className="border border-gray-500 p-6 rounded-lg bg-gray-900 ">
            <img src={service.imgSrc} alt={service.title} className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto mt-6">
        {services.slice(3).map((service, index) => (
          <div key={index} className="border border-gray-500 p-6 rounded-lg bg-gray-900 ">
            <img src={service.imgSrc} alt={service.title} className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}