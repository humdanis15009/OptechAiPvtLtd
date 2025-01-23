import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { data } from "./assets/data";
import SliderSection from "./components/SliderSection";
import Header from "./components/Header";

export default function App() {
  const {
    companyInfo,
    navigation,
    aboutUs,
    services,
    strengths,
    blogs,
    contactForm,
    footer,
  } = data;
  console.log(data);

  return (
    <div className="min-h-screen bg-white">
      <Header navigation={navigation} companyInfo={companyInfo} />
      <SliderSection companyInfo={companyInfo} />

      {/* About Section */}
      <section
        id={aboutUs.id}
        className="px-8 py-16 h-full flex items-center  bg-blue-50 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${companyInfo.sectionbg1})` }}
      >
        <div className="max-w-7xl mx-auto bg-white bg-opacity-80 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">{aboutUs.title}</h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            {aboutUs.description}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section
        className=" flex items-center px-8 py-16 bg-blue-50 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${companyInfo.sectionbg1})` }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-500">
            Our Strengths
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">{strength.name}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blogs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="h-48 bg-gray-100 relative">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">
                    {blog.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <div className="text-gray-600 text-sm">{blog.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  {companyInfo.contactNumbers.map((number, index) => (
                    <p key={index} className="text-gray-600">
                      {number}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-gray-600">{companyInfo.email}</p>
                  <p className="text-gray-600">{companyInfo.alternateEmail}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <p className="text-gray-600">{companyInfo.location}</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-blue-600" />
                <p className="text-gray-600">{companyInfo.businessHours}</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            {contactForm.fields.map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field}
                </label>
                {field === "Message" ? (
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={4}
                  />
                ) : (
                  <input
                    type={
                      field === "Date"
                        ? "date"
                        : field === "Time"
                        ? "time"
                        : "text"
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                )}
              </div>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a to="/" className="text-2xl font-bold">
              {companyInfo.name}
            </a>
            <p className="text-gray-400">{companyInfo.poweredBy}</p>
            <p className="text-gray-400">{companyInfo.certification}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick as</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item}>
                  <a
                    to={item.to}
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {item?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{companyInfo.location}</li>
              <li>{companyInfo.email}</li>
              <li>{companyInfo.contactNumbers[0]}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {Object.keys(footer.socialMedia).map((social) => (
                <a
                  key={social}
                  to={footer.socialMedia[social]}
                  className="text-gray-400 hover:text-white"
                >
                  {social.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">{footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
