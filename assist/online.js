document.addEventListener('DOMContentLoaded', function() {
  
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
   
    if (username === 'hab1' && password === '1234') {
      alert('Login successful!');
      
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('mainPage').style.display = 'block';
    } else {
      alert('Invalid username or password');
    }
  });

  const properties = {
    hotels: [
      {
        title: "Addis Ababa Grand Hotel",
        image: "room8.jpg",
        location: "Addis Ababa, Ethiopia",
        price: "2,900 birr per night",
        date: "Available from APRIL 17, 2025"
      },
      {
        title: "Ethiopian Paradise Hotel",
        image: "ip9.jpg",
        location: "Addis Ababa, Ethiopia",
        price: "2,900 birr per night",
        date: "Available from APRIL 17, 2025"
      },
      {
        title: "Blue Nile Hotel",
        image: "room1.jpg",
        location: "Addis Ababa, Ethiopia",
        price: "2,900 birr per night",
        date: "Available from APRIL 17, 2025"
      }
    ],
    castles: [
      {
        title: "Gondar Royal Castle",
        image: "ip12.jpg",
        location: "Gondar, Ethiopia",
        price: "3,500 birr per night",
        date: "Available from APRIL 17, 2025"
      }
    ],
    unique: [
      {
        title: "Tropical Tree House",
        image: "room4.jpg",
        location: "Addis Ababa, Ethiopia",
        price: "4,200 birr per night",
        date: "Available from APRIL 17, 2025"
      },
      {
        title: "Amazing Pool Villa",
        image: "ip18.jpg",
        location: "Addis Ababa, Ethiopia",
        price: "4,800 birr per night",
        date: "Available from APRIL 17, 2025"
      }
    ],
    packages: [
      {
        title: "Addis Ababa Explorer Package",
        image: "ip13.jpg",
        price: "5,500 birr",
        description: "3 nights in premium hotels with city tours"
      },
      {
        title: "Castle & Hotel Combo",
        image: "ip12.jpg",
        price: "6,500 birr",
        description: "Explore Gondar's castles with luxury accommodation"
      },
      {
        title: "Luxury Tropical Escape",
        image: "ip21.jpg",
        price: "7,200 birr",
        description: "Private villa with all-inclusive services"
      }
    ]
  };


  function createPropertyCard(property, featured = false) {
    const card = document.createElement('div');
    card.className = featured ? 'property-card featured' : 'property-card';
    card.innerHTML = `
      <div class="image-container">
        <img src="${property.image}" alt="${property.title}">
        <div class="image-caption">
          <h3 class="property-title">${property.title}</h3>
          <p class="property-price">${property.price}</p>
        </div>
      </div>
      <div class="property-info">
        <p class="property-location">${property.location}</p>
        <p class="property-date">${property.date}</p>
        ${featured ? '<p class="property-description">Experience luxury and comfort in the heart of Addis Ababa with top-notch amenities!</p>' : ''}
        <button class="book-now">Book Now</button>
      </div>
    `;
    
    card.querySelector('.book-now').addEventListener('click', function() {
      alert(`Booking ${property.title} for ${property.price}`);
     
    });
    
    card.querySelector('img').addEventListener('click', function() {
      window.location.href = 'booking.html';
    });
    return card;
  }

  function createPackageCard(pkg) {
    const card = document.createElement('div');
    card.className = 'package-card';
    card.innerHTML = `
      <div class="package-image-container">
        <img src="${pkg.image}" alt="${pkg.title}">
      </div>
      <div class="package-details">
        <h3 class="package-title">${pkg.title}</h3>
        <p class="package-description">${pkg.description}</p>
        <div class="package-price">${pkg.price}</div>
        <button class="book-now">Book Package</button>
      </div>
    `;
   
    card.querySelector('.book-now').addEventListener('click', function() {
      alert(`Booking package: ${pkg.title} for ${pkg.price}`);
    
    });
    return card;
  }


  function loadProperties() {
    
    const hotelGrid = document.querySelector('#hotels .property-grid');
    properties.hotels.forEach((hotel, index) => {
      const card = createPropertyCard(hotel, index === 0);
      hotelGrid.appendChild(card);
    });

   
    const castleGrid = document.querySelector('#castles .property-grid');
    properties.castles.forEach(property => {
      castleGrid.appendChild(createPropertyCard(property));
    });

    
    const uniqueGrid = document.querySelector('#unique .property-grid');
    properties.unique.forEach(property => {
      uniqueGrid.appendChild(createPropertyCard(property));
    });

    
    const packageGrid = document.querySelector('.package-grid');
    properties.packages.forEach(pkg => {
      packageGrid.appendChild(createPackageCard(pkg));
    });
  }


  document.querySelector('.package-search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.package-search-input').value.toLowerCase();
    const packages = document.querySelectorAll('.package-card');
    packages.forEach(pkg => {
      const title = pkg.querySelector('.package-title').textContent.toLowerCase();
      pkg.classList.toggle('hidden', !title.includes(searchTerm));
    });
  });


  const dateInputs = document.querySelectorAll('.form-control');
  dateInputs.forEach(input => {
    input.addEventListener('focus', function() {
      if (this.getAttribute('placeholder') !== null) {
        this.type = 'date';
      }
    });
  });


  document.querySelector('.search-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    if (!checkin || !checkout) {
      alert('Please select both check-in and check-out dates');
      return;
    }
    alert(`Searching for hotels in ${location} from ${checkin} to ${checkout}`);
  });

 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.addEventListener('mouseover', function() {
      heroImage.style.transform = "rotate(10deg) scale(1.1)";
    });
    heroImage.addEventListener('mouseout', function() {
      heroImage.style.transform = "rotate(0deg) scale(1)";
    });
    heroImage.addEventListener('click', function() {
      const reaction = document.createElement('div');
      reaction.innerText = "Wow, you look amazing!";
      reaction.classList.add('reaction');
      document.body.appendChild(reaction);
      setTimeout(() => {
        reaction.classList.add('fade-out');
        reaction.addEventListener('transitionend', function() {
          reaction.remove();
        });
      }, 2000);
    });
  }


  loadProperties();
});



