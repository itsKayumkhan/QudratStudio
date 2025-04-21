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




const homeServices = [
    {
      name: "PR Service",
      link: "./Pr.html",
      images: [
        {
          src: "./img/pr1.png",
          alt: "PR Image 1",
          classes: "absolute w-36 object-contain left-1/3 rotate-6 -z-1 opacity-50"
        },
        {
          src: "https://res.cloudinary.com/dslgstzex/image/upload/v1741004302/2_v04von.png",
          alt: "PR Image 2",
          classes: "absolute w-36 rounded scale-0 object-contain left-1/2 opacity-50 -rotate-16 top-1/4 -z-1"
        }
      ],
      svg: {
        width: "50",
        height: "50",
        path: "M200 100.671L100 0L0 100.671H98.6668L0 200H200L101.333 100.671H200Z",
        gradient: {
          id: "paint0_linear_105_560",
          x1: "20.5",
          y1: "16",
          x2: "100",
          y2: "200",
          stops: [
            { stopColor: "#ACAAFF" },
            { stopColor: "#C0E8FF", offset: "1" }
          ]
        }
      }
    },
    {
      name: "Podcast",
      link: "./podcast.html",
      images: [
        {
          src: "./img/podcast1.jpg",
          alt: "Podcast Image 1",
          classes: "absolute w-36 rounded scale-0 object-contain left-1/3 rotate-6 -z-1 opacity-50"
        },
        {
          src: "./img/podcat2.jpg",
          alt: "Podcast Image 2",
          classes: "absolute w-36 rounded scale-0 object-contain left-1/2 opacity-50 -rotate-16 top-1/4 -z-1"
        }
      ],
      svg: {
        width: "100",
        height: "100",
        path: "M100 200C97.1048 105.262 94.738 102.91 0 100C94.738 97.1048 97.0903 94.738 100 0C102.895 94.738 105.262 97.0903 200 100C105.262 102.91 102.91 105.233 100 200Z",
        gradient: {
          id: "paint0_linear_118_208",
          x1: "14",
          y1: "26",
          x2: "179",
          y2: "179.5",
          stops: [
            { stopColor: "#E9B8FF" },
            { stopColor: "#F9ECFF", offset: "1" }
          ]
        }
      }
    },
    {
      name: "Standup",
      link: "./standup.html",
      images: [
        {
          src: "./img/stand1.jpg",
          alt: "Standup Image 1",
          classes: "absolute w-36 rounded scale-0 object-contain left-1/3 rotate-6 -z-1 opacity-50"
        },
        {
          src: "./img/stand2.jpg",
          alt: "Standup Image 2",
          classes: "absolute w-36 rounded scale-0 object-contain left-1/2 opacity-50 -rotate-16 top-1/4 -z-1"
        }
      ],
      svg: {
        width: "100",
        height: "100",
        path: "M100 200C97.1048 105.262 94.738 102.91 0 100C94.738 97.1048 97.0903 94.738 100 0C102.895 94.738 105.262 97.0903 200 100C105.262 102.91 102.91 105.233 100 200Z",
        gradient: {
          id: "paint0_linear_118_208",
          x1: "14",
          y1: "26",
          x2: "179",
          y2: "179.5",
          stops: [
            { stopColor: "#E9B8FF" },
            { stopColor: "#F9ECFF", offset: "1" }
          ]
        }
      }
    },
    {
      name: "Photoshoot",
      link: "./photoshoot.html",
      images: [
        {
          src: "./img/photo1.jpg",
          alt: "Photoshoot Image 1",
          classes: "absolute w-36 rounded scale-0 object-contain left-1/3 rotate-6 -z-1 opacity-50"
        },
        {
          src: "./img/photo2.jpg",
          alt: "Photoshoot Image 2",
          classes: "absolute w-36 rounded scale-0 object-contain left-1/2 opacity-50 -rotate-16 top-1/4 -z-1"
        }
      ],
      svg: {
        width: "100",
        height: "100",
        path: "M100 200C97.1048 105.262 94.738 102.91 0 100C94.738 97.1048 97.0903 94.738 100 0C102.895 94.738 105.262 97.0903 200 100C105.262 102.91 102.91 105.233 100 200Z",
        gradient: {
          id: "paint0_linear_118_208",
          x1: "14",
          y1: "26",
          x2: "179",
          y2: "179.5",
          stops: [
            { stopColor: "#E9B8FF" },
            { stopColor: "#F9ECFF", offset: "1" }
          ]
        }
      }
    }
  ];
  function renderServices() {
    const container = document.querySelector('#services-container'); // Add an id to your container
  if(container)
  {
    
    homeServices.forEach(service => {
      const serviceElement = document.createElement('div');
      serviceElement.classList.add('ser', 'flex', 'gap-8', 'w-full', 'relative', 'ser-podcast', 'md:flex-row', 'flex-col', 'my-6', 'border-t-[1px]', 'py-6');
  
      // Header with Service Name and Link
      const headerDiv = document.createElement('div');
      headerDiv.classList.add('flex', 'text-6xl', 'md:text-8xl', 'items-end');
  
      const link = document.createElement('a');
      link.href = service.link;
      link.classList.add('gradient-underline');
      link.innerText = `${service.name} `;
      
      const span = document.createElement('span');
      span.innerText = '.';
  
      headerDiv.appendChild(link);
      headerDiv.appendChild(span);
      serviceElement.appendChild(headerDiv);
  
      // SVG Element
      const svgDiv = document.createElement('div');
      svgDiv.classList.add('absolute', 'top-2/3', 'right-1', '-z-10', 'hidden', 'md:block', 'rotate-[90deg]');
  
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute('width', service.svg.width);
      svg.setAttribute('height', service.svg.height);
      svg.setAttribute('viewBox', "0 0 200 200");
      svg.setAttribute('fill', 'none');
  
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute('d', service.svg.path);
      path.setAttribute('fill', `url(#${service.svg.gradient.id})`);
  
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
      linearGradient.setAttribute('id', service.svg.gradient.id);
      linearGradient.setAttribute('x1', service.svg.gradient.x1);
      linearGradient.setAttribute('y1', service.svg.gradient.y1);
      linearGradient.setAttribute('x2', service.svg.gradient.x2);
      linearGradient.setAttribute('y2', service.svg.gradient.y2);
      linearGradient.setAttribute('gradientUnits', "userSpaceOnUse");
  
      service.svg.gradient.stops.forEach(stop => {
        const stopElement = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stopElement.setAttribute('stop-color', stop.stopColor);
        if (stop.offset) {
          stopElement.setAttribute('offset', stop.offset);
        }
        linearGradient.appendChild(stopElement);
      });
  
      defs.appendChild(linearGradient);
      svg.appendChild(path);
      svg.appendChild(defs);
      svgDiv.appendChild(svg);
  
      serviceElement.appendChild(svgDiv);
  
      // Images
      service.images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add(...image.classes.split(' '));
        serviceElement.appendChild(img);
      });
  
      container.appendChild(serviceElement); // Append the generated service element to the container
    });
  }else{
    console.log("")
  }
  }
  
  renderServices(); // Call the function to render services
  