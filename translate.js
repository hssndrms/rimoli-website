// This script handles the translate functionality
document.addEventListener("DOMContentLoaded", function () {
  // translations.json'u yükle
  let translations = {};
  fetch("translations.json")
    .then((res) => res.json())
    .then((data) => {
      translations = data;
      // Initialize with saved language
      updateContent(savedLanguage);
    });
  // Language selector functionality
  const languageButton = document.getElementById("languageButton");
  const languageDropdown = document.getElementById("languageDropdown");
  const selectedLanguage = document.getElementById("selectedLanguage");
  const languageButtons = languageDropdown.querySelectorAll("button");
  // Get saved language preference
  const savedLanguage = localStorage.getItem("language") || "tr";
  selectedLanguage.textContent = savedLanguage.toUpperCase();

  //Update content
  function updateContent(lang) {
    // Update navigation
    document.querySelectorAll("nav a").forEach((link) => {
      const key = link.getAttribute("href").replace("#", "");
      if (translations[lang].nav[key]) {
        link.textContent = translations[lang].nav[key];
      }
    });
    // Update hero section
    const heroTitle = document.querySelector(".hero-section h1");
    const heroDesc = document.querySelector(".hero-section p");
    const heroCtaQuote = document.querySelector(
      ".hero-section a:first-of-type"
    );
    const heroCtaDiscover = document.querySelector(
      ".hero-section a:last-of-type"
    );
    if (heroTitle) heroTitle.textContent = translations[lang].hero.title;
    if (heroDesc) heroDesc.textContent = translations[lang].hero.description;
    if (heroCtaQuote)
      heroCtaQuote.textContent = translations[lang].hero.cta.quote;
    if (heroCtaDiscover)
      heroCtaDiscover.textContent = translations[lang].hero.cta.discover;
    // Update features section
    const features = translations[lang].features;
    const featureSection = document.querySelector("#features");
    if (featureSection) {
      const featureKeys = ["quality", "delivery", "satisfaction"];
      const featureCards = featureSection.querySelectorAll(".feature-card");
      featureCards.forEach((card, index) => {
        const key = featureKeys[index];
        if (features[key]) {
          const cardTitle = card.querySelector("h3");
          const cardDesc = card.querySelector("p");
          if (cardTitle) cardTitle.textContent = features[key].title;
          if (cardDesc) cardDesc.textContent = features[key].desc;
        }
      });
    }
    // Update products section
    const products = translations[lang].products;
    const productsSection = document.querySelector("#products");
    if (productsSection) {
      const titleEl = productsSection.querySelector("h2");
      const subtitleEl = productsSection.querySelector("p");
      if (titleEl) titleEl.textContent = products.title;
      if (subtitleEl) subtitleEl.textContent = products.subtitle;
      // Update product categories
      const categories = Object.values(products.categories);
      productsSection
        .querySelectorAll(".product-card")
        .forEach((card, index) => {
          if (categories[index]) {
            const cardTitle = card.querySelector("h3");
            const cardDesc = card.querySelector("p");
            if (cardTitle) cardTitle.textContent = categories[index].title;
            if (cardDesc) cardDesc.textContent = categories[index].desc;
          }
        });
    }
    // Update about section
    const about = translations[lang].about;
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      const elements = {
        title: aboutSection.querySelector("h2"),
        content: aboutSection.querySelector("p"),
        missionTitle: aboutSection.querySelector(".mission h3"),
        missionDesc: aboutSection.querySelector(".mission p"),
        visionTitle: aboutSection.querySelector(".vision h3"),
        visionDesc: aboutSection.querySelector(".vision p"),
      };
      if (elements.title) elements.title.textContent = about.title;
      if (elements.content) elements.content.textContent = about.content;
      if (elements.missionTitle)
        elements.missionTitle.textContent = about.mission.title;
      if (elements.missionDesc)
        elements.missionDesc.textContent = about.mission.desc;
      if (elements.visionTitle)
        elements.visionTitle.textContent = about.vision.title;
      if (elements.visionDesc)
        elements.visionDesc.textContent = about.vision.desc;
    }
    // Update keyfigures section
    const keyfigures = about.keyfigures;
    const keyfiguresSection = aboutSection.querySelector("#keyfigures");
    if (keyfiguresSection) {
      const keys = ["experience", "employee", "export", "production", "area"];
      const valueDivs = keyfiguresSection.querySelectorAll(".text-center");
      valueDivs.forEach((div, idx) => {
        const label = div.querySelector(".text-gray-600");
        if (label && keyfigures[keys[idx]]) {
          label.innerHTML = keyfigures[keys[idx]];
        }
      });
    }
    // Update testimonials section
    // const testimonials = translations[lang].testimonials;
    // const testimonialsSection = document.querySelector('#testimonials');
    // if (testimonialsSection) {
    // const titleEl = testimonialsSection.querySelector('h2');
    // const subtitleEl = testimonialsSection.querySelector('p');
    // if (titleEl) titleEl.textContent = testimonials.title;
    // if (subtitleEl) subtitleEl.textContent = testimonials.subtitle;
    // const testimonialCards = testimonialsSection.querySelectorAll('.testimonial-card');
    // testimonialCards.forEach((card, index) => {
    //   const testimonial = testimonials.testimonials[index];
    //   if (testimonial) {
    //     const cardText = card.querySelector('p');
    //     const cardName = card.querySelector('h4');
    //     if (cardText) cardText.textContent = testimonial.text;
    //     if (cardName) cardName.textContent = testimonial.name;
    //   }
    // });
    //}
    // Update contact section
    const contact = translations[lang].contact;
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const titleEl = contactSection.querySelector("h2");
      const subtitleEl = contactSection.querySelector("p");
      if (titleEl) titleEl.textContent = contact.title;
      if (subtitleEl) subtitleEl.textContent = contact.subtitle;

      // Update form labels
      const form = contact.form;
      const formEl = contactSection.querySelector("form");
      if (formEl) {
        const formTitle = formEl.querySelector("h3");
        if (formTitle)
          formTitle.textContent = contact.formTitle || contact.title;
        const formElements = {
          name: formEl.querySelector('label[for="name"]'),
          company: formEl.querySelector('label[for="company"]'),
          email: formEl.querySelector('label[for="email"]'),
          phone: formEl.querySelector('label[for="phone"]'),
          subject: formEl.querySelector('label[for="subject"]'),
          message: formEl.querySelector('label[for="message"]'),
          consent: formEl.querySelector(".custom-checkbox span:last-child"),
          submit: formEl.querySelector('button[type="submit"]'),
        };
        if (formElements.name) formElements.name.textContent = form.name;
        if (formElements.company)
          formElements.company.textContent = form.company;
        if (formElements.email) formElements.email.textContent = form.email;
        if (formElements.phone) formElements.phone.textContent = form.phone;
        if (formElements.subject)
          formElements.subject.textContent = form.subject;
        if (formElements.message)
          formElements.message.textContent = form.message;
        if (formElements.consent)
          formElements.consent.textContent = form.consent;
        if (formElements.submit) formElements.submit.textContent = form.submit;
      }
      // Update contact info
      const info = contact.info;
      const infoSection = contactSection.querySelector(".info-card");
      if (infoSection) {
        const titleEl = infoSection.querySelector("h3");
        if (titleEl) titleEl.textContent = contact.infoTitle;
        const infoKeys = ["address", "phone", "email", "hours", "social"];
        const headings = infoSection.querySelectorAll("h4");
        headings.forEach((heading, index) => {
          const keys = Object.keys(info);
          if (keys[index]) {
            heading.textContent = info[keys[index]];
          }
        });
      }
      // Update map-card section
      const map = contact.map;
      const mapCardDivs = document.querySelectorAll(".map-card");
      if (map && mapCardDivs.length >= 2) {
        // Her map kartının içindeki h4'ü bul ve çevir
        const mapTitles = [map.store, map.factory];
        mapCardDivs.forEach((div, idx) => {
          const h4 = div.querySelector("h4");
          if (h4 && mapTitles[idx]) {
            h4.textContent = mapTitles[idx];
          }
        });
      }

      // ...updateContent fonksiyonu sonunda...

      // Update footer section
      const footerSection = document.querySelector("footer");
      if (footerSection) {
        // Firma açıklaması (about.content)
        const aboutDesc = footerSection.querySelector("p.text-gray-400.mb-6");
        if (aboutDesc) aboutDesc.textContent = about.content;

        // Hızlı Bağlantılar başlığı
        const quickLinksTitle = footerSection.querySelector(
          "h3.text-lg.font-semibold.mb-6"
        );
        if (quickLinksTitle)
          quickLinksTitle.textContent =
            lang === "tr" ? "Hızlı Bağlantılar" : "Quick Links";

        // Hızlı Bağlantılar linkleri
        const quickLinks = [
          { selector: 'a[href="#home"]', key: "home" },
          { selector: 'a[href="#about"]', key: "about" },
          { selector: 'a[href="#products"]', key: "products" },
          { selector: 'a[href="#contact"]', key: "contact" },
        ];
        quickLinks.forEach((link) => {
          const el = footerSection.querySelector(link.selector);
          if (el && translations[lang].nav[link.key]) {
            el.textContent = translations[lang].nav[link.key];
          }
        });

        // İletişim başlığı
        const contactTitle = footerSection.querySelectorAll(
          "h3.text-lg.font-semibold.mb-6"
        )[1];
        if (contactTitle) contactTitle.textContent = contact.title;

        // ...updateContent fonksiyonu, footer section güncellemesinin sonuna ekleyin...

        // Copyright metni
        const copyright = translations[lang].copyright;
        const copyrightEl = footerSection.querySelector(".copyright-card");
        if (copyrightEl) copyrightEl.textContent = copyright;
      }
    }
  }
  // Toggle dropdown
  languageButton.addEventListener("click", function (e) {
    e.stopPropagation();
    languageDropdown.classList.toggle("hidden");
  });
  // Handle language selection
  languageButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const lang = this.dataset.lang;
      selectedLanguage.textContent = lang.toUpperCase();
      localStorage.setItem("language", lang);
      languageDropdown.classList.add("hidden");
      updateContent(lang);
    });
  });
  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !languageButton.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.classList.add("hidden");
    }
  });
});
