// PR Services
const sectionsData = [
    {
        background: './img/11.jpg',
        step: '01',
        title: 'Lead Generation',
        description: 'We craft stories that captivate your audience and make your brand memorable.'
    },
    {
        background: './img/12.jpg',
        step: '02',
        title: 'Market Analysis',
        description: 'We analyze trends to give your business a competitive edge.'
    },
    {
        background: './img/13.jpg',
        step: '03',
        title: 'Brand Strategy',
        description: 'We build strong brand strategies that connect with your target audience.'
    },
    {
        background: "./img/13.jpg",
        step: "04",
        title: "Increase Traffic",
        description: "Drive more visitors to your website with effective strategies."
    },
    {
        background: "./img/14.jpg",
        step: "05",
        title: "Increase Sales",
        description: "Boost conversions with targeted marketing and engagement techniques."
    },
    {
        background: "./img/15.jpg",
        step: "06",
        title: "Conversion Optimization",
        description: "Maximize customer engagement and turn visitors into loyal customers."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".pr-servies");

    if (container) {
        sectionsData.forEach(section => {
            const sectionElement = document.createElement("section");
            sectionElement.className = "h-screen bg-cover bg-center relative flex items-center justify-center text-4xl font-bold section";
            sectionElement.style.backgroundImage = `url('${section.background}')`;
            sectionElement.setAttribute("data-step", section.step);

            sectionElement.innerHTML = `
            <div class="blackfill z-1 absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div class="max-w-xl z-10">
                <div class="flex items-center space-x-4">
                    <div class="bg-gradient text-white text-2xl font-bold w-14 h-14 flex items-center justify-center rounded-full">
                        <span class="italic">${section.step}</span>
                    </div>
                    <h1 class="text-5xl font-bold">
                        <span class="text-white">${section.title.split(" ")[0]}</span>
                        <span class="text-white bg-gradient italic px-1">${section.title.split(" ")[1] || ''}</span>
                    </h1>
                </div>
                <p class="text-gray-300 mt-4 text-lg">
                    ${section.description}
                </p>
            </div>
            `;

            container.appendChild(sectionElement);
        });
    }
});

// Photoshoot Services
const services = [
    "Portrait Photography",
    "Fashion Photography",
    "Wedding Photography",
    "Product Photography",
    "Event Coverage"
];

function createServiceItem(serviceName) {
    return `
        <div class="group flex justify-between items-center px-6 py-5 bg-white/10 rounded-full cursor-pointer transition   photo-service">
            <span class="text-2xl font-medium group-hover:text-white transition">${serviceName}</span>
            <div class="w-12 h-12 flex justify-center items-center border-2 border-white rounded-full group-hover:bg-white group-hover:border-white transition">
                <i class="fas fa-arrow-right   group-hover:text-black"></i>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const servicesContainer = document.getElementById("services-list");

    if (servicesContainer) {
        servicesContainer.innerHTML = services.map(createServiceItem).join("");
    }
});
